(function ($) {
  'use strict';

  $(function () {
    
    var $marqueeAlbum = $('#marquee-album');
    $marqueeAlbum.slick({
      adaptiveHeight: true,
      appendArrows: $('.marquee-controls'),
      dots: false,
      prevArrow: '<button type="button" class="slick-prev p-abs">&#x276e;</button>',
      nextArrow: '<button type="button" class="slick-next p-abs">&#x276f;</button>',
      slide: '.fit-frame',
    });
  });
})(jQuery);