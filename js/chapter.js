(function ($) {
  'use strict';

  var TakingCare = {};

  $(function () {
    var $grid = $('.masonry-grid');

    $grid.imagesLoaded(
      function () {
        $grid.masonry({
          itemSelector: '.grid-item',
          columnWidth: '.thumb-1x',
          gutter: 10,
          percentPosition: true
        });
      });
  });

})(jQuery);