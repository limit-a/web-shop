// const movieOne = document.getElementById("movie-one");
// const movieTwo = document.getElementById("movie-two");
const movieDivs = document.querySelectorAll("#section-body div");
const popupMovie = document.getElementById("popup-movie");

const showMovie = (event) => {
    const { videoId } = event.target.dataSet;
    console.log(videoId);
};

// movieOne.addEventListener("click", showMovie);
// movieTwo.addEventListener("click", showMovie);

movieDivs.forEach((element) => {
    element.addEventListener("click", showMovie);
});
