function showsidenav() {

    document.getElementById("sidenav").style.width = "80%";
    document.querySelector('.header').style.filter = "blur(10px)";
    document.querySelector('#fullpage').style.filter = "blur(10px)";
    document.querySelector("#fullpage").style.overflow = "hidden";

}

function closesidenav() {
    document.getElementById("sidenav").style.width = "0%";
    document.querySelector('.header').style.filter = "blur(0px)";
    document.querySelector('#fullpage').style.filter = "blur(0px)";
    document.querySelector("#fullpage").style.overflow = "auto";
}