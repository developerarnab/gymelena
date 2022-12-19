
// ---------- navabr
const menutoggle = document.querySelector(".menutoggle");

const navbar = document.querySelector(".navbar");

menutoggle.addEventListener("click", () => {

    menutoggle.classList.toggle("active");

    navbar.classList.toggle("active");

})


// ---------  swiper slider
var swiper = new Swiper(".mySwiper", {
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// ------------  accordian
const accordian = document.getElementsByClassName('accordian-content');

for ( i = 0; i<accordian.length; i++){

accordian[i].addEventListener('click', function(){

    this.classList.toggle('active')
}) 

}




























