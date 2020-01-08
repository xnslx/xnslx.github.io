const x = document.querySelectorAll("img");
const header = document.querySelector('header');

window.addEventListener('scroll', myFunc);

function myFunc() {
    if (window.scrollY > 0 && window.scrollY < 765) {
        x[0].classList.add('active');
        x[1].classList.remove('active');
        x[2].classList.remove('active');
        x[3].classList.remove('active');
        x[4].classList.remove('active');
    } else if (window.scrollY > 765 && window.scrollY < 1633) {
        x[0].classList.remove('active');
        x[1].classList.add('active');
        x[2].classList.remove('active');
        x[3].classList.remove('active');
        x[4].classList.remove('active');
    } else if (window.scrollY > 1633 && window.scrollY < 2268) {
        x[0].classList.remove('active');
        x[1].classList.remove('active');
        x[2].classList.add('active');
        x[3].classList.remove('active');
        x[4].classList.remove('active');
    } else if (window.scrollY > 2268 && window.scrollY < 2905) {
        x[0].classList.remove('active');
        x[1].classList.remove('active');
        x[2].classList.remove('active');
        x[3].classList.add('active');
        x[4].classList.remove('active');
    } else if (window.scrollY > 2905) {
        x[0].classList.remove('active');
        x[1].classList.remove('active');
        x[2].classList.remove('active');
        x[3].classList.remove('active');
        x[4].classList.add('active');
    }
};