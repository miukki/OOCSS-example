(function() {
	var self = APP.cards;
	
	self.open = function() {
		var $cards = $('.js-card');
		if(!$cards.length) {
			return false;
		};

		$cards.find('.icon-heart').click(function(){
			if($(this).hasClass('minus')) {
				$(this).parents('.js-card').remove();
			};
			if($(this).hasClass('no-add')) {
				$(this).removeClass('no-add');
			}
			else{
				$(this).addClass('no-add');
			};
		});
		
		$('#add-card').click(function(){
			var $cards = $('#cards');
			$.get('/tmpl/card.tmpl', function (template) {
				$.tmpl(template, APP.cst.CARD).appendTo($cards);
			});
			return false;
		});
		
	};
	
	
	
})();
