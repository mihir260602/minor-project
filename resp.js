burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navList = document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
    rightNav.classList.toogle('v-class-resp')
    navbar.classList.toogle('v-class-resp')
    navList.classList.toogle('v-class-resp')
})