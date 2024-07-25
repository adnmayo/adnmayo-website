$(document).ready(() => {
    typeWriter("#aboutTypewriter", "Get To Know Me", 80)

    const aboutme1 = document.getElementById('aboutme1');
    setTimeout(() => {
        fadeIn(aboutme1);
    }, 1200);
});