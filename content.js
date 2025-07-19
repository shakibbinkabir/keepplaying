/**
 * KeepPlaying - Content Script
 * Blocks the Page Visibility API to prevent videos/ads from pausing when switching tabs
 * Also blocks deprecated Mutation Events to prevent console warnings
 * 
 * Original concept by Wyatt Pearsall (@wpears)
 * Modernized and maintained by [Shakib Bin Kabir]
 */

(function() {
  'use strict';
  
  // Store the original addEventListener function
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  
  // List of deprecated mutation events to block (in addition to visibility events)
  const deprecatedEvents = [
    'visibilitychange',
    'webkitvisibilitychange',
    'DOMSubtreeModified',
    'DOMNodeInserted',
    'DOMNodeRemoved',
    'DOMNodeRemovedFromDocument',
    'DOMNodeInsertedIntoDocument',
    'DOMCharacterDataModified'
  ];
  
  // Override addEventListener to block visibility change events and deprecated mutation events
  EventTarget.prototype.addEventListener = function(type, listener, options) {
    // Block visibility change events and deprecated mutation events
    if (deprecatedEvents.includes(type)) {
      // Silently ignore these event listeners
      return;
    }
    
    // For all other events, use the original function
    return originalAddEventListener.call(this, type, listener, options);
  };
  
  // Also override the document.addEventListener specifically for extra coverage
  const originalDocumentAddEventListener = Document.prototype.addEventListener;
  Document.prototype.addEventListener = function(type, listener, options) {
    if (deprecatedEvents.includes(type)) {
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
  
  console.log('KeepPlaying: Page Visibility API and deprecated Mutation Events blocked successfully');
})();
