

let menu_icon = document.querySelector('#menu-icon i');
let navbar = document.querySelector('.navbar');

menu_icon.addEventListener('click', function(){
    menu_icon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});


let sections = document.querySelectorAll('section');
let nav_links = document.querySelectorAll('header nav a');

window.onscroll = function(){
    sections.forEach(function(sec){
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if((top>=offset) && (top<offset+height)){
            nav_links.forEach(links=>{
                links.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            })
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.screenY > 150);

    menu_icon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
    menu_icon.classList.add('fa-bars');
}
