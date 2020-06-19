const gulp = require('gulp'),
	sass = require('gulp-sass');
const autoPrefixer = require('gulp-autoprefixer');

module.exports = function styles() {
	return gulp.src('src/styles/*.scss')
		.pipe(sass())
		.pipe(sourcemaps.init())
			.pipe(autoPrefixer())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./build/css'))
};