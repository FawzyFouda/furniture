//hover navbar links
let navhover = document.querySelectorAll('.links a');
        
for (var i = 0; i < navhover.length; i++) {
    navhover[i].addEventListener("mouseover", function() {
        this.classList.add('active');

    });

    navhover[i].addEventListener("mouseleave", function() {
        this.classList.remove('active');

    });
}

//show navbar when clicking on bar icon at media query max 730px

let menubtn = document.querySelector('#menu-btn');
let navlinks = document.querySelector('.links');

menubtn.onclick = () => {

    navlinks.classList.toggle('active');
}

// slider

let prevbtn = document.querySelector('.prev');
let nextbtn = document.querySelector('.next');
let slides = document.querySelectorAll('.slide');

let index = 0;


nextbtn.onclick = () => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}


