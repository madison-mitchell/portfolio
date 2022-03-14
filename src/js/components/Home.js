import madison from "../../images/MadisonHeadShot.jpeg"
import madisonMemoji from "../../images/madison-memoji.png"
import madisonMemojiPhone from "../../images/madison-memoji-phone.png"
import madisonMemojiLaptop from "../../images/madison-memoji-laptop.png"
import laptop from "../../images/laptop-code.png"
import phone from "../../images/phone-hand.png"

export default function Home() {
    return `

    <div id="projects" class="projects header-wrapper border-solid border-2 border-blue-500 rounded-3xl my-5 animate__animated animate__bounceInDown animate__delay-1s bg-gradient-to-r from-cyan-200 to-blue-200 cursor-pointer">
        <div class="about-me-container-left rounded-3xl">
            <div class="photo rounded-3xl text-center justify-around flex">
                <img src="${madisonMemojiLaptop}" alt="Projects" class="icon-img rounded-3xl m-auto">
            </div>

            <div class="header-grid m-auto flex flex-col">
                <div class="header justify-center flex">
                    <span class="html-text align-left align-top text-sky-300">&lt;header&gt;</span>
                    <div class="title text-center p-3 text-gray-900 font-cursive hover:text-cyan-500 active:text-cyan-700">
                        Projects
                    </div>
                    <span class="html-text align-right align-bottom text-blue-300">&lt;/header&gt;</span>
                </div>

                <div class="header justify-center flex">
                    <span class="html-text align-left align-top text-sky-300">&lt;h1&gt;</span>
                    <div class="sub-heading-2 text-center p-3 text-gray-900 font-mono">
                        Java | Spring | Thymeleaf | JavaScript | HTML | CSS <br>
                        TDD | Agile | Scrum | Object Oriented Programming (OOP) <br>
                        JSON | REST APIs | MVC | Responsive Design / Mobile <br>
                        Relational Databases | Source Control / GitHub
                    </div>
                    <span class="html-text align-right align-bottom text-blue-300">&lt;/h1&gt;</span>
                </div>
            </div>
        </div>
    </div>

    <div id="madison" class="about-madison header-wrapper border-solid border-2 border-cyan-500 rounded-3xl my-5 animate__animated animate__fadeIn bg-gradient-to-r from-cyan-200 to-blue-200 cursor-pointer h-96 flex justify-around">
        <div class="about-me-container-right rounded-3xl">

            <div class="header-grid m-auto flex flex-col">
                <div class="header justify-center flex">
                    <span class="html-text align-left align-top text-sky-300">&lt;header&gt;</span>
                    <div class="name text-center p-3 text-gray-900 font-cursive hover:text-sky-500 active:text-sky-700">
                        Madison Mitchell
                    </div>
                    <span class="html-text align-right align-bottom text-blue-300">&lt;/header&gt;</span>
                </div>

                <div class="header justify-center flex">
                    <span class="html-text align-left align-top text-sky-300">&lt;h1&gt;</span>
                    <div class="sub-heading text-center tracking-wider font-mono p-3 mx-2 text-gray-900">
                        SOFTWARE DEVELOPER
                    </div>
                    <span class="html-text align-right align-bottom text-blue-300">&lt;/h1&gt;</span>
                </div>
            </div>

            <div class="photo rounded-3xl text-center flex flex-col">
                <img src="${madisonMemoji}" alt="Madison Mitchell" class="photo-img rounded-3xl m-auto hover:from-pink-500 hover:to-yellow-500">
            </div>
        </div>
    </div>

    <div id="contact" class="contact header-wrapper border-solid border-2 border-cyan-500 rounded-3xl my-5 animate__animated animate__bounceInUp animate__delay-1s bg-gradient-to-r from-cyan-200 to-blue-200 cursor-pointer">
        <div class="about-me-container-left rounded-3xl">
            <div class="photo rounded-3xl justify-around flex"><img src="${madisonMemojiPhone}"
                    alt="Contact" class="icon-img rounded-3xl m-auto">
            </div>

            <div class="header-grid m-auto flex flex-col">
                <div class="header justify-center flex">
                    <span class="html-text align-left align-top text-sky-300">&lt;header&gt;</span>
                    <div class="title text-center p-3 text-gray-900 font-cursive hover:text-blue-500 active:text-blue-700">
                        Contact
                    </div>
                    <span class="html-text align-right align-bottom text-blue-300">&lt;/header&gt;</span>
                </div>

                <div class="header justify-center flex">
                    <span class="html-text align-left align-top text-sky-300">&lt;h1&gt;</span>
                    <div class="sub-heading text-center p-3 mx-2 text-gray-900">
                        Let's Get In Touch!
                    </div>
                    <span class="html-text align-right align-bottom text-blue-300">&lt;/h1&gt;</span>
                </div>
            </div>
        </div>
    </div>
    `;
}