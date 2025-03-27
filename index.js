const text = "Eid Mubarik Ayesha";
const specialWord = "Ayesha";
let index = 0;
let container = document.querySelector(".typing-text");
let output = ""; // Store the typed text before inserting into HTML

function typeEffect() {
    if (index < text.length) {
        // Jab "Eid Mubarik" complete ho, cursor hata do
        if (index === text.indexOf(specialWord)) {
            container.classList.remove('cursor');
        }

        // Jab "Ayesha" start ho, cursor wapas le ao
        if (index === text.indexOf(specialWord)) {
            output += `<span class=' span-cursor name'>`;
            // container.classList.add('cursor');
        }

        // Add the current character
        output += text.charAt(index);

        // Jab "Ayesha" complete ho, span band kar do
        if (index === text.indexOf(specialWord) + specialWord.length - 1) {
            output += `</span>`;
        }

        // Update the HTML
        container.innerHTML = (output).toUpperCase();
        index++;

        setTimeout(typeEffect, 100); // Adjust speed as needed
    } else {
        // Jab poora text likh diya jaye, cursor hata do
        container.classList.remove('cursor');
        let spanCursor = container.querySelector(".span-cursor");
        if (spanCursor) {
            spanCursor.classList.remove("span-cursor");
        }
    }
}

typeEffect();


// stars 

document.addEventListener("DOMContentLoaded", () => {
    let stars = document.querySelectorAll(".star");
    let screenWidth = document.documentElement.clientWidth;
    let screenHeight = document.documentElement.clientHeight;

    let glowColors = ["#ffd700", "#ffcc00", "#ffffff", "#ffddaa"]; // Different star glow colors

    stars.forEach(star => {
        let x = Math.floor(Math.random() * screenWidth);
        let y = Math.floor(Math.random() * (screenHeight / 2));
        let duration = Math.random() * 2 + 1; // 1s to 3s
        let glow = glowColors[Math.floor(Math.random() * glowColors.length)];

        star.style.position = "absolute";
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.animationDuration = `${duration}s`;
        star.style.textShadow = `0 0 15px ${glow}, 0 0 25px ${glow}, 0 0 35px ${glow}`;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-images");
    const prevBtn = document.querySelector(".control-btn:first-child");
    const nextBtn = document.querySelector(".control-btn:last-child");
    let currentIndex = 0;

    function updateGallery(index) {
        images.forEach((img, i) => {
            img.classList.remove("active");
            img.style.opacity = "0";
            img.style.zIndex = "1";
            img.style.transform = "scale(1) rotate(0deg)";
        });

        images[index].classList.add("active");
        images[index].style.opacity = "1";
        images[index].style.zIndex = "10";
        images[index].style.transform = "scale(1.1) rotate(2deg)";
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery(currentIndex);
    }

    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") nextImage();
        else if (e.key === "ArrowLeft") prevImage();
    });

    updateGallery(currentIndex);
});







