/**
 * @url https://developers.google.com/youtube/iframe_api_reference
 */
export const dispatchCommand = (selector, func) => {
    document.querySelector(`${selector} > iframe`)
        .contentWindow
        .postMessage(
            JSON.stringify({
                event: 'command',
                func
            }),
            '*'
        );
};

export const play = (selector) => dispatchCommand(selector, 'playVideo');

export const pause = (selector) => dispatchCommand(selector, 'pauseVideo');

export default {
    dispatchCommand,
    play,
    pause
};
