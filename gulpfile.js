var gulp = require( 'gulp' ),

	autoprefixer = require( 'gulp-autoprefixer' ),
	changed = require( 'gulp-changed' ),

	paths = {
		css: [ 'src/css/**/*.css' ]
	};

// default
gulp.task( 'default', ['prefix', 'watch'] );

// autoprefix
gulp.task( 'prefix', function() {
	gulp.src( paths.css )
		.pipe( changed('_css') )
		.pipe( autoprefixer('last 1 version') )
		.pipe( gulp.dest('_css') );
});

// watch
gulp.task( 'watch', function() {
	gulp.watch( paths.css, ['prefix'] );
});

