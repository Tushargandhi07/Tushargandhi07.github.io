GitHubCalendar(".calendar", "Tushargandhi07", { responsive: true });

const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');


openMenu.addEventListener('click', showm)
closeMenu.addEventListener('click', closem)

function showm() {
    menu.style.display = 'flex';
    menu.style.top = '0';
}

function closem() {
    menu.style.top = '-100%';
}

function resume() {
    window.open("https://drive.google.com/file/d/1iTu0C9XvWkvLS8lV04s1vNlNsVltXinx/view");
}


// auto_type 

var auto = new Typed("#auto_type", {
    strings: ["Full Stack Web-Developer", "Coder"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// reveal elements

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal2);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight= window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint=150;

        if(revealtop<windowheight-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

function reveal2() {
    var reveals = document.querySelectorAll('.reveal2');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight= window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint=150;

        if(revealtop<windowheight-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
