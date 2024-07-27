$(document).ready(function(){
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Front end developer","Fresher","Technician","8 month Expriance"],
        typeSpeed: 100,
        backSpeed: 200,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Connect with me on :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
    
$(document).ready(function(){
    // owl carousel script
    $('.carousel').slick({
        margin: 20,
        loop: true,
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 400,
        centerMode: true,
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
$(document).ready(function(){
    const type = document.querySelector('.type-text');

    let listTexts = ["Front end developer","Creative-active, and mastery","Technician","8 month Expriance"];
    
    let index = -1;
    let current = 0;
    
    function typeTextFunc() {
        if (current === listTexts.length) {
            current = 0;
        }
        let typeText = setInterval(() => {
            if (index == listTexts[current].length - 1) {
                clearInterval(typeText);
                clearTextFunc();
            } else {
                index++;
                type.textContent += listTexts[current][index];
            }
        }, 150);
    };
    
    function clearTextFunc() {
        let clearText = setInterval(() => {
            if (type.textContent.length == 0) {
                clearInterval(clearText);
                index = -1;
                current++
                typeTextFunc();
            } else {
                type.textContent = type.textContent.slice(0, -1)
            }
        }, 150);
    };
    
    typeTextFunc();

});

// Skill cahrt 
$(document).ready(function(){
'use strict';

function progressBarAndCountNumber () {
    const progress = document.querySelectorAll('.progress');
    let count = 0;
    // You must put the maximum number in the MAX variable.
    let MAX = 90;

    let run = setInterval(() => {
        count++;
        progress.forEach(element => {
            if (count <= element.dataset.progress) {
                element.parentElement.style.background = `conic-gradient(#f9004d ${count}%, black 0)`;
                element.firstElementChild.textContent = `${count}%`;
            };
            if (count == MAX) {
                clearInterval(run);
            };
        });
    }, 20);
}

progressBarAndCountNumber();
});
