import madison from "../../images/MadisonHeadShot.jpeg"
import madisonMemoji from "../../images/madison-memoji.png"
import madisonMemojiPhone from "../../images/madison-memoji-phone.png"
import madisonMemojiLaptop from "../../images/madison-memoji-laptop.png"
import laptop from "../../images/laptop-code.png"
import phone from "../../images/phone-hand.png"

export default function Home() {
    return `
    <div id="madison" class="about-madison header-wrapper border-solid border-2 border-cyan-500 rounded-3xl my-5 animate__animated animate__bounceInDown bg-gradient-to-r from-cyan-600 to-blue-600 cursor-pointer">
        <div class="about-me-container-left rounded-3xl">
            <div class="photo rounded-3xl text-center"><img src="${madisonMemoji}" alt="Madison Mitchell" class="photo-img rounded-3xl m-auto hover:from-pink-500 hover:to-yellow-500">
            </div>

            <div class="header-grid m-auto flex flex-col">
                <div class="header justify-center flex">
                    <span class="html-text align-left align-top text-sky-300">&lt;header&gt;</span>
                    <div class="name text-center p-3 text-sky-50 font-cursive">
                        Madison Mitchell
                    </div>
                    <span class="html-text align-right align-bottom text-sky-300">&lt;/header&gt;</span>
                </div>

                <div class="header justify-center flex">
                    <span class="html-text align-left align-top text-sky-300">&lt;h1&gt;</span>
                    <div class="sub-heading text-center tracking-wider font-mono p-3 mx-2 text-sky-100">
                        SOFTWARE DEVELOPER
                    </div>
                    <span class="html-text align-right align-bottom text-sky-300">&lt;/h1&gt;</span>
                </div>
            </div>
        </div>
    </div>

    <div id="projects" class="projects header-wrapper border-solid border-2 border-blue-500 rounded-3xl my-5 animate__animated animate__bounceInDown animate__delay-1s bg-gradient-to-r from-cyan-600 to-blue-600">
        <div class="about-me-container-right rounded-3xl h-96">
            <div class="header-grid m-auto flex flex-col">
                <div class="header justify-center flex">
                    <span class="html-text align-left align-top text-sky-300">&lt;header&gt;</span>
                    <div class="title text-center p-3 text-sky-50">
                        Projects
                    </div>
                    <span class="html-text align-right align-bottom text-sky-300">&lt;/header&gt;</span>
                </div>

                <div class="header justify-center flex">
                    <span class="html-text align-left align-top text-sky-300">&lt;h1&gt;</span>
                    <div class="sub-heading-2 text-center p-3 text-sky-100 font-mono">
                        Java | Spring | Thymeleaf | JavaScript | HTML | CSS <br>
                        TDD | Agile | Scrum | Object Oriented Programming (OOP) <br>
                        JSON | REST APIs | MVC | Responsive Design / Mobile <br>
                        Relational Databases | Source Control / GitHub
                    </div>
                    <span class="html-text align-right align-bottom text-sky-300">&lt;/h1&gt;</span>
                </div>
            </div>

            <div class="photo rounded-3xl text-center justify-around flex"><img
                    src="${madisonMemojiLaptop}" alt="Projects" class="icon-img rounded-3xl m-auto">
            </div>
        </div>
    </div>

    <div id="contact" class="contact header-wrapper border-solid border-2 border-cyan-500 rounded-3xl my-5 animate__animated animate__bounceInDown animate__delay-2s bg-gradient-to-r from-cyan-600 to-blue-600">
        <div class="about-me-container-left rounded-3xl">
            <div class="photo rounded-3xl justify-around flex"><img src="${madisonMemojiPhone}"
                    alt="Contact" class="icon-img rounded-3xl m-auto">
            </div>

            <div class="header-grid m-auto flex flex-col">
                <div class="header justify-center flex">
                    <span class="html-text align-left align-top text-sky-300">&lt;header&gt;</span>
                    <div class="title text-center p-3 text-sky-50">
                        Contact
                    </div>
                    <span class="html-text align-right align-bottom text-sky-300">&lt;/header&gt;</span>
                </div>

                <div class="header justify-center flex">
                    <span class="html-text align-left align-top text-sky-300">&lt;h1&gt;</span>
                    <div class="sub-heading text-center p-3 mx-2 text-sky-100">
                        Let's Get In Touch!
                    </div>
                    <span class="html-text align-right align-bottom text-sky-300">&lt;/h1&gt;</span>
                </div>
            </div>
        </div>
    </div>
    `;
}