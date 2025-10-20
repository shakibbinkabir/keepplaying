# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.1.0] - 2025-10-20

### Added
- **CRITICAL**: Added `all_frames: true` to manifest to inject content script into all iframes and SafeFrames (required for Google Ads)
- Blocking of 'blur', 'focus', 'focusin', and 'focusout' events to prevent ads from detecting focus loss
- Override of `document.hasFocus()` to always return true
- Blocking of 'unload', 'beforeunload', and 'pagehide' events to prevent permissions policy violations
- Enhanced support for Google Ads and other iframe-based content (SafeFrame, etc.)
- Improved documentation with clearer event categorization

### Fixed
- **CRITICAL**: Fixed Google Ads not continuing to play when switching tabs (missing all_frames configuration)
- **CRITICAL**: Fixed "Permissions policy violation: unload is not allowed in this document" error on YouTube and other sites
- Prevented browser console errors when pages attempt to register blocked lifecycle events
- Enhanced compatibility with modern websites using strict permissions policies

### Changed
- Renamed `deprecatedEvents` to `blockedEvents` for better clarity
- Reorganized blocked events list with clear categorization (visibility, focus, lifecycle, mutation)
- Updated console log message to reflect all blocked event types
- Now blocks 15 event types total (up from 8)

## [3.0.1] - 2025-07-19

### Added
- Comprehensive blocking of deprecated Mutation Events (DOMSubtreeModified, DOMNodeInserted, DOMNodeRemoved, DOMNodeRemovedFromDocument, DOMNodeInsertedIntoDocument, DOMCharacterDataModified)
- Enhanced console logging to indicate successful blocking of both Page Visibility API and Mutation Events
- Improved documentation in code comments

### Fixed
- Eliminated Chrome console warnings about deprecated Mutation Events
- Improved compatibility with modern websites that use deprecated DOM APIs
- Enhanced stability on sites that heavily use DOM manipulation

### Changed
- Updated content script description to reflect additional Mutation Events blocking
- Consolidated event blocking logic into a single array for better maintainability

## [3.0.0] - 2025-01-01

### Added
- Initial modernized release based on Wyatt Pearsall's original concept
- Manifest V3 support for Chrome
- Firefox WebExtensions compatibility
- Modern JavaScript implementation with strict mode
- Comprehensive Page Visibility API blocking
- Support for both standard and webkit-prefixed visibility APIs

### Features
- Blocks visibilitychange and webkitvisibilitychange events
- Overrides document.visibilityState and document.hidden properties
- Overrides webkit-prefixed versions of visibility properties
- Lightweight implementation with no permissions required
- Runs at document_start for maximum effectiveness

### Technical Details
- Uses EventTarget.prototype.addEventListener override
- Implements Document.prototype.addEventListener override for extra coverage
- Property descriptors with getter functions for consistent behavior
- IIFE (Immediately Invoked Function Expression) for proper encapsulation

---

## Legacy History

### Original Implementation (2013)
- **Author**: Wyatt Pearsall (@wpears)
- **Project**: "Don't Make Me Watch"
- **Features**: Basic Page Visibility API blocking for preventing video pause on tab switch
- **Technology**: Simple script injection with basic event listener override
