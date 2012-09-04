(function() {
	var self = APP.cards;
	
	self.open = function() {
		var $cards = $('.js-card');
		if(!$cards.length) {
			return false;
		};

		$cards.find('.icon-heart').click(function(){
			if(!$(this).hasClass('minus')) {
				return false;
			};
			
			$(this).parents('.js-card').remove();
			
		});
		
		
	};
	
	
	
})();
