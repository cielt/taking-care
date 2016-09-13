(function ($) {
  'use strict';

  var TakingCare = {};

  $(function () {

    var $body = $('body'),
        $marqueeMain = $('.marquee-main'),
        $homeSlideshow = $('#home-slideshow'),
        $homeSlides = $homeSlideshow.find('.image-window'),
        $homeSlideRefreshBtn = $('.slide-controls .slide-refresh-btn'),
        homeSlidesArr = [],
        headerWaypoint;

    // $homeSlideshow.slick({
    //   adaptiveHeight: true,
    //   appendArrows: $('.marquee-controls'),
    //   dots: false,
    //   prevArrow: '<button type="button" class="slick-prev p-abs">&#x276e;</button>',
    //   nextArrow: '<button type="button" class="slick-next p-abs">&#x276f;</button>',
    //   slide: '.slide-frame',
    // });

    TakingCare.currSlideIndex = 0;

    // Home Slides: init
    if ($homeSlides.length) {
      $homeSlides.removeClass('current');
      $homeSlides.first().addClass('current');

      // click handler
      $marqueeMain.on('click', '.slide-refresh-btn', function (ev) {
        ev.preventDefault();
        
        var numSlides = $homeSlides.length;
        
        if (TakingCare.currSlideIndex === numSlides-1) {
          TakingCare.currSlideIndex = 0;
        } else {
          TakingCare.currSlideIndex += 1;
        }   
        
        $homeSlides.removeClass('current');
        $homeSlides.eq(TakingCare.currSlideIndex).addClass('current');

      });  
    }

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