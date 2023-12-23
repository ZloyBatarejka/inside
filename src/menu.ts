const hamburgerIcon = document.querySelector('#nav-icon1')
const nav = document.querySelector('.nav')

const toggle = () => {
    hamburgerIcon.classList.toggle('open')
    nav.classList.toggle('open')
}


hamburgerIcon.addEventListener('click', toggle)
