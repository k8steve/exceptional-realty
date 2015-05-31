$(function() {

	//Mobile Menu//

	$('a.menu-icon').click(function() {
		$('#menu-links').slideToggle();
	});

	//fix hidden links on widow resize

	$(window).resize(function(){
		if ($(window).width() > 700) {
			$('menu-links').removeAttr('style');
		}
	});

});