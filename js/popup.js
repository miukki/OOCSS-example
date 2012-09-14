(function() {
	var self = APP.popup;
	
	var $nav = $('nav');
	var $typehair = $('#typehair');
	var $location = $nav.find('.location');
	var $location_index = $nav.find('.location').data('index');
	var $sortcost = $('#sortcost');
	var $popup = $('#popup');
	var $dimmer = $('#dimmer');
	var $header = $('header');
	var $popreg = $header.find('.popreg'); 

	$location.bind('click', function () {
		self.openPopupMini(APP.cst.LOCATION, $(this));
		return false;
	});

	$sortcost.find('.link').bind('click', function (){
		self.openPopupMini(APP.cst.SORT, $(this));
		return false;
	});

	
	self.openPopupMini = function (data, elem) {
		$dimmer.show();
		var tpl = '/tmpl/popup/mini.tmpl';
		$.get(tpl, function (template) {
			$popup.css({
				'position' : 'static'
			}).html('');
			$.tmpl(template, {}).appendTo($popup);
			var list = $popup.find('#list');
			var item = '/tmpl/popup/item/item.tmpl';
			$.get(item, function (template) {
				$.tmpl(template, data).appendTo(list);
				$popup.find('#popup-mini').offset( function (i, val) {
					return { 
						top: elem.offset().top + elem.innerHeight() + 35, 
						left: elem.offset().left + elem.innerWidth()/2 - $(this).innerWidth()/2 
					};
				}).show();
				$popup.show();
				
				//active elem
				

					$.each(list.find('li').get(), function(i, v){
						console.log(v, $location_index);
						$(v).removeClass('active');
						if($(v).data("index") == $location_index){
							$(v).addClass('active');
						};
						$(v).live('click', function(){
							$(elem).attr('data-index', $(this).data("index"));
							console.log($(elem));
							
							$(elem).html('').html($(this).find('.txt').text());
							$location_index = $(this).data("index");
							self.closePopup();
						});
					});


			});
			self.closeAble();
		});
	};
	
	self.closePopup = function () {
		$popup.css('position', 'relative').html('').hide();
		$dimmer.hide();
	};

	self.closeAble = function () {
		$dimmer.live('click', self.closePopup);
		$('#close').live('click', self.closePopup)
	};
	
	self.openPopup = function (data, url) {
		$dimmer.addClass('white-bg-alpha').show();
		$.get(url, function (template) {
			$popup.html('');
			$.tmpl(template, data).appendTo($popup);
			$popup.show().children().show();
			APP.popup.closeAble();
		});

	};
	

})();