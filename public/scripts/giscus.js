
function setGiscusTheme(theme) {
    const giscusIframe = document.querySelector('iframe.giscus-frame');
    if (!giscusIframe) {
        setTimeout(() => setGiscusTheme(theme), 500);
        return;
    }

    giscusIframe.contentWindow.postMessage(
        { giscus: { setConfig: { theme: theme } } },
        'https://giscus.app'
    );
}

function getGiscusTheme() {
    return document.body.classList.contains('theme-light') ? 'light' : 'dark';
}

setGiscusTheme(getGiscusTheme());

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
            setGiscusTheme(getGiscusTheme());
        }
    });
});

observer.observe(document.body, {
    attributes: true,
});
