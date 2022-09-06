const popup = document.getElementById("popup");

const popupMovie = (event) => {
    console.log(event);
    console.log(event.data);

    const movieIfr = document.createElement("iframe");
    popup.appendChild(movieIfr);

    popup.classList.remove("hide");
    popup.classList.add("show");
};

window.addEventListener("message", popupMovie);
