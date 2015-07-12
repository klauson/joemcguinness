// These are functions that we run on the first page load of any page...
$(function(){
  'use strict';

  // Lets declare some variables for smoothState
  var $body = $('html, body');

  var $main = $('#main');

  var smoothStateOptions = {
        prefetch: false,
        pageCacheSize: 0,
        onStart: {
          duration: 750,
          render: function ($container) {
          	
            
            $main.addClass('is-exiting');

            $('body').fadeOut(750);
            smoothState.restartCSSAnimations();
          }
        },
        onAfter: function ($container, $newContent) {
          $('body').fadeIn(220);
          $main.removeClass('is-exiting');
          
          $main.html($newContent);
          
          $body.css('cursor', 'auto');
          
          // I'd probably remove this...
          $body.find('a').css('cursor', 'auto');
          
          // Call our onAfter functions
          onAfterFunctions();
        }
      };

  // Variables for audioengine
  var scripts = document.getElementsByTagName("script");

  var jsFolder = "";

  for (var i= 0; i< scripts.length; i++) {
    if( scripts[i].src && scripts[i].src.match(/amazingaudioplayer\.js/i)) {
      jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
  }

  // Lets make some functions that need to be called after every onAfter page transition...
  var onAfterFunctions = function() {
  	// Starts fitvids
    $(".mid").fitVids();

    fitText(document.getElementById('fittext'), 1.8, { minFontSize: '22px', maxFontSize: '80px' });
    fitText(document.getElementById('fittext2'), 1.8, { minFontSize: '22px', maxFontSize: '80px' });
  }



  // Call our init functions
  onAfterFunctions();

  // Call smoothState!
  var smoothState = $main.smoothState(smoothStateOptions).data('smoothState');
});
