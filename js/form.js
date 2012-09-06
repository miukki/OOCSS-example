(function() {
	var self = APP.form;
	
	self.openprice = function() {
		var $services = $('.services').find('table');
		if(!$services.length){
			return false;
		};
		
		$.get('/tmpl/table/title.tmpl', function (template) {
			$services.html('');
			$.tmpl(template, APP.cst.EMPTY).appendTo($services);
			$.get('/tmpl/table/price.tmpl', function (template) {
				$.tmpl(template, APP.cst.PRICE).appendTo($services);
			});
			$.get('/tmpl/table/add.tmpl', function (template) {
				$.tmpl(template, APP.cst.DATA_ADD_FORM).appendTo($services);
				_checkCategory();
			});
		});
	
			
		var _checkCategory = function () {
				$services.find('.able-category').live('click', function(){
					event.preventDefault();
					APP.popup.openPopup(APP.cst.EMPTY, '/tmpl/popup/openprice.tmpl');
				});

				$services.find('.services-select').live('click', function(){
					if($(this).hasClass('js-able')){
						APP.popup.openPopupMini(APP.cst.CATEGORY, $(this));
					};
				});


				$services.find('.form-check').find('.item').live( 'click', function(){
					var $typeselect = $(this).parents('tr.add').find('.services-select');
					if($(this).hasClass('js-name')){
						console.log('1');
						$typeselect.removeClass('js-able').hide();
					}
					else{
						$typeselect.addClass('js-able').show();
					};
				});	
	
		
		};
			
	
		var $tools = $services.find('.t-link');
		
		
		$tools.find('.add').live('click', function () {
			var $marker = $(this).parent().parent().parent().parent();
			$.get('/tmpl/table/price.tmpl', function (template) {
				var tmpl = $.tmpl(template, { 
					title: $marker.find('.services-title').val(), 
					cost: $marker.find('.services-cost').val(), 
					category: true }); // true/false for check
				$marker.before(tmpl);
				$marker.remove();
				$.get('/tmpl/table/add.tmpl', function (template) {
					$.tmpl(template, APP.cst.DATA_ADD_FORM).appendTo($services);
				});
				
			});
		});

		$tools.find('.del').live('click', function () {
			var $tr = $(this).parent().parent().parent().parent();
			$tr.remove();
		});
		
		$tools.find('.edit').live('click', function () {
			var $marker = $(this).parent().parent().parent().parent();
			$services.find('tr.add').remove();
			$.get('/tmpl/table/edit.tmpl', function (template) {
				var tmpl = $.tmpl(template, { 
					title: $marker.find('.title').html(), 
					cost: $marker.find('.cost').html(), 
					category: false, /*edit! */
					srv: 'edit data'});
				tmpl.appendTo($services);
			}); // true/false for check
			$marker.remove();
		});
		

		
	};
	
	
	
})();