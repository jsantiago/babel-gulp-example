// Gulp
var gulp = require('gulp');
var del = require('del');

// JS
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

//------------------------------------------------------------------------------

gulp.task('clean', function(cb){
    del(['./dist'], cb);
});

//------------------------------------------------------------------------------

gulp.task('js', function(){
    browserify({
        entries: './src/js/main.js'
    })
    .transform(babelify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

//------------------------------------------------------------------------------

gulp.task('default', ['js']);
