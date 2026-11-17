// FUN FACTS GENERATOR
const facts = [
    "I can never say no to a good plate of Kolo Mee!",
    "My dream is to watch a live MotoGP race at Sepang Circuit.",
    "Night rides are my favorite therapy after finishing UiTM assignments.",
    "I've been listening to Linkin Park since secondary school.",
    "I love taking sunset photos using just my smartphone."
];

function showFact() {
    const factElement = document.getElementById("fun-fact");
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
}

// PHOTO CAROUSEL
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const track = document.querySelector(".carousel-track");
const dotsContainer = document.getElementById("carousel-dots");

slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentSlide].classList.add("active");
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// LIGHTBOX GALLERY
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
let currentLightboxIndex = 0;

slides.forEach((slide, index) => {
    const img = slide.querySelector("img");
    img.addEventListener("click", () => {
        currentLightboxIndex = index;
        openLightbox();
    });
});

function openLightbox() {
    const img = slides[currentLightboxIndex].querySelector("img");
    const title = slides[currentLightboxIndex].querySelector("h3").textContent;
    lightboxImg.src = img.src;
    lightboxCaption.textContent = title;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function changeLightboxImage(direction) {
    currentLightboxIndex = (currentLightboxIndex + direction + slides.length) % slides.length;
    openLightbox();
}

// BACK TO TOP BUTTON
const backToTopBtn = document.getElementById("back-to-top");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

function backToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}