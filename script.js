// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ==============================
// CLOSE MENU AFTER CLICK
// ==============================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ==============================
// STICKY NAVBAR
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "#0b1120";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
    } else {
        header.style.background = "#111827";
        header.style.boxShadow = "none";
    }

});

// ==============================
// ACTIVE NAVIGATION LINK
// ==============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==============================
// SCROLL TO TOP BUTTON
// ==============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#2563eb";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ==============================
// FADE-IN ANIMATION
// ==============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.2
});

const cards = document.querySelectorAll(
    ".project-card, .skill-box, .about-image, .about-text"
);

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});

// ==============================
// HERO IMAGE ANIMATION
// ==============================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    setInterval(() => {

        heroImage.style.transform = "scale(1.05)";

        setTimeout(() => {
            heroImage.style.transform = "scale(1)";
        }, 800);

    }, 3000);

}

// ==============================
// CONTACT FORM
// ==============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}

// ==============================
// CONSOLE MESSAGE
// ==============================

console.log("Portfolio Website Loaded Successfully.");

