/**
 * KeepPlaying - Content Script
 * Blocks the Page Visibility API to prevent videos/ads from pausing when switching tabs
 * 
 * Original concept by Wyatt Pearsall (@wpears)
 * Modernized and maintained by [Shakib Bin Kabir]
 */

(function() {
  'use strict';
  
  // Store the original addEventListener function
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  
  // Override addEventListener to block visibility change events
  EventTarget.prototype.addEventListener = function(type, listener, options) {
    // Block both standard and webkit visibility change events
    if (type === 'visibilitychange' || type === 'webkitvisibilitychange') {
      // Silently ignore these event listeners
      return;
    }
    
    // For all other events, use the original function
    return originalAddEventListener.call(this, type, listener, options);
  };
  
  // Also override the document.addEventListener specifically for extra coverage
  const originalDocumentAddEventListener = Document.prototype.addEventListener;
  Document.prototype.addEventListener = function(type, listener, options) {
    if (type === 'visibilitychange' || type === 'webkitvisibilitychange') {
      return;
    }
    return originalDocumentAddEventListener.call(this, type, listener, options);
  };
  
  // Override the visibilityState and hidden properties
  Object.defineProperty(document, 'visibilityState', {
    get: function() {
      return 'visible';
    },
    configurable: true
  });
  
  Object.defineProperty(document, 'hidden', {
    get: function() {
      return false;
    },
    configurable: true
  });
  
  // Also handle webkit prefixed versions
  Object.defineProperty(document, 'webkitVisibilityState', {
    get: function() {
      return 'visible';
    },
    configurable: true
  });
  
  Object.defineProperty(document, 'webkitHidden', {
    get: function() {
      return false;
    },
    configurable: true
  });
  
  console.log('KeepPlaying: Page Visibility API blocked successfully');
})();
