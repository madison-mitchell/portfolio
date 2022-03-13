import madison from "../../images/MadisonHeadShot.jpeg"
import resume from "../../images/resume.jpg"
import laptop from "../../images/laptop-code.png"

export default function About() {
    return `
    <div class="header-wrapper border-solid border-2 border-cyan-500 rounded-3xl my-5 bg-gradient-to-r from-cyan-600 to-blue-600 animate__animated animate__bounceInDown">
        <div class="about-me-container-left rounded-3xl">
            <div class="photo rounded-3xl text-center">
                <img src="${madison}" alt="Madison Mitchell" class="photo-img rounded-3xl m-auto hover:from-pink-500 hover:to-yellow-500">
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

    <div id="bio" class="header-wrapper border-solid border-2 border-cyan-500 rounded-3xl my-5 bg-gradient-to-r from-cyan-600 to-blue-600 animate__animated animate__bounceInUp animate__delay-1s">
        <div class="about-me-container-right rounded-3xl h-96  my-10">
            <div class="header-grid m-auto flex flex-col">
                <div class="header justify-center flex">
                    <span class="html-text align-left align-top text-sky-300">&lt;header&gt;</span>
                    <div class="title text-center p-3 text-sky-50 font-cursive">
                        a little about myself
                    </div>
                    <span class="html-text align-right align-bottom text-sky-300">&lt;/header&gt;</span>
                </div>

                <div class="header justify-center flex px-10">
                    <span class="html-text align-left align-top text-sky-300">&lt;p&gt;</span>
                    <div class="sub-heading-2 text-center p-3 text-sky-100 font-mono">
                    A highly motivated Software Developer with 9 years experience working in the Technology Industry. Currently working for a Fortune 500 Tech Company as a four-consecutive-year Triple Exceeding Expectations Tech Advisor that is dedicated to producing high quality products and results. Naturally curious with a strong desire to grow skill set. Excels in resolving challenges encountered in the workplace with innovative solutions and passionate about creating high quality, creative products.<br><br>

                    An avid reader, particularly fantasy novels, and enjoys working on side projects to continue to challenge oneself as well as create handy products around the house, like a smart mirror that tells the time, current events and weather updates.
                    </div>
                    <span class="html-text align-right align-bottom text-sky-300">&lt;/p&gt;</span>
                </div>
            </div>

            <div class="photo rounded-3xl text-center justify-around flex"><img src="${laptop}" alt="Projects" class="icon-img rounded-3xl m-auto">
            </div>
        </div>
    </div>

    <div class="border-solid border-2 border-blue-500 rounded-3xl my-5 animate__animated animate__bounceInDown animate__delay-1s bg-gradient-to-r from-cyan-600 to-blue-600">
        <div class="header justify-center flex my-10">
        <span class="html-text align-left align-top text-sky-300">&lt;header&gt;</span>
            <div class="title text-center p-3 text-sky-50 font-cursive">
                resume
            </div>
        <span class="html-text align-right align-bottom text-sky-300">&lt;/header&gt;</span>
        </div>
        <img class="mx-auto my-14 max-w-4xl rounded-3xl" src="${resume}">
    </div>
    `;
}