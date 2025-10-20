# KeepPlaying

A Chrome/Firefox extension that prevents videos, ads, and media from pausing when you switch tabs by blocking the Page Visibility API and deprecated Mutation Events.

## 🎯 What it does

When you're watching videos on YouTube, ads, or any other media content, they often pause automatically when you switch to another tab. This extension prevents that behavior by blocking the browser's Page Visibility API and deprecated Mutation Events, keeping your content playing in the background while also eliminating console warnings.

## ✨ Features

- 🔄 Keeps videos and ads playing when switching tabs
- 🚀 Lightweight and fast (runs at document start)
- 🛡️ No permissions required
- 🌐 Works on all websites including Google Ads and iframes
- 🔧 Updated for modern browsers (Manifest V3)
- 🔇 Eliminates console warnings from deprecated Mutation Events
- ⚡ Prevents permissions policy violations (unload, beforeunload, pagehide)
- 🛠️ Blocks multiple event types for comprehensive protection

## 📦 Installation

### Chrome Web Store
*Coming soon*

### Firefox Add-ons
🎉 **[Available on Firefox Add-ons](https://addons.mozilla.org/en-US/android/addon/keepplaying/)**

Install directly from the Mozilla Firefox Add-ons store!

### Manual Installation (Developer Mode)

#### Chrome
1. Download from releases or clone this repository
2. Unzip the file to a folder
3. Open Chrome and go to `chrome://extensions/`
4. Enable "Developer mode" in the top right
5. Click "Load unpacked" and select the extension folder
6. The extension will be installed and active immediately

#### Firefox
1. Download from releases or clone this repository
2. Open Firefox and click the menu button and select `Add-ons` from the menu, or use the shortcut `Ctrl+Shift+A` (Windows/Linux) or `Cmd+Shift+A` (Mac)
3. Click the gear (⚙️) in the top right and select `Install Add-on from File`
4. Navigate to the folder containing the extension file (.xpi or .zip) and click open
5. The extension will be installed and active immediately

## 🔧 Technical Details

This extension works by:
1. Overriding `EventTarget.prototype.addEventListener` to ignore visibility change events, page lifecycle events, and deprecated mutation events
2. Overriding document properties like `visibilityState` and `hidden`
3. Blocking both standard and webkit-prefixed visibility APIs
4. Silently blocking page lifecycle events (unload, beforeunload, pagehide) to prevent permissions policy violations
5. Silently blocking deprecated Mutation Events (DOMSubtreeModified, DOMNodeInserted, DOMNodeRemoved, DOMNodeRemovedFromDocument, DOMNodeInsertedIntoDocument, DOMCharacterDataModified)

The extension uses Manifest V3 for Chrome and is compatible with Firefox through WebExtensions API. It runs in the MAIN world context, which ensures it works in all frames including Google Ads SafeFrames.

## 🤝 Credits

This extension is based on the original "Don't Make Me Watch" by **Wyatt Pearsall (@wpears)**, created 12 years ago. The original concept and core functionality remain unchanged, but the extension has been modernized for current browser standards.

- **Original Author**: Wyatt Pearsall (@wpears)
- **Original Extension**: [Don't Make Me Watch](https://github.com/wpears/dont)
- **Modernized by**: Shakib Bin Kabir (2025)

## 📄 License

MIT License - Feel free to use, modify, and distribute.

## 🐛 Issues & Contributing

Found a bug or want to contribute? Please open an issue or submit a pull request on our [GitHub repository](https://github.com/shakibbinkabir/keepplaying).

## 🔄 Changelog

See [CHANGELOG.md](CHANGELOG.md) for detailed version history.

### v3.1.0 (2025-10-20)
- **CRITICAL FIX**: Resolved "Permissions policy violation: unload is not allowed" error
- **NEW**: Blocks unload, beforeunload, and pagehide events to prevent policy violations
- **IMPROVED**: Enhanced support for Google Ads and iframe-based content (SafeFrame)
- **IMPROVED**: Better compatibility with modern websites using strict permissions policies
- **IMPROVED**: Clearer event categorization and documentation

### v3.0.1 (2025-07-19)
- **NEW**: Blocks deprecated Mutation Events to eliminate console warnings
- **NEW**: Enhanced compatibility with modern websites using deprecated DOM APIs
- **IMPROVED**: Consolidated event blocking logic for better maintainability
- **FIXED**: Console warnings about DOMNodeInserted and other deprecated events

### v3.0.0 (2025)
- Updated to Manifest V3
- Improved API blocking coverage
- Added Firefox compatibility
- Modern JavaScript implementation
- Enhanced property overrides

### Legacy (Original)
- Original implementation by Wyatt Pearsall
- Basic Page Visibility API blocking
