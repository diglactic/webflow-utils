# webflow-utils (wut)

> ⚠ This library is currently in an experimental phase and is expected to
> have numerous breaking changes. Use at your own risk.

## Installation

```html

<script src="https://unpkg.com/@diglactic/webflow-utils@VERSION/dist/webflow-utils.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@diglactic/webflow-utils@VERSION/dist/webflow-utils.css">
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
        var youtubeEmbed = document.querySelector('.youtube-embed-selector');

        wut.youtube.play(youtubeEmbed);
        wut.youtube.pause(youtubeEmbed);
    });

    wut.ready(function () {
        var tabsComponent = document.querySelector('.w-tabs');

        wut.tabs.onTabChange(tabsComponent, function (newTabName) {
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

## Publishing

Don't manually tag your commits! The following will handle that.

```shell
npm run build
npm version patch|minor|major
npm publish
```

&copy; 2022 Diglactic, LLC
