// let slideIndex = 0;
// showSlides(slideIndex);

// function showSlides(n) {
//     const slides = document.querySelectorAll('.slide');
//     if (n >= slides.length) {
//         slideIndex = 0;
//     }
//     if (n < 0) {
//         slideIndex = slides.length - 1;
//     }
//     const offset = -slideIndex * 100;
//     document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
// }

// // Automatically advance the slider every 3 seconds (3000 milliseconds)
// setInterval(function () {
//     slideIndex++;
//     showSlides(slideIndex);
// }, 3000);

let slides = document.querySelectorAll(".slide")
let slideIndex = 0;
slideShow(slideIndex);

function slideShow(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 1) {
        slideIndex = slides.length+1;
    }

    const offset = slideIndex * 100;
    document.querySelector(".slider").style.transform = `translate(-${offset}%)`;
}

setInterval(() => {
    slideIndex++;
    slideShow(slideIndex);
}, 3000);