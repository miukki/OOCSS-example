(function() {
	var self = APP.form;
	
	self.open = function() {
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
			$.get('/tmpl/table/edit.tmpl', function (template) {
				$.tmpl(template, APP.cst.DATA_ADD_FORM).appendTo($services);
			});
			
		});
		
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
				$.get('/tmpl/table/edit.tmpl', function (template) {
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
					category: true,
					srv: 'edit data', 
					edit: true});
				tmpl.appendTo($services);
			}); // true/false for check
			$marker.remove();
		});
		

		
	};
	
	
	
})();