var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge-stream');

var demoPath = './demo/scss/**/*.scss';
var gridpath = './src/scss/**/*.scss';

gulp.task('demo', function() {
    return gulp.src(demoPath)
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./demo/css'));
});

gulp.task('grid', function() {
    var normal = gulp.src(gridpath)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css/'));

    var compressed = gulp.src(gridpath)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css/'));

    return merge(normal, compressed);
});

gulp.task('watch', function() {
    gulp.watch(demoPath, ['demo']);
    gulp.watch(gridpath, ['grid']);
});

gulp.task('default', ['demo', 'grid', 'watch'], function(done) {
    done();
});
