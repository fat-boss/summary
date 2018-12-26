var gulp = require('gulp')
var uglify = require('gulp-uglify')
var minify = require('gulp-minify-css')

gulp.task('default',function(){
  return gulp.src('./iosselect2.js')
      .pipe(uglify({
        mangle: true
      }))
      .pipe(gulp.dest('./dist'))
})

gulp.task('ta1',function(){
  return gulp.src('./iosselect-master/src/iosSelect.js')
      .pipe(uglify({
        mangle: true
      }))
      .pipe(gulp.dest('./dist'))
})

gulp.task('ta2',function(){
  return gulp.src('./iosselect-master/src/iosSelect.css')
      .pipe(minify())
      .pipe(gulp.dest('./dist'))
})