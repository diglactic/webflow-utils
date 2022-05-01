export const onTabChange = (wfTabComponent, callback) => {
    if (!wfTabComponent.classList.contains('w-tabs')) {
        throw new Error('Invalid tab component');
    }

    let currentTabName = wfTabComponent.dataset.current;

    wfTabComponent.querySelectorAll('.w-tab-link').forEach((wfTabLink) => {
        (new MutationObserver(() => {
            if (wfTabLink.classList.contains('w--current') && currentTabName !== wfTabLink.dataset.wTab) {
                currentTabName = wfTabLink.dataset.wTab;
                callback(currentTabName);
            }
        })).observe(wfTabLink, {attributes: true});
    });
};

export default {
    onTabChange
};
