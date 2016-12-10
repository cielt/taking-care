(function ($) {
  'use strict';

  var TakingCare = {};

  $(function () {

    var $body = $('body'),
        $globalMenuBtns = $('#global-menu-btn, #close-menu-btn, .menu-overlay'),
        $marqueeMain = $('.marquee-main'),
        $marqueeRefreshBtn = $marqueeMain.find('.slide-refresh-btn'),
        $homeSlideshow = $('#home-slideshow'),
        $homeSlides = $homeSlideshow.find('.image-window'),
        $homeSlideRefreshBtn = $('.slide-controls .slide-refresh-btn'),
        homeSlidesArr = [],
        headerWaypoint,
        $scrollDownArrow = $marqueeMain.find('.slide-control-btn.scroll-to-content-btn'),
        $siteNavBlock = $('.site-nav-block');

    TakingCare.currSlideIndex = 0;

    // Global Nav Menu
    if ($globalMenuBtns.length) {
      $globalMenuBtns.on('click', function (ev) {
        ev.preventDefault();
        $body.toggleClass('nav-open nav-closed');
        $siteNavBlock.scrollTop(0);     
      });
    }

    // Home Slides: init
    if ($homeSlides.length) {
      $homeSlides.removeClass('current');
      $homeSlides.first().addClass('current');

      // click handler
      $marqueeRefreshBtn.on('click', function (ev) {
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

    // scroll-down arrow
    $scrollDownArrow.arctic_scroll();

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
        return -marqueeHeight;
      }
    });
  });

})(jQuery);