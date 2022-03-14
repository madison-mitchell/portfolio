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
    
    navHome();
    navContact();
    navAbout();
    navProjects();
    clickFadeOut()
}

function navHome() {
    const homeNavBtn = document.querySelector(".home");

    homeNavBtn.addEventListener("click", () => {
        app.innerHTML = Home();

        navAbout();
        navProjects();
        navContact();
    });
}

function navAbout() {
    const aboutElem = document.getElementById("madison");
    
    aboutElem.addEventListener("click", () => {
        console.log("hi")
        app.innerHTML = About();
    });
}

function navProjects() {
    const projectsElem = document.getElementById("projects")
    
    projectsElem.addEventListener("click", () => {
        app.innerHTML = Projects();
    });
}

function navContact() {
    const contactNavBtn = document.querySelector(".contact");

    contactNavBtn.addEventListener("click", () => {
        app.innerHTML = Contact();
    });
}

function clickFadeOut() {
    const aboutElem = document.getElementById("madison");
    const projectElem = document.getElementById("projects");
    const contactElem = document.getElementById("contact");
    const footerElem = document.getElementById("footer");

    aboutElem.addEventListener("click", () => {
        aboutElem.classList.remove("animate__delay-1s");
        projectElem.classList.remove("animate__delay-1s");
        contactElem.classList.remove("animate__delay-1s");
        footerElem.classList.remove("animate__delay-1s");
        aboutElem.classList.remove("animate__delay-2s");
        projectElem.classList.remove("animate__delay-2s");
        contactElem.classList.remove("animate__delay-2s");
        footerElem.classList.remove("animate__delay-2s");
        aboutElem.classList.remove("animate__delay-3s");
        projectElem.classList.remove("animate__delay-3s");
        contactElem.classList.remove("animate__delay-3s");
        footerElem.classList.remove("animate__delay-3s");

        footerElem.classList.remove("animate__fadeInUp");

        aboutElem.classList.add("animate__fadeOut");
        projectElem.classList.add("animate__fadeOut");
        contactElem.classList.add("animate__fadeOut");
        footerElem.classList.add("animate__fadeOut");

        
        setTimeout(function() {
            app.innerHTML = About(); 
            footerElem.classList.remove("animate__fadeOut");
            footerElem.classList.add("animate__fadeInUpBig");
            footerElem.classList.add("animate__delay-2s");
        }, 1500);
        
    });
  }