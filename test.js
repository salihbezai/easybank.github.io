const navlinks = document.querySelector('.nav-links')
const buttonn = document.getElementById('btn')
buttonn.addEventListener('click',()=>{
    navlinks.classList.toggle('open');
})