export const onTabChange = (selector, callback) => {
    document.querySelectorAll(`${selector}.w-tabs`).forEach((wfTabComponent) => {
        let currentTabName = wfTabComponent.dataset.wTab;

        wfTabComponent.querySelectorAll('.w-tab-link').forEach((wfTabLink) => {
            (new MutationObserver(() => {
                if (wfTabLink.classList.includes('w--current') && currentTabName !== wfTabLink.dataset.wTab) {
                    currentTabName = wfTabLink.datset.wTab;
                    callback(currentTabName);
                }
            })).observe(wfTabLink, {attributes: true});
        });
    });
};

export default {
    onTabChange
};
