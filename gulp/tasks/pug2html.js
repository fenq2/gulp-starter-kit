const gulp = require('gulp'),
	pug = require('gulp-pug'),
	pugLinter = require('gulp-pug-linter'),
	htmlValidator = require('gulp-w3c-html-validator'),
	bemValidator = require('gulp-html-bem-validator'),
	plumber = require('gulp-plumber');

module.exports = function pug2html() {
	return gulp.src('src/pages/*.pug')
		.pipe(plumber())
		.pipe(pugLinter({ reporter: 'default' }))
		.pipe(pug({ pretty: true }))
		.pipe(htmlValidator())
		.pipe(bemValidator())
		.pipe(gulp.dest('./build/'))
};