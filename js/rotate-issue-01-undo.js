"use strict";

require([
    './fullscreen',
    './orientation',
  ], function(
    fullScreen,
    orientation) {

  var $ = document.querySelector.bind(document);
  var g = {
    orientation: "landscape-primary",  
  };

  var touchStartElement = $("body");

  function resetOrientation() {
    if (fullScreen.isFullScreen()) {
      orientation.set(g.orientation);
    }
  }

  /**
   * Sets the orientation of the screen. 
   * @param {string} [desiredOrientation] The orientation. Valid options are
   *
   *     "portrait-primary"    // normal way people hold phones
   *     "portrait-secondary"  // upsidedown
   *     "landscape-primary"   // phone turned clockwise 90 degrees from normal
   *     "landscape-secondary" // phone turned counter-clockwise 90 degrees from normal
   *     "none" (or undefined) // unlocked
   * @param {bool} [orientationOptional]
   */
  function setOrientation(desiredOrientation, orientationOptional) {
    g.orientation = desiredOrientation;
    if (orientation.canOrient()) {
      resetOrientation();
    }
  }

    // setup full screen support
    var requestFullScreen = function() {
      if (!fullScreen.isFullScreen()) {
        touchStartElement.removeEventListener('touchstart', requestFullScreen, false);
        touchStartElement.removeEventListener('click', requestFullScreen, false);
        touchStartElement.style.display = "none";
        fullScreen.requestFullScreen(document.body);
      }
    };

    var goFullScreenIfNotFullScreen = function() {
      if (fullScreen.isFullScreen()) {
        resetOrientation();
      } else {
        if (fullScreen.canGoFullScreen()) {
          touchStartElement.addEventListener('touchstart', requestFullScreen, false);
          touchStartElement.addEventListener('click', requestFullScreen, false);
          touchStartElement.style.display = "block";
        }
      }
    };
    fullScreen.onFullScreenChange(document.body, goFullScreenIfNotFullScreen);

    goFullScreenIfNotFullScreen();

});



