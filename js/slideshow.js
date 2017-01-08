(function ($) {
  'use strict';

  $(function () {
    var $slideshowFrame = $('#slideshow-frame');

    // update slide markers
    $slideshowFrame.on('init', function (slick) {
      var $dots = $('.slick-dots > li');
      
      if ($dots.length) {
        var len = $dots.length;
        
        $dots.each(function (index, el) {
          var $dotBtn = $(el).find('button'),
              resetIndex = index + 1;

          $dotBtn.text(resetIndex + ' of ' + len);
        });
      } 

    });

    $slideshowFrame.slick({
      arrows: true,
      appendArrows: $('#slideshow-controls .slideshow-arrows'),
      prevArrow: '<a href="#" class="slick-prev"><span class="vis-hidden">previous</span><b class="fa fa-chevron-left" aria-hidden="true"></b></a>',
      nextArrow: '<a href="#" class="slick-next"><span class="vis-hidden">next</span><b class="fa fa-chevron-right" aria-hidden="true"></b></a>',
      fade: true,
      lazyLoad: 'ondemand',
      dots: true,
      appendDots: $('.slideshow-marker')
    });

  });

})(jQuery);