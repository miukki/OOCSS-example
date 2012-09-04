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
			
			if( $profile.offset().top <= $slider.offset().top  && $slider.offset().top <= $favorites.offset().top && $slider.offset().top <= $feedback.offset().top) {
				$slider.find('li').removeClass('active');
				$slider.find('.link-info').addClass('active');
			};
			
			if($favorites.offset().top < $feedback.offset().top){
				if( $favorites.offset().top <= ($slider.offset().top + 50) && ($slider.offset().top + 50) <= $feedback.offset().top) {
					$slider.find('li').removeClass('active');
					$slider.find('.link-fav').addClass('active');
				};

				if( $feedback.offset().top <= ($slider.offset().top + 100)) {
					$slider.find('li').removeClass('active');
					$slider.find('.link-feedback').addClass('active');
				};

			}
			else
			{
				if( $feedback.offset().top <= ($slider.offset().top + 100) &&  ($slider.offset().top + 100) <=	$favorites.offset().top) {
					$slider.find('li').removeClass('active');
					$slider.find('.link-feedback').addClass('active');
				};
				

				if( $favorites.offset().top <= ($slider.offset().top + 50)) {
					$slider.find('li').removeClass('active');
					$slider.find('.link-fav').addClass('active');
				};
				
			};





		});
		
		$('.link-info').click(function () {
			event.preventDefault();
			$(window).scrollTop(0);
		});
		
		$('.link-fav').click(function () {
			event.preventDefault();
			$(window).scrollTop($favorites.offset().top - 230);
		});
		
		$('.link-feedback').click(function () {
			event.preventDefault();
			$(window).scrollTop($feedback.offset().top - 260);
		});
		
	};
	
	
	
})();
