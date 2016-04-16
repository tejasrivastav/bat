"use strict";

var fs          = require("fs"),
    browserify  = require("browserify"),
    del         = require("del"),
    gulp        = require("gulp"),
    rename      = require("gulp-rename"),
    jsHint      = require("gulp-jshint"),
    jscs        = require("gulp-jscs"),
    streamify   = require("gulp-streamify"),
    uglify      = require("gulp-uglify"),
    watchify    = require("gulp-watchify"),
    rev         = require("gulp-rev"),
    buffer      = require("gulp-buffer"),
    nodemon     = require("gulp-nodemon"),
    sass        = require("gulp-sass"),
    handlebars  = require("gulp-compile-handlebars"),
    runSequence = require("run-sequence"),
    source      = require("vinyl-source-stream");

var jsFiles          = ["*.js", "assets/javascripts/*.js", "assets/javascripts/components/**/*.js"],
    handlebarOptions = {
      helpers: {
        assetPath: function (path, context) {
          return [context.data.root[path]].join("/");
        }
      }
    };

gulp.task("clean", function () {
  return del(["public", "tmp"]);
});

gulp.task("lint", function () {
  return gulp.src(jsFiles)
    .pipe(jsHint())
    .pipe(jsHint.reporter("jshint-stylish", {
      verbose: true
    }))
    .pipe(jscs());
});

gulp.task("fonts", function () {
  return gulp.src("./assets/fonts/**/*.*", {
    base: "assets/fonts/"
  }).pipe(gulp.dest("./public/assets/fonts/"));
});

gulp.task("images", function () {
  return gulp.src("./assets/images/**/*.*", {
    base: "assets/images/"
  }).pipe(gulp.dest("./public/images/"));
});

gulp.task("scripts", function () {
  return browserify("./assets/javascripts/application.js")
    .bundle()
    .pipe(source("application.js"))
    .pipe(streamify(uglify()))
    .pipe(rename("main.min.js"))
    .pipe(gulp.dest("./tmp/assets/"));
});

gulp.task("styles:compile", function () {
  return gulp.src("./assets/stylesheets/application.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(rename("main.css"))
    .pipe(gulp.dest("./public/"));
});

gulp.task("styles", function () {
  return gulp.src("./assets/stylesheets/**/*.scss")
    .pipe(sass({
      outputStyle: "compressed"
    }).on("error", sass.logError))
    .pipe(rename("main.min.css"))
    .pipe(gulp.dest("./tmp/assets/"));
});

gulp.task("html:compile", function () {
  var manifest = {
    "main.min.css": "main.css",
    "main.min.js" : "main.js"
  };
  return gulp.src("./index.hbs")
    .pipe(handlebars(manifest, handlebarOptions))
    .pipe(rename("index.html"))
    .pipe(gulp.dest("./public"));
});

gulp.task("html", function () {
  var manifest = JSON.parse(fs.readFileSync("./public/manifest.json", "utf8"));
  return gulp.src("./index.hbs")
    .pipe(handlebars(manifest, handlebarOptions))
    .pipe(rename("index.html"))
    .pipe(gulp.dest("./public"));
});

gulp.task("assets", function () {
  return gulp.src(["./tmp/assets/*.css", "./tmp/assets/*.js"], {
    base: "tmp/assets"
  })
    .pipe(rev())
    .pipe(gulp.dest("./public/"))
    .pipe(rev.manifest({
      path : "manifest.json",
      merge: true
    }))
    .pipe(gulp.dest("./public/"));
});

gulp.task("scripts:watch", watchify(function (watchify) {
  return gulp.src(["./assets/javascripts/application.js"])
    .pipe(watchify({
      watch: true
    }))
    .pipe(rename("main.js"))
    .pipe(gulp.dest("./public/"));
}));

gulp.task("styles:watch", ["styles:compile"], function () {
  gulp.watch("./assets/stylesheets/**/*.scss", ["styles:compile"]);
});

gulp.task("build", function (callback) {
  runSequence(
    "lint",
    "fonts",
    "images",
    "scripts",
    "styles",
    "assets",
    "html",
    callback
  );
});

gulp.task("watch", function (callback) {
  runSequence(
    "lint",
    "fonts",
    "images",
    "scripts:watch",
    "styles:watch",
    "html:compile",
    callback
  );
});

gulp.task("serve", ["watch"], function () {
  var options = {
    script   : "server.js",
    delayTime: 1,
    env      : {
      PORT: 4001
    },
    watch    : jsFiles
  };
  return nodemon(options)
    .on("restart", function () {
      global.console.log("Restarting....");
    });
});

gulp.task("default", ["serve"]);
