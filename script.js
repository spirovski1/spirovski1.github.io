
//  Автоматското пишување на зборови на Landing Page
const words = ["code", "design", "animate"];
const typingElement = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 150;

function type() {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            isDeleting = true;
            speed = 1000;
        } else {
            speed = 150;
        }
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 500;
        } else {
            speed = 100;
        }
    }
    setTimeout(type, speed);
}

type();


//  Кога е активен нав елемент да има свој стил
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".step-nav li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
