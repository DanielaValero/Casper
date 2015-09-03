var gulp = require('gulp');
var purify = require('gulp-purifycss');
var less = require('gulp-less');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');

var paths = {
    css: './assets/css/',
    less: './assets/less/*.less',
    js: './assets/js/*.js',
    templates: './**/*.hbs'
};
//purify(content, css, options, callback);
var purifyArgs = {
    content: [paths.js, paths.templates]
};

gulp.task('clean', function (cb) {
    del(['/assets/css/screen.css'], cb);
});

gulp.task('purify-css', function () {
    return gulp.src(paths.css)
        .pipe(purify(purifyArgs.content))
        .pipe(gulp.dest(paths.css));
});

gulp.task('less', function (cb) {
    return gulp.src(paths.less)
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(purify(purifyArgs.content))
        .pipe(gulp.dest(paths.css));
});


gulp.task('styles', ['clean', 'less']);
