const { dest, src, watch, series, parallel, task } = require('gulp'),
	pug = require('gulp-pug'),
	pugLinter = require('gulp-pug-linter'),
	htmlValidator = require('gulp-w3c-html-validator'),
	bemValidator = require('gulp-html-bem-validator'),
	plumber = require('gulp-plumber');

module.exports = task('pug2html', () => {
	return src('src/pages/*.pug')
		.pipe(plumber())
		.pipe(pugLinter({ reporter: 'default' }))
		.pipe(pug({ pretty: true }))
		.pipe(bemValidator())
		.pipe(htmlValidator())
		.pipe(dest('./build/'))
});