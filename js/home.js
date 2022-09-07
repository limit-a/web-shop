const iframe = document.querySelector("#article01 iframe");

const resizeIframe = (event) => {
    const { width } = event.data;
    const height = width / ((1 + Math.sqrt(5)) / 2);
    iframe.style.height = (height > 500 ? height : 500) + "px";
};

window.addEventListener("message", resizeIframe);
