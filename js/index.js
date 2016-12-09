$('.ham-menu').click(function(){
	$('#slide-menu').toggleClass('toggled');
	$('body').toggleClass('toggled');
	$('#dark-overlay').fadeIn(200);
});

$('.ham-menu-close').click(function(){
	$('#slide-menu').removeClass('toggled');
	$('body').removeClass('toggled');
	$('#dark-overlay').fadeOut(200);
});


$('#slide-menu,.ham-menu').clickoutside(function(){
	$('#slide-menu').removeClass('toggled');
	$('body').removeClass('toggled');
	$('#dark-overlay').fadeOut(200);
});