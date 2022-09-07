const movieDivs = document.querySelectorAll("#section-body div");

const postMovie = (event) => {
    console.log(event);
    if (event.button === 0 && event.buttons === 1) {
        const { movieId } = event.target.dataset;
        window.top.postMessage({ movieId }, "*");
    }
};

movieDivs.forEach((element) => {
    element.addEventListener("pointerdown", postMovie);
});
