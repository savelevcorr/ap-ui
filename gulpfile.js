const gulp         = require('gulp');
const sass         = require('gulp-sass');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano      = require('gulp-cssnano');
const csso         = require('gulp-csso');

gulp.task('default', function (done) {
    gulp.src('src/ap-ui.scss')
        .pipe(sass())
        .pipe(
            postcss([
                autoprefixer({ browsers: ['last 3 versions'] })
            ])
        )
        .pipe(csso())
        .pipe(cssnano())
        .pipe(gulp.dest('dist'));
    done();
});