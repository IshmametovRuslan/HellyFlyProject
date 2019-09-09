module.exports= function () {
	$.gulp.task( 'watch', function () {
		$.gulp.watch( 'src/pug/**/*.pug', $.gulp.series( 'pug' ) );
		$.gulp.watch( 'src/static/sass/**/*.scss', $.gulp.series( 'sass' ) );
		$.gulp.watch( 'src/static/js/**/*.js', $.gulp.series( 'scripts' ) );
		$.gulp.watch( 'src/static/img/**/*.+(png|jpg|jpeg|gif|svg)', $.gulp.series( 'image' ) );
	} );
};