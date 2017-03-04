// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
 return gulp.src('app/**/*.js')
   .pipe(jshint())
   .pipe(jshint.reporter('default'));
});

// Compile Our stylus
gulp.task('stylus', function() {
 return gulp.src('app/styles/stylus/*.styl')
   .pipe(stylus())
   .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
 return gulp.src('app/**/*.js')
   .pipe(concat('ng1-ux-select.js'))
   .pipe(gulp.dest('dist'))
   .pipe(rename('ng1-ux-select.min.js'))
   .pipe(uglify())
   .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
 gulp.watch('app/**/*.js', ['lint', 'scripts']);
 gulp.watch('app/styles/stylus/*.styl', ['stylus']);
});

// Default Task
gulp.task('default', ['lint', 'stylus', 'scripts']);