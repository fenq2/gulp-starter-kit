const gulp = require('gulp'),
	pug = require('gulp-pug'),
	pugLinter = require('gulp-pug-linter'),
	htmlValidator = require('gulp-w3c-html-validator'),
	plumber = require('gulp-plumber');

module.exports = function pug2html() {
	return gulp.src('src/pages/*.pug')
		.pipe(plumber())
		.pipe(pugLinter({ reporter: 'default' }))
		.pipe(pug({ pretty: true }))
		.pipe(htmlValidator())
		.pipe(gulpHtmlBemValidator())
		.pipe(gulp.dest('./build/'))
};