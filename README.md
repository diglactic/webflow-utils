# webflow-utils (wut)

> ⚠ This library is currently in an experimental phase and is expected to
> have numerous breaking changes. Use at your own risk.

## Installation

```html

<script src="https://unpkg.com/@diglactic/webflow-utils@0.0.3/dist/webflow-utils.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@diglactic/webflow-utils@0.0.3/dist/webflow-utils.css">
```

## Usage

`WebflowUtils` and `wut` are both valid ways to access this library. Make sure you place this code after the
installation code above.

```html

<script>
    wut.ready(function () {
        //
    });

    wut.ready(function () {
        var youtubeSelector = '.youtube-embed-selector';

        wut.youtube.play(youtubeSelector);
        wut.youtube.pause(youtubeSelector);
    });

    wut.ready(function () {
        var tabsSelector = '.w-tabs';

        wut.tabs.onTabChange(tabsSelector, function (newTabName) {
            alert('Tab changed to ' + newTabName);
        });
    });
</script>
```

## Development

```shell
npm install
npm run build
```

&copy; 2022 Diglactic, LLC
