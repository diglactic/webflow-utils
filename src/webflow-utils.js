export const addWebflowHook = (callable) => {
    window.Webflow ||= [];
    window.Webflow.push(callable);
};

export const ready = (callable) => {
    addWebflowHook(() => {
        if (['interactive', 'complete'].includes(document.readyState)) {
            callable();
        } else {
            window.addEventListener('DOMContentLoaded', callable);
        }
    });
};

export const register = (namespace, property, registrationMethod) => {
    addWebflowHook(() => {
        window.wut[namespace] ||= {};

        if (window.wut[namespace][property]) {
            throw new Error(`${namespace}.${property} already registered`);
        }

        window.wut[namespace][property] = registrationMethod();

        return true;
    });
};

(() => {
    window.WebflowUtils = window.wut ||= {};
    window.wut['ready'] = ready;
    window.wut['addWebflowHook'] = addWebflowHook;
    window.wut['register'] = register;
})();

import {getEnv, getPublishedDate, onVisibilityChange} from "./lib/utils";
import {onTabChange} from "./lib/tabs";
import {pause as pauseYouTube, play as playYouTube} from "./lib/youtube";

register('utils', 'getEnv', () => getEnv);
register('utils', 'getPublishedDate', () => getPublishedDate);
register('utils', 'env', () => getEnv());
register('utils', 'onVisibilityChange', () => onVisibilityChange);

register('tabs', 'onTabChange', () => onTabChange);

register('youtube', 'play', () => playYouTube);
register('youtube', 'pause', () => pauseYouTube);

export default {
    addWebflowHook,
    ready,
    register
};
