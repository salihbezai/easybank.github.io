const navbar = document.querySelector('.navbar')
const icon = document.querySelector('.icon')
const hamburger = document.querySelector('.hamburger')
const x_icon = document.querySelector('.x-icon')
const g = icon.childNodes[1].childNodes[1];
const navlist = document.getElementById('navlist');
const links = document.querySelectorAll('.nav-items li')
let x_icon_last_state = false;



// add fade for li links 
const add_fade =()=>{
    links.forEach((link)=>{
        link.classList.add('fade')
    })
}
// remove fade class 
const remove_fade =()=>{
    links.forEach((link)=>{
        link.classList.remove('fade')
    })
}
// show menu for mobile
const show_menu_for_mobile=()=>{
    navlist.classList.add('open')
    add_fade()
}

const hide_menu_of_mobile=()=>{
    navlist.classList.remove('open')
    remove_fade()
    
}


const show_x_icon =()=>{
    hamburger.style.display = 'none'
    x_icon.style.display = 'block'
    show_menu_for_mobile()
    x_icon_last_state = true;
}

const show_hamburger_icon =()=>{
    hamburger.style.display = 'block'
    x_icon.style.display = 'none'
    hide_menu_of_mobile()
}
// hide both icons
const hide_both_icons =()=>{
    x_icon.style.display='none'
    hamburger.style.display='none'
}
icon.addEventListener('click',()=>{
    if(getComputedStyle(hamburger).display == 'block'){
        show_x_icon()
    }else{
        show_hamburger_icon()
        x_icon_last_state = false;
    }
})

// check the window width 
const check_window_width = ()=>{
    if(window.innerWidth < 755 && x_icon_last_state){
        show_x_icon()
    }else{
        show_hamburger_icon()
    }
    if(window.innerWidth > 755 ){
        hide_menu_of_mobile()
        hide_both_icons()
    }
}

window.addEventListener('resize',check_window_width)




