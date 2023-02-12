GitHubCalendar(".calendar", "Tushargandhi07", { responsive: true });

const menu= document.querySelector('.menu');
const openMenu= document.querySelector('.openMenu');
const closeMenu= document.querySelector('.closeMenu');


openMenu.addEventListener('click',showm)
closeMenu.addEventListener('click',closem)

function showm(){
    menu.style.display='flex';
    menu.style.top='0';
}

function closem(){
    menu.style.top='-100%';
    console.log("yes")
}