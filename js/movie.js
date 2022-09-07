const movieDivs = document.querySelectorAll("#section-body div");

const postMovie = (event) => {
    const { movieId } = event.target.dataset;
    window.top.postMessage({ movieId }, "*");
};

movieDivs.forEach((element) => {
    element.addEventListener("pointerdown", postMovie);
});
