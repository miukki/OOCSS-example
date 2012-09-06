window.APP = {
	'cst': {},
	'popup': {},
	'form': {},
	'slider': {},
	'cards': {}
};

$('document').ready(function(){

	var self = APP;
	self.slider.open();
	self.form.openprice();
	self.cards.open();
	
	$('.js-addreview').live('click', function(){
		event.preventDefault();
		$('#textarea').focus();
	});
	
	var $nav = $('nav');
	var $typehair = $('#typehair');
	var $location = $nav.find('.location');
	var $sortcost = $('#sortcost');
	var $popup = $('#popup');
	var $dimmer = $('#dimmer');
	var $header = $('header');
	var $popreg = $header.find('.popreg'); 

	
	$popup.find('#getpass').live('click', function () {
		APP.popup.openPopup(self.cst.EMPTY, '/tmpl/popup/getpass.tmpl');
	});
	
	
	$popreg.bind('click', function () {
		event.preventDefault();
		APP.popup.openPopup(self.cst.EMPTY, '/tmpl/popup/reg.tmpl');
	});
	
	$sortcost.find('.link').bind('click', function (){
		event.preventDefault();
		APP.popup.openPopupMini(self.cst.SORT, $(this));
	});
	
	$location.bind('click', function () {
		event.preventDefault();
		APP.popup.openPopupMini(self.cst.LOCATION, $(this));
	});
	
	$typehair.find('.icon-checkbox').bind('click', function(){
		var elem = $(this);
		
		if(elem.hasClass('check')){
			elem.removeClass('check');
		}
		else {
			elem.addClass('check');
		};
	});
	
	$typehair.find('.typehair').bind('click', function(){
		event.preventDefault();
		APP.popup.openPopupMini(self.cst.TYPE_HAIR, $(this));
	});

	
	if($popup.length){
		APP.popup.closeAble();
	};


});
