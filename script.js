window.addEventListener("load", function() {
    document.getElementById("preloader").style.display = "none";
});

document.getElementById("surpriseBtn").addEventListener("click", function() {
    const message = document.getElementById("message");
    message.innerText = "Te amo pendejita 🫶🏻❤️";
    message.style.animation = "fadeIn 2s ease-in-out";
});
