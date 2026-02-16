$(document).ready(() => {
    typeWriter("#headerTypewriter", "Get To Know Me", 80);
    const aboutme1 = document.getElementById("aboutme1");
    setTimeout(() => {
        fadeIn(aboutme1);
    }, 1200);
    const aboutme2 = document.getElementById("aboutme2");
    setTimeout(() => {
        fadeIn(aboutme2);
    }, 2400);
    const aboutme3 = document.getElementById("aboutme3");
    setTimeout(() => {
        fadeIn(aboutme3);
    }, 3600);
});
