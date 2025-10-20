/**
 * KeepPlaying - Content Script
 * Prevents videos/ads from pausing when switching tabs
 * 
 * Blocks:
 * - Page Visibility API (visibilitychange events)
 * - Page lifecycle events (unload, beforeunload, pagehide) to prevent policy violations
 * - Deprecated Mutation Events to prevent console warnings
 * 
 * Original concept by Wyatt Pearsall (@wpears)
 * Modernized and maintained by [Shakib Bin Kabir]
 */

(function() {
  'use strict';
  
  // Store the original addEventListener function
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  
  // List of events to block:
  // - Visibility events: prevent pausing when tab is hidden
  // - Unload events: prevent permissions policy violations
  // - Deprecated mutation events: prevent console warnings
  const blockedEvents = [
    // Visibility API events
    'visibilitychange',
    'webkitvisibilitychange',
    // Page lifecycle events (prevent permissions policy violations)
    'unload',
    'beforeunload',
    'pagehide',
    // Deprecated Mutation Events
    'DOMSubtreeModified',
    'DOMNodeInserted',
    'DOMNodeRemoved',
    'DOMNodeRemovedFromDocument',
    'DOMNodeInsertedIntoDocument',
    'DOMCharacterDataModified'
  ];
  
  // Override addEventListener to block specified events
  EventTarget.prototype.addEventListener = function(type, listener, options) {
    // Block events that would cause pausing or policy violations
    if (blockedEvents.includes(type)) {
      // Silently ignore these event listeners
      return;
    }
    
    // For all other events, use the original function
    return originalAddEventListener.call(this, type, listener, options);
  };
  
  // Also override the document.addEventListener specifically for extra coverage
  const originalDocumentAddEventListener = Document.prototype.addEventListener;
  Document.prototype.addEventListener = function(type, listener, options) {
    if (blockedEvents.includes(type)) {
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
  
  console.log('KeepPlaying: Blocked events for continuous playback - visibility, unload, and mutation events');
})();
