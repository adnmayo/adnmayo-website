$(document).ready(() => {
    typeWriter("#typewriter1", "Hi! I'm Adrian.", 60);
	setTimeout(function() {
		typeWriter("#typewriter2", "Welcome to my corner of the internet.", 40);
	}, 1600);
    setTimeout(function() {
		typeWriter("#typewriter3", "Software Engineering @ UTS", 40);
	}, 3500);
	setTimeout(function() {
		typeWriter("#typewriter4", "Roam around using the navigation menu to the left", 35)
	}, 5000);
});


