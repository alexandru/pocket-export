const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const typescript = require('gulp-typescript');
const watch = require('gulp-watch');

const tsProject = typescript.createProject("tsconfig.json");

gulp.add('default', () => {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('dist'))
});

gulp.add('watch', () => {
  watch('src/**/*.*', () => gulp.start('default'));
});