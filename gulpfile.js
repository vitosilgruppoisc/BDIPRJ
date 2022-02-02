"use strict";

const gulp = require('gulp');

function copyVersion() {
  return gulp
    .src("./version.json")
    .pipe(gulp.dest("./dist"))
}

function copybuild() {
  return gulp
    .src('./dist/**/*')
    .pipe(gulp.dest('../../../target/classes/public'));
}

exports.default = gulp.series(copyVersion, copybuild);