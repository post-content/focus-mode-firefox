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

### Temporary

1. Download or clone this repo
2. Go to `about:debugging` → **This Firefox** → **Load Temporary Add-on**
3. Select `manifest.json` from the repo folder

> Temporary add-ons are removed when Firefox closes.

### Permanent (Firefox Developer Edition or Nightly only)

1. Install [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) or Nightly
2. Go to `about:config` and set `xpinstall.signatures.required` to `false`
3. Zip all the repo files and rename the archive from `.zip` to `.xpi`
4. Drag the `.xpi` file onto Firefox to install

## Changes from upstream

- Ported to Manifest V2 for full Firefox compatibility
- Replaced `chrome.*` API with `browser.*` via a compatibility shim
- Removed dark mode (not supported due to Google Docs canvas rendering)

## Credits

Original Chrome extension by [fermentationist](https://github.com/fermentationist/focus-mode-chrome).
Built with [Claude](www.claude.ai).
