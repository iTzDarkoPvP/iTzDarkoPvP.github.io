document.getElementById("surpriseBtn").addEventListener("click", function() {
    const container = document.querySelector(".container");
    container.classList.add("fade-out");

    setTimeout(() => {
        container.style.display = "none";
        const specialMessage = document.createElement("h1");
        specialMessage.id = "specialMessage";
        specialMessage.innerHTML = "❤️🫶🏻 Te amo pendejita 🫶🏻❤️";
        document.body.appendChild(specialMessage);
    }, 1000);
});
