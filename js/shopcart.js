const backHomeSpan = document.getElementById("back-home");

const backHome = () => {
    window.close();
};

backHomeSpan.addEventListener("click", backHome);
