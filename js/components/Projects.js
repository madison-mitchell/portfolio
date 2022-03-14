import ohioansCare from "../../images/ohioansCare.png"

export default function Projects() {
    return `
    <div id="ohioansCare" class="project header-wrapper border-solid border-2 border-cyan-500 rounded-3xl my-5 animate__animated animate__bounceInDown bg-gradient-to-r from-cyan-200 to-blue-200 cursor-pointer">
        <div class="project-container-left rounded-3xl">
            <div class="photo rounded-3xl text-center">
                <img src="${ohioansCare}" alt="Madison Mitchell" class="website-img rounded-3xl m-auto hover:from-pink-500 hover:to-yellow-500">
            </div>

            <div class="header-grid m-auto flex flex-col">
                <div class="header justify-center flex  mx-6">
                    <span class="html-text align-left align-top text-sky-300">&lt;header&gt;</span>
                    <div class="title text-center p-3 text-gray-900 font-cursive hover:text-cyan-500 active:text-cyan-700 leading-10">
                        Ohioans Care
                    </div>
                    <span class="html-text align-right align-bottom text-blue-300">&lt;/header&gt;</span>
                </div>

                <div class="header justify-center flex  mx-6">
                    <span class="html-text align-left align-top text-sky-300">&lt;h1&gt;</span>
                    <div class="sub-heading-2 text-justify tracking-wider font-mono p-3 text-gray-900">
                        Ohioans Care is built with the intention of connecting Ohioans to the help they need via government social services or local community outreach. Our mission is to create an outstanding social care network within the state of Ohio and uplift the lives of people in need.
                    </div>
                    <span class="html-text align-right align-bottom text-blue-300">&lt;/h1&gt;</span>
                </div>
            </div>
        </div>
    </div>

    <div id="mysteryEducator" class="project header-wrapper border-solid border-2 border-blue-500 rounded-3xl my-5 animate__animated animate__bounceInDown animate__delay-1s bg-gradient-to-r from-cyan-200 to-blue-200">
        <div class="project-container-right rounded-3xl">
            <div class="header-grid m-auto flex flex-col">
                <div class="header justify-center flex  mx-6">
                    <span class="html-text align-left align-top text-sky-300">&lt;header&gt;</span>
                    <div class="title text-center p-3 text-gray-900 font-cursive hover:text-sky-500 active:text-sky-700 leading-10">
                    <span class="html-text align-left align-top text-gray-900">JAC's</span><br>
                        Mystery Educator
                    </div>
                    <span class="html-text align-right align-bottom text-blue-300">&lt;/header&gt;</span>
                </div>

                <div class="header justify-center flex mx-6">
                    <span class="html-text align-left align-top text-sky-300">&lt;h1&gt;</span>
                    <div class="sub-heading-2 text-justify p-3 text-gray-900 font-mono">
                        Navigating the new world of home education has been challenging for all of us. Mystery Educator is an education application that presents various aspects of science, art, and history that involves children in the learning process while keeping them engaged.
                    </div>
                    <span class="html-text align-right align-bottom text-blue-300">&lt;/h1&gt;</span>
                </div>
            </div>

            <div class="photo rounded-3xl text-center justify-around flex">
                <img src="${ohioansCare}" alt="Projects" class="website-img rounded-3xl m-auto">
            </div>
        </div>
    </div>

    <div id="islandHopping" class="project header-wrapper border-solid border-2 border-cyan-500 rounded-3xl my-5 animate__animated animate__bounceInDown animate__delay-2s bg-gradient-to-r from-cyan-200 to-blue-200">
        <div class="project-container-left rounded-3xl">
            <div class="photo rounded-3xl justify-around flex">
                <img src="${ohioansCare}" alt="Contact" class="website-img rounded-3xl m-auto">
            </div>

            <div class="header-grid m-auto flex flex-col  mx-6">
                <div class="header justify-center flex">
                    <span class="html-text align-left align-top text-sky-300">&lt;header&gt;</span>
                    <div class="title text-center p-3 text-gray-900 font-cursive hover:text-blue-500 active:text-blue-700 leading-10">
                    <span class="html-text align-left align-top text-gray-900">JAC's</span><br>
                        Island Hopping Adventures
                    </div>
                    <span class="html-text align-right align-bottom text-blue-300">&lt;/header&gt;</span>
                </div>

                <div class="header justify-center flex  mx-6">
                    <span class="html-text align-left align-top text-sky-300">&lt;h1&gt;</span>
                    <div class="sub-heading-2 text-justify p-3 text-gray-900 font-mono">
                        JAC's Island Hopping Adventures website was created with the intention of educating current and future clientele of what island hopping is and island hopping adventures offered by JAC Enterprises.
                    </div>
                    <span class="html-text align-right align-bottom text-blue-300">&lt;/h1&gt;</span>
                </div>
            </div>
        </div>
    </div>
    `;
}