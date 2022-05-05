// Global Variables
const video = document.querySelector(".video-container")
const switchBtn = document.querySelector(".switch-btn")
const switchSpan = document.querySelector(".switch")
const loader = document.querySelector(".loader")
const main = document.querySelector('.main')
const header = document.querySelector('header')




// Functions
// Loading Screen
function init() {
    setTimeout(() => {
        loader.style.opacity = 0
        loader.style.display = 'none'
        main.style.display = 'block'
        setTimeout(() => main.style.opacity = 1, 50)
        changeBg()

    }, 4000)
}

// Changing Opacity
function changeBg() {
    header.style.setProperty("--bg", "rgba(0, 0, 0, 0.7")
}

// Sliding Button
function playPause() {
    if (!switchBtn.classList.contains('slide')) {
        switchBtn.classList.add('slide')
        video.pause()
        switchSpan.style.backgroundColor = ('var(--dark-gray)')
    } else {
        switchBtn.classList.remove('slide')
        switchSpan.style.backgroundColor = ('var(--gray)')

        video.play()
    }

}


// Event Listeners
switchBtn.addEventListener("click", playPause)









init();