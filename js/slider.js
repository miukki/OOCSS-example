(function() {
	var self = APP.slider;
	
	self.open = function() {

		var $slider = $('#slider');
		if(!$slider.length) {
			return false;
		};
		
		var $favorites  = $('#favorites');
		var $profile = $('#profile');
		var $feedback = $('#feedback');
		
		$(window).scroll(function () { 
			
			if( $profile.offset().top <= $slider.offset().top ) {
				$slider.find('li').removeClass('active');
				$slider.find('.link-info').addClass('active');
			};

			if( $favorites.offset().top <= $slider.offset().top ) {
				$slider.find('li').removeClass('active');
				$slider.find('.link-fav').addClass('active');
			};

			if( $feedback.offset().top <= $slider.offset().top ) {
				$slider.find('li').removeClass('active');
				$slider.find('.link-feedback').addClass('active');
			};

		});
		
		
		
	};
	
	
	
})();
