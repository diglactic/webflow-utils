export const onTabChange = (selector, callback) => {
    document.querySelectorAll(`${selector}.w-tabs`).forEach((wfTabComponent) => {
        let currentTabName = wfTabComponent.dataset.wTab;

        wfTabComponent.querySelectorAll('.w-tab-link').forEach((wfTabLink) => {
            (new MutationObserver(() => {
                if (wfTabLink.classList.contains('w--current') && currentTabName !== wfTabLink.dataset.wTab) {
                    currentTabName = wfTabLink.dataset.wTab;
                    callback(currentTabName);
                }
            })).observe(wfTabLink, {attributes: true});
        });
    });
};

export default {
    onTabChange
};
