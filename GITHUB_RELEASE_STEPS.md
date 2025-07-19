# GitHub Release Steps for v3.0.1

## 1. Create Git Tag
```bash
git add .
git commit -m "Release v3.0.1: Add Firefox approval and Mutation Events blocking"
git tag -a v3.0.1 -m "Version 3.0.1 - Firefox approved, Mutation Events blocking"
git push origin main
git push origin v3.0.1
```

## 2. Create GitHub Release
1. Go to https://github.com/shakibbinkabir/keepplaying/releases
2. Click "Create a new release"
3. Choose tag: `v3.0.1`
4. Release title: `v3.0.1 - Firefox Approved & Enhanced Compatibility`

### Release Description:
```markdown
## 🎉 Firefox Add-ons Store Launch!

KeepPlaying is now **officially available** on the Firefox Add-ons store! 

**[Install from Firefox Add-ons →](https://addons.mozilla.org/en-US/android/addon/keepplaying/)**

## 🔧 What's New in v3.0.1

### ✨ Added
- **Comprehensive blocking** of deprecated Mutation Events (DOMSubtreeModified, DOMNodeInserted, DOMNodeRemoved, DOMNodeRemovedFromDocument, DOMNodeInsertedIntoDocument, DOMCharacterDataModified)
- **Enhanced console logging** to indicate successful blocking
- **Improved documentation** and code comments

### 🐛 Fixed  
- **Eliminated Chrome console warnings** about deprecated Mutation Events
- **Enhanced compatibility** with modern websites using deprecated DOM APIs
- **Improved stability** on sites with heavy DOM manipulation

### 🔄 Changed
- **Consolidated event blocking logic** into a single array for better maintainability
- **Updated descriptions** to reflect additional Mutation Events blocking

## 📦 Downloads

- **Chrome Extension**: `keepplaying-chrome.zip` (ready for Chrome Web Store)
- **Firefox Extension**: `keepplaying-firefox.zip` (Manifest V2 compatible)

## 🚀 Installation

### Firefox (Recommended)
Install directly from **[Firefox Add-ons Store](https://addons.mozilla.org/en-US/android/addon/keepplaying/)**

### Chrome (Manual)
1. Download `keepplaying-chrome.zip`
2. Extract and load in developer mode
3. Chrome Web Store submission coming soon!

---

**Full Changelog**: [CHANGELOG.md](https://github.com/shakibbinkabir/keepplaying/blob/main/CHANGELOG.md)
```

## 3. Upload Assets
Upload these files to the release:
- `keepplaying-chrome.zip`
- `keepplaying-firefox.zip`

## 4. Publish Release
- Check "Set as latest release"
- Click "Publish release"
