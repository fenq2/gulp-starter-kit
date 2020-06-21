const { dest, src, watch, series, parallel, task } = require('gulp'),
	sass = require('gulp-sass'),
	autoPrefixer = require('gulp-autoprefixer'),
	cleanCss = require('gulp-clean-css'),
	sourcemaps = require('gulp-sourcemaps'),
	shorthand = require('gulp-shorthand'),
	csso = require('gulp-csso'),
	stylelint = require('gulp-stylelint');

module.exports = task('styles', () => {
	return src('src/styles/*.scss')
		.pipe(stylelint({
			reporters: [
				{
					formatter: 'string', 
					console: true
				}
			]
		}))
		.pipe(sass())
		.pipe(sourcemaps.init())
			.pipe(autoPrefixer())
			.pipe(cleanCss())
			.pipe(csso())
		.pipe(sourcemaps.write())
		.pipe(shorthand())
		.pipe(dest('./build/css'));
});