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