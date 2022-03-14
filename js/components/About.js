import madison from "../../images/MadisonHeadShot.jpeg"
import resume from "../../images/resume.jpg"
import laptop from "../../images/laptop-code.png"

export default function About() {
    return `
    <div class="header-wrapper border-solid border-2 border-cyan-500 rounded-3xl my-5 bg-gradient-to-r from-cyan-200 to-blue-200 animate__animated animate__bounceInDown">
        <div class="about-me-container-left rounded-3xl">
            <div class="photo rounded-3xl text-center">
                <img src="${madison}" alt="Madison Mitchell" class="photo-img rounded-3xl m-auto hover:from-pink-500 hover:to-yellow-500">
            </div>

            <div class="header-grid m-auto flex flex-col">
                <div class="header justify-center flex">
                    <span class="html-text align-left align-top text-sky-300">&lt;header&gt;</span>
                    <div class="name text-center p-3 text-gray-900 font-cursive hover:text-cyan-500 active:text-cyan-700">
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
        </div>
    </div>

    <div id="bio" class="header-wrapper border-solid border-2 border-cyan-500 rounded-3xl my-5 bg-gradient-to-r from-cyan-200 to-blue-200 animate__animated animate__zoomIn animate__delay-1s">
        <div class="about-me-container-right rounded-3xl  my-10">
            <div class="header-grid m-auto flex flex-col">
                <div class="header justify-center flex">
                    <span class="html-text align-left align-top text-sky-300">&lt;header&gt;</span>
                    <div class="title text-center p-3 text-gray-900 font-cursive hover:text-sky-500 active:text-sky-700">
                        a little about myself
                    </div>
                    <span class="html-text align-right align-bottom text-blue-300">&lt;/header&gt;</span>
                </div>

                <div class="header justify-center flex px-10">
                    <span class="html-text align-left align-top text-sky-300">&lt;p&gt;</span>
                    <p class="sub-heading-2 text-justify p-3 text-gray-900 font-mono">
                        Hi! 👋🏻 I'm Madison. Welcome to my Portfolio. <br><br>

                        Being a highly motivated Software Developer with 10 years experience working in the Technology Industry where I am currently working for a Fortune 500 Tech Company as a four-consecutive-year Triple Exceeding Expectations Tech Advisor. <br><br>
                        
                        I'm dedicated to producing high quality products and results, naturally curious with a strong desire to grow skill set and I excel in resolving challenges encountered in the workplace with innovative solutions. My passion for Software Development allows me to create high quality, creative products.<br><br>

                        An avid reader, particularly fantasy novels, and enjoys working on side projects to continue to challenge myself, which currently includes creating handy products around the house -- like a smart mirror that tells the time, current events and weather updates.
                    </p>
                    <span class="html-text align-right align-bottom text-blue-300">&lt;/p&gt;</span>
                </div>
            </div>

            <div class="photo rounded-3xl text-center justify-around flex"><img src="${laptop}" alt="Projects" class="icon-img rounded-3xl m-auto">
            </div>
        </div>
    </div>

    <div class="border-solid border-2 border-blue-500 rounded-3xl my-5 animate__animated animate__bounceInUp animate__delay-2s bg-gradient-to-r from-cyan-200 to-blue-200">
        <div class="header justify-center flex my-10">
        <span class="html-text align-left align-top text-sky-300">&lt;header&gt;</span>
            <div class="title text-center p-3 text-gray-900 font-cursive hover:text-blue-500 active:text-blue-700">
                resume
            </div>
        <span class="html-text align-right align-bottom text-blue-300">&lt;/header&gt;</span>
        </div>
        <img class="mx-auto my-14 max-w-4xl rounded-3xl" src="${resume}">
    </div>
    `;
}