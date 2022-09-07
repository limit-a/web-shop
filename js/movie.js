const movieImgs = document.querySelectorAll("#section-body div img");

const postMovieData = (event) => {
    if (event.button === 0 && event.buttons === 1) {
        const { movieId } = event.target.parentNode.dataset;
        window.top.postMessage({ movieId }, "*");
    }
};

movieImgs.forEach((element) => {
    element.addEventListener("pointerdown", postMovieData);
});
