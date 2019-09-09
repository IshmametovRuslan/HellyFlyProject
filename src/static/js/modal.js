$(document).ready(function () {
	$('.open-modal').click(function(){
		$('.modal').addClass('modal-open');
	});

	$('.close').click(function(){
		e.preventDefault();
		$('.modal').removeClass('modal-open');
	});
});