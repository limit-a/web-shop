const movieDivs = document.querySelectorAll("#section-body div");

const showMovie = (event) => {
    const { videoId } = event.target.dataset;
    window.parent.parent.postMessage({ videoId }, "*");
};

movieDivs.forEach((element) => {
    element.addEventListener("click", showMovie);
});
