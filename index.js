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







document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-images");
    const prevBtn = document.querySelector(".control-btn:first-child");
    const nextBtn = document.querySelector(".control-btn:last-child");
    let currentIndex = 0;

    function updateGallery(index) {
        images.forEach((img, i) => {
            // Reset all images to a base state (hidden or off-center)
            img.classList.remove("active");
            img.style.opacity = "0";
            img.style.zIndex = "1";
        });

        // Set the active image to be centered
        const activeImg = images[index];
        activeImg.classList.add("active");
        activeImg.style.opacity = "1";
        activeImg.style.zIndex = "10";
        // Center the image using left/top 50% and translate(-50%, -50%)
        activeImg.style.left = "50%";
        activeImg.style.top = "50%";
        activeImg.style.transform = "translate(-50%, -50%) scale(1.5) rotate(2deg)";
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

    // Initialize gallery with the first image centered
    updateGallery(currentIndex);
});



document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});


// Hide loader when all content is loaded
window.addEventListener("load", function () {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    loaderWrapper.style.opacity = "0";
    setTimeout(() => {
        loaderWrapper.style.display = "none";
    }, 500);
});

setTimeout(() => {
    document.querySelector(".header-text").classList.add("fade-in");
}, 500);

setTimeout(() => {
    document.querySelector(".bulbs").classList.add("fade-in");
}, 700);

setTimeout(() => {
    const eidUrdu = document.querySelectorAll(".urdu-txt");
    eidUrdu.forEach((txt) => {
        txt.classList.add('fade-in')

    })

}, 800);


function stars() {
    let stars = document.querySelectorAll(".star");

    console.log("Stars found:", stars.length); // Debugging

    if (stars.length === 0) {
        console.error("No elements with class 'star' found!");
        return; // Stop execution if no stars exist
    }

    let screenWidth = window.innerWidth; // More reliable for different devices
    let screenHeight = window.innerHeight;

    let glowColors = ["#ffd700", "#ffcc00", "#ffffff", "#ffddaa"]; // Star glow colors

    stars.forEach(star => {
        let x = Math.floor(Math.random() * screenWidth);
        let y = Math.floor(Math.random() * (screenHeight / 2));
        let duration = Math.random() * 2 + 1; // Random duration between 1s to 3s
        let glow = glowColors[Math.floor(Math.random() * glowColors.length)];

        console.log(`Star Position -> X: ${x}, Y: ${y}, Duration: ${duration}s`); // Debugging

        star.style.position = "absolute";
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.animationDuration = `${duration}s`;
        star.style.textShadow = `0 0 15px ${glow}, 0 0 25px ${glow}, 0 0 35px ${glow}`;
    });
}

// Wait 1 second and then execute stars function
setTimeout(() => {
    console.log("Executing stars function...");
    stars();
    document.querySelector(".stars-container").classList.add("fade-in")
}, 1500);

setTimeout(() => {
    document.querySelector(".letter-text-btn").classList.add('fade-in');

}, 2000);

setTimeout(() => {
    document.querySelector(".typing-text").classList.add('fade-in');
    typeEffect();

}, 2100);












