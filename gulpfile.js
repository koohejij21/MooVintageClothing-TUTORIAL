const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer')


gulp.task('sass', () => {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 4 version'))
        .pipe(gulp.dest('assets'))
});

gulp.task('watch', () => {
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
})


/*
npm i -D gulp gulp-sass gulp-postcss autoprefixer cssnano

gulp.task('sass', () => {
    return src('scss/*.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest('assets', { sourcemaps: '.' }))
});

*/