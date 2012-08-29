/* by miukki
*/
window.APP = {
	'cst': {},
	'popup': {},
	'form': {},
	'slider': {}
};

$('document').ready(function(){

	var self = APP;
	self.slider.open();
	self.form.open();
	
	$('.add-review-link').live('click', function(){
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
		var url_getpass =  '/tmpl/popup/getpass.tmpl';
		_openPopup(self.cst.EMPTY, url_getpass);
	});
	
	
	$popreg.bind('click', function () {
		event.preventDefault();
		var url = '/tmpl/popup/reg.tmpl';
		_openPopup(self.cst.EMPTY, url);
	});
	
	$sortcost.find('.link').bind('click', function (){
		var parent = $sortcost;
		if(parent.hasClass('up')){
			parent.removeClass('up').addClass('down');
		}
		else {
			parent.addClass('up').removeClass('down');
		};
	});
	
	$location.bind('click', function () {
		event.preventDefault();
		_openPopupMini(self.cst.LOCATION, $(this));
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
		_openPopupMini(self.cst.TYPE_HAIR, $(this));
	});

	
	var _openPopup = function (data, url) {
		$dimmer.show();
		$.get(url, function (template) {
			$popup.html('');
			$.tmpl(template, data).appendTo($popup);
			$popup.children().show();
			_closeAble();
		});

	};

	var _openPopupMini = function (data, elem) {
		$dimmer.show();
		var tpl = '/tmpl/popup/mini.tmpl';
		$.get(tpl, function (template) {
			$popup.html('');
			$.tmpl(template, {}).appendTo($popup);
			var list = $popup.find('#list');
			var item = '/tmpl/popup/item/item.tmpl';
			$.get(item, function (template) {
				$.tmpl(template, data).appendTo(list);
				$popup.find('#popup-mini').offset( function (i, val) {
					return { 
						top: elem.offset().top + elem.innerHeight() + 6, 
						left: elem.offset().left + elem.innerWidth()/2 - $(this).innerWidth()/2 
					};
				}).show();
			});
			_closeAble();
		});
	};
	
	var _closePopup = function () {
		$popup.html('');
		$dimmer.hide();
	};

	var _closeAble = function () {
		$dimmer.bind('click', _closePopup);
		$('#close').bind('click', _closePopup)
	};


});
