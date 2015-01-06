
/**
 * Loads all gulp plugins
 */

var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var reactify = require('reactify');

// Compile CSS
//
gulp.task('styles', function() {
  // TODO
})

// Compile react
gulp.task('js', function() {
  gulp.src('./react_components/App.jsx')
    .pipe(browserify({
      transform: reactify,
      extensions: ['.jsx']
    }))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('./build/js'))
})

gulp.task('default', ['js', 'styles'])
