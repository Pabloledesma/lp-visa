var gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	precss = require('precss'),
	image = require('gulp-image'),
	htmlmin = require('gulp-htmlmin'),
	minify = require('gulp-minify'),
	cssnano = require('cssnano'),

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

//css
gulp.task('css', function(){
	gulp.src(source + 'assets/css/*.css')
	.pipe(postcss([
		precss(),
		autoprefixer(),
		cssnano()
	]))
	.pipe(gulp.dest(dest + 'assets/css'));
});

//image
gulp.task('imageoptim', function(){
	gulp.src(source + 'assets/images/**/*.{jpg,png}')
	.pipe(image())
	.pipe(gulp.dest(dest + 'assets/images'));
});