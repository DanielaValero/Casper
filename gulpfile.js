var gulp = require('gulp');
var purify = require('gulp-purify');
var less = require('gulp-less');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
    css: 'assets/css/screen.css',
    less: 'assets/less/**/screen.less',
    js: 'assets/js/',
    templates: '**/*.hbs'
};


gulp.task('purify-css', function () {
    return gulp.src(paths.css)
        .pipe(purify([paths.js, paths.templates]))
        .pipe(gulp.dest(paths.css));
});


gulp.task('less', function () {
    return gulp.src(paths.less)
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(paths.css));
});


gulp.task('styles', ['less', 'purify-css']);
