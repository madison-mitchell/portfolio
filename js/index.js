// import 'animate.css';
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Projects from "./components/Projects.js";

const app = document.getElementById("app");

buildPage();

function buildPage() {
    renderHome();
}

function renderHome() {
    app.innerHTML = Home();

    navBtns()
}

function navBtns() {
    navHome();
    navContact();
    // navAbout();
    navProjects();
    clickFadeOut();
    scrollToTop()
}

function navHome() {
    const homeNavBtn = document.querySelector(".home");

    homeNavBtn.addEventListener("click", () => {
        app.innerHTML = Home();
        navBtns();
    });
}

// function navAbout() {
//     const aboutElem = document.getElementById("madison");
//     const aboutBtn = document.querySelector(".about");

//     aboutElem.addEventListener("click", () => {
//         app.innerHTML = About();
//         navBtns();
//     });

//     aboutBtn.addEventListener("click", () => {
//         app.innerHTML = About();
//         navBtns();
//     });
// }

function navProjects() {
    const projectsElem = document.getElementById("projects");
    const projectsBtn = document.querySelector(".projects");

    projectsElem.addEventListener("click", () => {
        app.innerHTML = Projects();
        navBtns();
    });

    projectsBtn.addEventListener("click", () => {
        app.innerHTML = Projects();
        navBtns();
    });
}

function navContact() {
    const contactElem = document.getElementById("contact");
    const contactNavBtn = document.querySelector(".contact");

    contactElem.addEventListener("click", () => {
        app.innerHTML = Contact();
        navBtns();
    });

    contactNavBtn.addEventListener("click", () => {
        app.innerHTML = Contact();
        navBtns();
    });
}

function scrollToTop() {
    const handPointUp = document.querySelector(".fa-hand-point-up");

    handPointUp.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function clickFadeOut() {
    const navElem = document.querySelector(".nav-wrapper");
    const aboutElem = document.getElementById("madison");
    const projectElem = document.getElementById("projects");
    const contactElem = document.getElementById("contact");
    const footerElem = document.getElementById("footer");

    aboutElem.addEventListener("click", () => {
        navElem.classList.remove("animate__delay-1s");
        aboutElem.classList.remove("animate__delay-1s");
        projectElem.classList.remove("animate__delay-1s");
        contactElem.classList.remove("animate__delay-1s");
        footerElem.classList.remove("animate__delay-1s");

        navElem.classList.remove("animate__delay-2s");
        aboutElem.classList.remove("animate__delay-2s");
        projectElem.classList.remove("animate__delay-2s");
        contactElem.classList.remove("animate__delay-2s");
        footerElem.classList.remove("animate__delay-2s");

        navElem.classList.remove("animate__delay-3s");
        aboutElem.classList.remove("animate__delay-3s");
        projectElem.classList.remove("animate__delay-3s");
        contactElem.classList.remove("animate__delay-3s");
        footerElem.classList.remove("animate__delay-3s");

        navElem.classList.remove("animate__fadeInDown");
        footerElem.classList.remove("animate__fadeInUp");

        navElem.classList.add("animate__fadeOut");
        aboutElem.classList.add("animate__zoomOut");
        projectElem.classList.add("animate__zoomOutUp");
        contactElem.classList.add("animate__zoomOutDown");
        footerElem.classList.add("animate__fadeOut");


        setTimeout(function () {
            app.innerHTML = About();
            navElem.classList.remove("animate__fadeOut");
            navElem.classList.add("animate__fadeInDownBig");
            navElem.classList.add("animate__delay-3s");
            footerElem.classList.remove("animate__fadeOut");
            footerElem.classList.add("animate__fadeInUpBig");
            footerElem.classList.add("animate__delay-3s");
        }, 1250);

    });
}