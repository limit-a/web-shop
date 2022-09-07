const popup = document.getElementById("popup");
const xMark = popup.querySelector("i");

const showPopup = (event) => {
    const anchor = document.createElement("a");
    anchor.target = "popup-ifr";
    anchor.href = `https://www.youtube.com/embed/${event.data.movieId}`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    popup.classList.remove("hide");
    popup.classList.add("show");
};

const hidePopup = () => {
    popup.classList.remove("show");
    popup.classList.add("hide");
};

window.addEventListener("message", showPopup);
xMark.addEventListener("pointerdown", hidePopup);
