const menuBtn = document.querySelector('.menu__btn')
const menuClose = document.querySelector('.menu__close')
const menuList = document.querySelector('.menu__list')
const menuBG = document.querySelector('.menu--close')
const headerEl = document.querySelector('.header')

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__list--open')
    menuBG.classList.toggle('menu--open')
})

menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu__list--open')
    menuBG.classList.remove('menu--open')
})

window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY
  
    if(scrollPos > 100) {
      headerEl.classList.add('header_mini')
    }
    else {
      headerEl.classList.remove('header_mini')
    }
  })
