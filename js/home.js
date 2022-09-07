const iframe = document.querySelector("#article01 iframe");

const resizeIframe = (event) => {
    const { width } = event.data;
    let height = 0;
    if (width > 1000) {
        height = 700;
    } else if (width > 500) {
        height = width / ((1 + Math.sqrt(5)) / 2);
    }
    // iframe.style.height = (height > 500 ? height : 500) + "px";
    iframe.style.height = height + "px";
};

window.addEventListener("message", resizeIframe);
