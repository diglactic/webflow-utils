export const addWebflowHook = (callable) => {
    window.Webflow ||= [];
    window.Webflow.push(callable);
};

export const register = (namespace, property, callable) => {
    addWebflowHook(() => {
        window.WebflowUtils = window.wut ||= {};
        window.wut[namespace] ||= {};

        if (window.wut[namespace][property]) {
            throw new Error(`${namespace}.${property} already registered`);
        }

        window.wut[namespace][property] = callable();

        return window.wut[namespace];
    });
};

import {getEnv, getPublishedDate} from "./lib/utils";
import {onTabChange} from "./lib/tabs";
import {pause as pauseYouTube, play as playYouTube} from "./lib/youtube";

register('utils', 'getEnv', () => getEnv);
register('utils', 'getPublishedDate', () => getPublishedDate);
register('utils', 'env', () => getEnv())

register('tabs', 'onTabChange', () => onTabChange);

register('youtube', 'play', () => playYouTube);
register('youtube', 'pause', () => pauseYouTube);
