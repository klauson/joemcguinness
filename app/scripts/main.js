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

    fitText(document.getElementById('fittext'), 1.9, { minFontSize: '22px', maxFontSize: '70px' });
    fitText(document.getElementById('fittext2'), 1.7, { minFontSize: '22px', maxFontSize: '90px' });

        $("#amazingaudioplayer-1").amazingaudioplayer({

        jsfolder:jsFolder,

        skinsfoldername:"",

        titleinbarwidthmode:"auto",

        timeformatlive:"%CURRENT% / LIVE",

        volumeimagewidth:28,

        barbackgroundimage:"",

        showtime:true,

        titleinbarwidth:80,

        showprogress:true,

        random:false,

        titleformat:"%TITLE%",

        height:600,

        loadingformat:"Loading...",

        prevnextimage:"prevnext-24-24-0.png",

        showinfo:true,

        imageheight:150,

        skin:"Jukebox",

        loopimage:"loop-24-24-0.png",

        loopimagewidth:24,

        showstop:false,

        prevnextimageheight:24,

        infoformat:"%ARTIST% %ALBUM%<br />%INFO%",

        stopotherplayers:true,

        showloading:false,

        forcefirefoxflash:false,

        showvolumebar:true,

        imagefullwidth:false,

        width:350,

        showtitleinbar:false,

        showloop:false,

        volumeimage:"volume-24-24-0.png",

        playpauseimagewidth:30,

        loopimageheight:24,

        tracklistitem:10,

        tracklistitemformat:"%ID%. %TITLE% <span style='position:absolute;top:0;right:0;'>%DURATION%</span>",

        prevnextimagewidth:30,

        tracklistarrowimage:"tracklistarrow-48-16-0.png",

        playpauseimageheight:24,

        showbackgroundimage:false,

        imagewidth:150,

        stopimage:"stop-24-24-0.png",

        playpauseimage:"playpause-24-24-0.png",

        showprevnext:true,

        backgroundimage:"",

        autoplay:false,

        volumebarpadding:8,

        progressheight:20,

        showtracklistbackgroundimage:false,

        titleinbarscroll:true,

        showtitle:true,

        defaultvolume:-1,

        tracklistarrowimageheight:16,

        heightmode:"auto",

        titleinbarformat:"%TITLE%",

        showtracklist:true,

        stopimageheight:24,

        volumeimageheight:24,

        stopimagewidth:24,

        volumebarheight:80,

        noncontinous:false,

        tracklistbackgroundimage:"",

        showbarbackgroundimage:false,

        showimage:true,

        tracklistarrowimagewidth:48,

        timeformat:"%CURRENT% / %DURATION%",

        showvolume:true,

        fullwidth:false,

        loop:0,

        preloadaudio:true

    });
  }



  // Call our init functions
  onAfterFunctions();

  // Call smoothState!
  var smoothState = $main.smoothState(smoothStateOptions).data('smoothState');
});
