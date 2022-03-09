window.addEventListener("scroll", () =>{
    document.querySelector('.container-header').classList.toggle('header-scroll', window.scrollY > 10)
})

const menu = document.querySelector(".header__list")
const menuBtn = document.querySelector("#opener")
const closeBtn = document.querySelector("#closer")

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex"
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none"
})

const closeNav = () => {  
    menu.style.display = "none"
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block"
}

closeBtn.addEventListener('click', closeNav)