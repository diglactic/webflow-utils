/**
 * @url https://developers.google.com/youtube/iframe_api_reference
 */
export const dispatchCommand = (wfYouTubeEmbedComponent, func) => {
    const targetIframe = wfYouTubeEmbedComponent.querySelector('iframe');

    if (!targetIframe) {
        throw new Error('Couldn\'t find iframe within embed');
    }
    if (targetIframe.src.indexOf('enablejsapi=1') < 0) {
        throw new Error(
            'Embed must have the YouTube JavaScript API enabled. '
            + 'See https://developers.google.com/youtube/iframe_api_reference'
        );
    }

    targetIframe.contentWindow.postMessage(JSON.stringify({event: 'command', func}), '*');
};

export const play = (selector) => dispatchCommand(selector, 'playVideo');

export const pause = (selector) => dispatchCommand(selector, 'pauseVideo');

export default {
    dispatchCommand,
    play,
    pause
};
