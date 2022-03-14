import resume from "../../images/resume.jpg"
import resumeTransparent from "../../images/resume-transparent.png"

export default function Resume() {
    return `
    <div class="border-solid border-2 border-blue-500 rounded-3xl my-5 animate__animated animate__bounceInDown animate__delay-1s bg-gradient-to-r from-cyan-600 to-blue-600">
        <img class="mx-auto my-14 max-w-4xl rounded-3xl" src="${resume}">
        </div>
    </div>
    `;
}