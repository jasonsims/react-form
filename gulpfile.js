
/**
 * Loads all gulp plugins
 */

var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var reactify = require('reactify');
var less = require('gulp-less');

// Compile CSS
gulp.task('styles', function() {
  gulp.src('./src/**/*.less')
    .pipe(less())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./build/css'))
})

// Compile react
gulp.task('js', function() {
  gulp.src('./src/js/App.jsx')
    .pipe(browserify({
      transform: reactify,
      extensions: ['.jsx']
    }))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('./build/js'))
})

gulp.task('default', ['js', 'styles'])
