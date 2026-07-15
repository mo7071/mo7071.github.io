// ===============================
// Welcome Message
// ===============================

window.onload = function () {
    console.log("Welcome to MO SUFIYAN Portfolio");
};


// ===============================
// Contact Form
// ===============================

const form = document.getElementById("my_form");

if (form) {
    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Thank You! Your message has been submitted successfully.");

        form.reset();

    });
}



// ===============================
// Skill Search
// ===============================

function handleSearch(event) {

    if (event.key === "Enter") {

        let input = document
            .getElementById("searchInput")
            .value
            .toLowerCase();

        const links = {

            html: "https://www.w3schools.com/html/",

            css: "https://www.w3schools.com/css/",

            javascript: "https://www.w3schools.com/js/",

            js: "https://www.w3schools.com/js/",

            sql: "https://www.w3schools.com/sql/",

            python: "https://www.w3schools.com/python/"

        };

        if (links[input]) {

            window.open(links[input], "_blank");

        } else {

            alert("No result found.");

        }

    }

}



// ===============================
// Learn More Buttons
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const skillLinks = {

        html: "https://www.w3schools.com/html/",

        css: "https://www.w3schools.com/css/",

        js: "https://www.w3schools.com/js/",

        SQL: "https://www.w3schools.com/sql/",

        python: "https://www.w3schools.com/python/"

    };


    document.querySelectorAll(".skill_card").forEach(card => {

        const skill = card.getAttribute("data-skill");

        const btn = card.querySelector("a");

        if (btn && skillLinks[skill]) {

            btn.href = skillLinks[skill];

            btn.target = "_blank";

        }

    });

});



// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});



// ===============================
// Navbar Active Link
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



// ===============================
// Project Card Animation
// ===============================

const cards = document.querySelectorAll(".project_card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});



// ===============================
// Scroll Animation
// ===============================

const reveal = document.querySelectorAll(".project_card, .skill_card");

window.addEventListener("scroll", () => {

    reveal.forEach(item => {

        let top = item.getBoundingClientRect().top;

        let windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }

    });

});

// Footer Quick Links

document.querySelectorAll('.footer-columns a').forEach(function(link){

    link.addEventListener('click',function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({

            behavior:'smooth'

        });

    });

});