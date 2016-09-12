(function ($) {
  'use strict';

  $(function () {

    var $homeSlideshow = $('#marquee-album'),
    $body = $('body'),
    $marqueeMain = $('.marquee-main'),
    headerWaypoint;

    // $homeSlideshow.slick({
    //   adaptiveHeight: true,
    //   appendArrows: $('.marquee-controls'),
    //   dots: false,
    //   prevArrow: '<button type="button" class="slick-prev p-abs">&#x276e;</button>',
    //   nextArrow: '<button type="button" class="slick-next p-abs">&#x276f;</button>',
    //   slide: '.slide-frame',
    // });

    // Waypoints
    headerWaypoint = new Waypoint({
      element: $marqueeMain,
      handler: function (direction) {
        if (direction === 'up') {
          $body.removeClass('scroll-down');
        } else {
          $body.addClass('scroll-down');
        }
      },
      offset: function () {
        var marqueeHeight = this.element.outerHeight();
        console.log('offset '+ marqueeHeight);
        return -marqueeHeight; 
      }
    });

  });
})(jQuery);