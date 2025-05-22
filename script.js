window.addEventListener("load", function() {
    let bgImage = new Image();
    bgImage.src = "fondo.jpg";

    bgImage.onload = function() {
        document.body.style.backgroundImage = "url('fondo.jpg')";
        document.getElementById("preloader").style.display = "none";
    };
});

document.getElementById("surpriseBtn").addEventListener("click", function() {
    const message = document.getElementById("message");
    message.innerText = "Eres la mejor amiga del mundo 🌟✨";
    message.style.animation = "fadeIn 2s ease-in-out";
});
