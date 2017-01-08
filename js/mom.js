(function ($) {
  'use strict';

  var TakingCare = {};

  $(function () {

    var $body = $('body'),
        bodyLayout = $body.data('layout'),
        $globalMenuBtns = $('#global-menu-btn, #close-menu-btn, .menu-overlay'),
        $heroEl, // main marquee el for Waypoint settings
        $marqueeMain = $('.marquee-main'),
        $marqueeRefreshBtn = $marqueeMain.find('.slide-refresh-btn'),
        $homeSlideshow = $('#home-slideshow'),
        $homeSlides = $homeSlideshow.find('.slide-image'),
        $homeSlideRefreshBtn = $('.slide-controls .slide-refresh-btn'),
        homeSlidesArr = [],
        headerWaypoint,
        $scrollDownArrow = $marqueeMain.find('.scroll-to-content-btn'),
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

      // slides
      window.setInterval(function () {
        var numSlides = $homeSlides.length;
        
        if (TakingCare.currSlideIndex === numSlides-1) {
          TakingCare.currSlideIndex = 0;
        } else {
          TakingCare.currSlideIndex += 1;
        }
        
        $homeSlides.removeClass('current');
        $homeSlides.eq(TakingCare.currSlideIndex).addClass('current');

      }, 8000);
    }

    // scroll-down arrow
    $scrollDownArrow.arctic_scroll();

    // Waypoints: waypoint el depends on page
    switch (bodyLayout) {
      case 'tc-home': 
        $heroEl = $('.marquee-main');
        break;

      case 'tc-chapter':
        $heroEl = $('.cover-image-spacing');
        break;

      case 'tc-slideshow':
        $heroEl = $('.header-slideshow');
        break;  

      default:
        $heroEl = $('.marquee-main');
        break;
    }

    headerWaypoint = new Waypoint({
      element: $heroEl,
      handler: function (direction) {
        if (direction === 'up') {
          $body.removeClass('scroll-down');
        } else {
          $body.addClass('scroll-down');
        }
      },
      offset: function () {
        var heroElHeight = this.element.outerHeight();
        return -(heroElHeight -1);
      }
    });
  });

})(jQuery);