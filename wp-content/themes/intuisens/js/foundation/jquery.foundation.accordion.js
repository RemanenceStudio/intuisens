;(function ($, window, undefined){
  'use strict';

  $.fn.foundationAccordion = function (options) {
    var $accordion = $('.accordion');
    
    if ($accordion.hasClass('hover') && !Modernizr.touch) {
      $('.accordion li', this).on({
        mouseenter : function () {
          var p = $(this).parent(),
            flyout = $(this).children('.content').first();

          $('.content', p).not(flyout).hide().parent('li').removeClass('active'); //changed this
          flyout.show(0, function () {
            flyout.parent('li').addClass('active');
          });
        }
      });
    } else {
      $('.accordion li .title', this).on('click.fndtn', function () {
        var li = $(this).parent('li:first'),
            p = li.parent(),
            flyout = li.children('.content').first();

        if (li.hasClass('active')) {
          p.find('li').removeClass('active').end().find('.content').hide();
        } else {
          $('.content', p).not(flyout).hide().parent('li').removeClass('active'); //changed this
          flyout.show(0, function () {
            flyout.parent('li').addClass('active');
          });
        }
      });
    }

  };

})( jQuery, this );