var gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	precss = require('precss'),
	//image = require('gulp-image'),
	htmlmin = require('gulp-htmlmin'),
	minify = require('gulp-minify'),

	source = 'development/',
	dest = 'production/';

//HTML
gulp.task('html', function(){
	gulp.src(source + '**/**/*.html')
	.pipe(htmlmin({
		collapseWhitespace: true,
		minifyJS: true,
		removeComments: true
	}))
	.pipe(gulp.dest(dest));
});

//Javascript

gulp.task('javascript', function(){
	gulp.src(source + 'assets/js/*.js')
	.pipe(minify())
	.pipe(gulp.dest(dest + 'assets/js'));
});