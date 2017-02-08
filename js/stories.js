(function ($) {
  'use strict';

  var TakingCare = {};

  $(function () {
    var $grid = $('.stories-grid.masonry-grid');

    $grid.imagesLoaded(
      function () {
        $grid.masonry({
          itemSelector: '.grid-item',
          columnWidth: '.grid-sizer',
          gutter: '.gutter-sizer',
          percentPosition: true
        });
      });
  });

})(jQuery);