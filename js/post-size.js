const postWidth = () => {
    window.parent.postMessage({ width: document.body.scrollWidth }, "*");
};

window.addEventListener("load", postWidth);
window.addEventListener("resize", postWidth);
