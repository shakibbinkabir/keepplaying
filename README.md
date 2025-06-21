# KeepPlaying

A Chrome/Firefox extension that prevents videos, ads, and media from pausing when you switch tabs by blocking the Page Visibility API.

## 🎯 What it does

When you're watching videos on YouTube, ads, or any other media content, they often pause automatically when you switch to another tab. This extension prevents that behavior by blocking the browser's Page Visibility API, keeping your content playing in the background.

## ✨ Features

- 🔄 Keeps videos and ads playing when switching tabs
- 🚀 Lightweight and fast (runs at document start)
- 🛡️ No permissions required
- 🌐 Works on all websites
- 🔧 Updated for modern browsers (Manifest V3)

## 📦 Installation

### Chrome Web Store
*Coming soon*

### Manual Installation (Developer Mode)
1. Download from releases or clone this repository
2. Unzip the file to a folder
3. Open Chrome and go to `chrome://extensions/`
4. Enable "Developer mode" in the top right
5. Click "Load unpacked" and select the extension folder
6. The extension will be installed and active immediately

### Firefox Add-ons
*[https://addons.mozilla.org/addon/keepplaying/](https://addons.mozilla.org/addon/keepplaying/)*


## 🔧 Technical Details

This extension works by:
1. Overriding `EventTarget.prototype.addEventListener` to ignore visibility change events
2. Overriding document properties like `visibilityState` and `hidden`
3. Blocking both standard and webkit-prefixed visibility APIs

The extension uses Manifest V3 for Chrome and is compatible with Firefox through WebExtensions API.

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

### v3.0.0 (2025)
- Updated to Manifest V3
- Improved API blocking coverage
- Added Firefox compatibility
- Modern JavaScript implementation
- Enhanced property overrides

### v2.0.0 (Original)
- Original implementation by Wyatt Pearsall
- Basic Page Visibility API blocking
