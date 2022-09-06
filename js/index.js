const popup = document.getElementById("popup");
// const movieIfr = document.createElement("iframe");

const popupMovie = (event) => {
    const anchor = document.createElement("a");
    anchor.target = "popup-ifr";
    anchor.href = `https://www.youtube.com/embed/${event.data}`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    // console.log(event);
    // console.log(event.data);

    // movieIfr.src = `https://www.youtube.com/embed/${event.data}`;
    // popup.appendChild(movieIfr);

    // popup.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${event.data}" frameborder="0" allowfullscreen></iframe>`;

    popup.classList.remove("hide");
    popup.classList.add("show");
};

window.addEventListener("message", popupMovie);
