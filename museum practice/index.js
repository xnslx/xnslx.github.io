// document.getElementById("toggleBtn").addEventListener('click', () => {
//     toggleBtn.classList.toggle('active');
//     document.getElementsByClassName("sidebar").classList.toggle('active');
// });

function myFunction(e) {
    e.classList.toggle('active');

    let elem = document.getElementById("sidebarId");
    let style = window.getComputedStyle(elem);
    let marginleft = style.getPropertyValue("margin-left");


    if (marginleft == "-375px") {
        elem.style.marginLeft = "0";
        document.getElementById("textId").style.display = "none";
        document.getElementById("progressbar").style.display = "none";
        document.getElementsByClassName("photo-gallery").style.display = "none";
    } else {
        elem.style.marginLeft = "-375px";
        document.getElementById("textId").style.display = "block";
        document.getElementById("progressbar").style.display = "block";
        document.getElementsByClassName("photo-gallery").style.display = "block";
    }
}