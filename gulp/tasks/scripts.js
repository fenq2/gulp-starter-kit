const gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	babel = require('gulp-babel');

module.exports = function scripts() {
	return gulp.src('src/js/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel({
            presets: ['@babel/env']
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./build/js'))
};