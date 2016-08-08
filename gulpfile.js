var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge-stream');

var scssPath = './src/scss/**/*.scss';

gulp.task('sass', function() {
    var normal = gulp.src(scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css/'));

    var compressed = gulp.src(scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css/'));

    return merge(normal, compressed);
});

gulp.task('watch', function() {
    gulp.watch(scssPath, ['sass']);
});

gulp.task('default', ['sass', 'watch'], function(done) {
    done();
});
