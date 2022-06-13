const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

let d = new Date();
let today = d.getDate();
let month = d.getMonth()+1;
if (month === 1 && (today >= 0 && today <= 31) ) {
    document.getElementById("card").style.backgroundImage = "url('/monthly/m1.jpg')";
}else if (month === 2 && (today >= 0 && today <= 31) ) {
    document.getElementById("card").style.backgroundImage = "url('/monthly/m2.jpg')";
}else if (month === 3 && (today >= 0 && today <= 31) ) {
    document.getElementById("card").style.backgroundImage = "url('/monthly/m3.jpg')";
}else if (month === 4 && (today >= 0 && today <= 31) ) {
    document.getElementById("card").style.backgroundImage = "url('/monthly/m4.jpg')";
}else if (month === 5 && (today >= 0 && today <= 31) ) {
    document.getElementById("card").style.backgroundImage = "url('/monthly/m5.jpg')";
}else if (month === 6 && (today >= 0 && today <= 31) ) {
    document.getElementById("card").style.backgroundImage = "url('/monthly/m6.jpg')";
}else if (month === 7 && (today >= 0 && today <= 31) ) {
    document.getElementById("card").style.backgroundImage = "url('/monthly/m7.jpg')";
}else if (month === 8 && (today >= 0 && today <= 31) ) {
    document.getElementById("card").style.backgroundImage = "url('/monthly/m8.jpg')";
}else if (month === 9 && (today >= 0 && today <= 31) ) {
    document.getElementById("card").style.backgroundImage = "url('/monthly/m9.jpg')";
}else if (month === 10 && (today >= 0 && today <= 31) ) {
    document.getElementById("card").style.backgroundImage = "url('/monthly/m10.jpg')";
}else if (month === 11 && (today >= 0 && today <= 31) ) {
    document.getElementById("card").style.backgroundImage = "url('/monthly/m11.jpg')";
}else if (month === 12 && (today >= 0 && today <= 31) ) {
    document.getElementById("card").style.backgroundImage = "url('/monthly/12.jpg')";
}

