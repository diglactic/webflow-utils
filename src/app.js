export const addWebflowHook = (callable) => {
    window.Webflow ||= [];
    window.Webflow.push(callable);
};

export const register = (namespace, property, registrationMethod) => {
    addWebflowHook(() => {
        window.WebflowUtils = window.wut ||= {};

        if (namespace) {
            window.wut[namespace] ||= {};

            if (window.wut[namespace][property]) {
                throw new Error(`${namespace}.${property} already registered`);
            }

            window.wut[namespace][property] = registrationMethod();
        } else {
            if (window.wut[property]) {
                throw new Error(`${property} already registered`);
            }

            window.wut[property] = registrationMethod();
        }

        return true;
    });
};

import {getEnv, getPublishedDate} from "./lib/utils";
import {onTabChange} from "./lib/tabs";
import {pause as pauseYouTube, play as playYouTube} from "./lib/youtube";

register(null, 'getEnv', () => getEnv);
register(null, 'getPublishedDate', () => getPublishedDate);
register(null, 'env', () => getEnv())

register('tabs', 'onTabChange', () => onTabChange);

register('youtube', 'play', () => playYouTube);
register('youtube', 'pause', () => pauseYouTube);
