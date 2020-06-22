const { dest, src, watch, series, parallel, task } = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	babel = require('gulp-babel')
	eslint = require('gulp-eslint');

module.exports = task('scripts', () => {
	return src('src/js/**/*.js')
		.pipe(eslint({
			fix: true
		}))
		.pipe(eslint.format())
		.pipe(sourcemaps.init())
		.pipe(babel({
            presets: ['@babel/env']
		}))
		.pipe(sourcemaps.write())
		.pipe(dest('./build/js'))
});