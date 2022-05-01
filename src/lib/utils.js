export const getPublishedDate = () => {
    const searchKeyword = 'Last Published:';

    const targetNode = Array.from(document.childNodes).find(({nodeName, nodeValue}) =>
        nodeName === '#comment' && nodeValue.indexOf(searchKeyword) > 0);

    if (!targetNode) {
        throw new Error('Couldn\'t find published date')
    }

    const targetValue = targetNode.nodeValue.replace(searchKeyword, '').trim();

    let publishedAt = null;

    try {
        publishedAt = new Date(targetValue);
    } catch (err) {
        throw new Error('Couldn\'t parse date');
    }

    return publishedAt;
}

export const getEnv = () => {
    const {wfDomain: domainName, wfPage: pageId, wfSite: siteId} = (document.documentElement.dataset || {});

    return {
        domainName,
        pageId,
        siteId,
        isInDesigner: !!Webflow.env('design'),
        isInEditor: !!Webflow.env('editor'),
        publishedAt: getPublishedDate()
    };
};

export const onVisibilityChange = (domElement, callback) => {
    (new IntersectionObserver(
        ({isIntersecting}) => {
            callback(isIntersecting);
        },
        {
            root: document.body,
            threshold: 1.0
        }
    )).observe(domElement);
};

export default {
    getPublishedDate,
    getEnv,
    onVisibilityChange,
};
