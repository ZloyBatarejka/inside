const hamburgerIcon = document.querySelector('#hamburger')
const nav = document.querySelector('.nav')

const toggle = () => {
    hamburgerIcon.classList.toggle('open')
    nav.classList.toggle('open')
}


hamburgerIcon.addEventListener('click', toggle)
