export const addWebflowHook = (callable) => {
    window.Webflow ||= [];
    window.Webflow.push(callable);
};

export const registerUtil = (name, callable) => {
    addWebflowHook(() => {
        window.WebflowUtils = window.wut ||= {};

        if (window.wut[name]) {
            throw new Error(`${name} already registered`);
        }

        window.wut[name] = callable();

        return window.wut;
    });
};

import {getEnv, getPublishedDate} from "./lib/utils";

registerUtil('getEnv', () => getEnv);
registerUtil('getPublishedDate', () => getPublishedDate);
registerUtil('env', () => getEnv())
