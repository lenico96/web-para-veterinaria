window.onscroll = function() {
    let position = window.pageYOffset || document.documentElement.scrollTop

    let elemento1 = document.getElementById("doc");
    let elemento2 = document.getElementById("iconinfo")

    elemento1.style.bottom = position * 0.2 + "px";
    elemento2.style.top = position * 0.2 + "px";
}