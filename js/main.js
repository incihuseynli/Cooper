const openedMenu = document.querySelector('#openedMenu');
const closedMenu = document.querySelector('#closedMenu');
const smNavMenu = document.querySelector('.sm.nav-menu');

openedMenu.addEventListener('click', ()=> {
    smNavMenu.style.transform = "translateY(0%)";
});
closedMenu.addEventListener('click', ()=> {
    smNavMenu.style.transform = "translateY(-200%)";
});
