# Xray

A Chromium browser extension. Click the toolbar icon to outline every element
on the active tab; click again to remove the outlines. There is no popup, no
options page, and no stored state.

Based on [debug.css](https://github.com/zaydek/debug.css) by Zaydek.

## Install

[Chrome Web Store](https://chromewebstore.google.com/detail/xray/hhjeldidbpndgbkhlkekngfjmoedemnk)
— installs on Chrome, Arc, Brave, Edge, Vivaldi, Opera, and other Chromium
browsers.

## Install from source

```sh
git clone https://github.com/ibrahemid/xray
```

Open `chrome://extensions`, enable Developer mode, click **Load unpacked**,
and select the `extension/` directory.

## Layout

```
extension/   Manifest v3 extension.
site/        Landing page at https://xray.ibrahemid.com.
```

## License

MIT
