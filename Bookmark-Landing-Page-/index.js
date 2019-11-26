const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('.fa-times');
const navMenu = document.getElementById('nav-menu');
document.querySelector('.humburger').addEventListener('click', () => {

    bar.classList.toggle('active');
    cross.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const itemContent = document.getElementsByClassName('itemContent');
const itemMenu = document.getElementsByClassName('itemMenu');

function changeContent(menubar, element) {
    var i;
    for (let i = 0; i < itemContent.length; i++) {
        itemContent[i].style.display = "none";
    }

    for (let i = 0; i < itemMenu.length; i++) {
        itemMenu[i].classList.remove('active');
    }
    document.getElementById(menubar).style.display = "block";
    element.classList.add('active');
}

document.getElementById('defaultOpen').click();



const down = document.getElementsByClassName('fa-angle-down');
const up = document.getElementsByClassName('fa-angle-up');
const questionIcon = document.getElementsByClassName('question-icons');
const questionText = document.querySelectorAll('.question-text');


for (let i = 0; i < down.length; i++) {
    down[i].addEventListener('click', function myFunc() {
        this.classList.toggle('active');
        questionText[i].classList.toggle('active');
    })
}