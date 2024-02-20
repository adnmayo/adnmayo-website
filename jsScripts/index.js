$(document).ready(() => {
    typeWriter("#typewriter1", "Hi! I'm Adrian.", 70);
	setTimeout(function() {
		typeWriter("#typewriter2", "Welcome to my corner of the internet.", 40);
	}, 1500);
    setTimeout(function() {
		typeWriter("#typewriter3", "Software Engineering @ UTS", 40);
	}, 3500);
});


