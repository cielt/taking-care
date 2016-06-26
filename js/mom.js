(function ($) {
  'use strict';

  $(function () {

    var $marqueeAlbum = $('#marquee-album'),
        $body = $('body'),
        headerWaypoint;

    $marqueeAlbum.slick({
      adaptiveHeight: true,
      appendArrows: $('.marquee-controls'),
      dots: false,
      prevArrow: '<button type="button" class="slick-prev p-abs">&#x276e;</button>',
      nextArrow: '<button type="button" class="slick-next p-abs">&#x276f;</button>',
      slide: '.fit-frame',
    });

    // Waypoints
    var scrollOffset = -50;
    headerWaypoint = new Waypoint({
                element: $body,
                handler: function (direction) {
                    if (direction === 'up') {
                        $body.removeClass('scrolling');
                    } else {
                        $body.addClass('scrolling');
                    }
                },
                offset: scrollOffset // height of global nav row
            });

  });
})(jQuery);