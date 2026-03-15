# focus-mode-firefox

A Firefox port of [focus-mode-chrome](https://github.com/fermentationist/focus-mode-chrome) — enables focus mode on Google Docs, hiding distracting UI elements so you can concentrate on writing.

Click the extension icon (or press the keyboard shortcut) to toggle focus mode on and off.

| Mode | Description |
|------|-------------|
| **Off** | Default Google Docs UI |
| **Light** | Focused mode — hides toolbars, rulers, and sidebars |

> **Note:** Dark mode is not supported in this Firefox port due to how Google Docs renders text on a canvas element.

## Keyboard Shortcut

| Platform | Shortcut |
|----------|----------|
| Windows / Linux | `Ctrl + Shift + F` |
| macOS | `Cmd + Shift + F` |

## Installation

### Temporary (for testing)

1. Download or clone this repo
2. Open Firefox and go to `about:debugging`
3. Click **This Firefox** in the left sidebar
4. Click **Load Temporary Add-on**
5. Navigate to the repo folder and select `manifest.json`
6. The extension will appear in your toolbar

> Note: Temporary add-ons are removed when Firefox closes. For a permanent install, see below.

### Permanent

1. Zip the contents of the repo (not the folder, everything inside it)
2. Go to [addons.mozilla.org](https://addons.mozilla.org) and sign in
3. Submit the zip for review
4. Once approved, install it like any other Firefox extension

## Changes from upstream

- Ported to Manifest V2 for full Firefox compatibility
- Replaced `chrome.*` API with `browser.*` via a compatibility shim
- Removed dark mode (not supported due to Google Docs canvas rendering)

## Credits

Original Chrome extension by [fermentationist](https://github.com/fermentationist/focus-mode-chrome).
Built with [Claude](www.claude.ai).
