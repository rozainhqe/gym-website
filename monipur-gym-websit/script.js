const hero = document.querySelector(".hero");

const images = [
    "images/hero.jpg",
    "images/about.jpg",
    "images/trainer.jpg",
    "images/gallery1.jpg"
];

let index = 0;

function changeBackground() {
    hero.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('${images[index]}')`;

    index++;

    if (index >= images.length) {
        index = 0;
    }
}

// প্রথম ছবি দেখাবে
changeBackground();

// প্রতি ৫ সেকেন্ডে ছবি বদলাবে
setInterval(changeBackground, 5000);
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
// Loading Screen

window.addEventListener("load", () => {

    document.getElementById("loader").style.display = "none";

});