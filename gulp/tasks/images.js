const { dest, src, watch, series, parallel, task } = require('gulp'),
	tinypng = require('gulp-tinypng-free'),
	cache = require('gulp-cache');

module.exports = task('images', () => {
	return src('src/images/**/*.{png,jpg,gif,svg}')
		.pipe(cache(
			tinypng()
		))
		.pipe(dest('./build/images/'))
});