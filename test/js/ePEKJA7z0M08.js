'use strict';
(function ($) {
	jQuery(window).on('load',function(){
		jQuery(window).trigger('resize');
	});

	jQuery(window).on('elementor/frontend/init', function(){
		elementorFrontend.hooks.addAction('frontend/element_ready/wb-before-after-image-slider-elementor.default', function ($scope, $) {
			var before_text = $scope.find('.before_text').text();
			var after_text = $scope.find('.after_text').text();
			$scope.find('.wb_ebais_twentytwenty_container').twentytwenty({
				'before_label' : before_text,
				'after_label'  : after_text
			});
		});
	});

	jQuery(window).on('scroll', function() {
		jQuery('.wb_ebais_twentytwenty_container').each(function(){
			if (jQuery(this).wbebaic_isInViewport()) {
				jQuery(window).trigger('resize');
			}
		});
	});
})(jQuery);

jQuery.fn.wbebaic_isInViewport = function() {
  var elementTop = jQuery(this).offset().top;
  var elementBottom = elementTop + jQuery(this).outerHeight();

  var viewportTop = jQuery(window).scrollTop();
  var viewportBottom = viewportTop + jQuery(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};