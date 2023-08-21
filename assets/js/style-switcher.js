
const navToggler = document.querySelector('.nav-toggler')
navToggler.addEventListener('click',()=>{
    document.querySelector('.nav-mobile-ul').classList.toggle('close')
// alert('working')
})
// hide style switcher on scroll


// style switcher on toggle
const styleSwitcherToggler = document.querySelector('.style-switcher-toggler')
styleSwitcherToggler.addEventListener('click',()=>{
    document.querySelector('.style-switcher').classList.toggle('open')
})
// hide style switcher on scroll
window.addEventListener('scroll',()=>{
    if (document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open')
    }
})
// Theme Color
const alternateStyle = document.querySelectorAll('.alternate-style')
function setActiveStyle(color){
    alternateStyle.forEach((style)=>{
        if(color === style.getAttribute('title')){
            style.removeAttribute('disabled')
        }else{
            style.setAttribute('disabled','true')
        }
    })

}
//Theme light and Dark
const dayNight = document.querySelector('.day-night')
dayNight.addEventListener('click',()=>{
    dayNight.querySelector('i').classList.toggle('fa-sun')
    dayNight.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.toggle('dark')
    document.querySelector('.s-icon').style.backgroundColor = '#ffffff'
    document.querySelector('.day-night').style.backgroundColor = '#ffffff'
    
})
window.addEventListener('load',()=>{
    if(document.body.classList.contains('dark')){
        dayNight.querySelector('i').classList.add('fa-sun')
    }else{
        dayNight.querySelector('i').classList.add('fa-moon')
    }
})