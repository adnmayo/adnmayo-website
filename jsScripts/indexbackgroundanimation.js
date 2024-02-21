var background = document.getElementById("background");
var backgroundtx = background.getContext("2d");
background.height = window.innerHeight;
background.width = window.innerWidth;
var binary = "01";
binary = binary.split("");
var font_size = 20;
var columns = background.width / font_size;
var chardrop = [];

for (var x = 0; x < columns; x++) {
	chardrop[x] = 1;
}

function draw() {
	backgroundtx.fillStyle = "rgba(0, 0, 0, 0.05)";
	backgroundtx.fillRect(0, 0, background.width, background.height);
	backgroundtx.fillStyle = "green";
	backgroundtx.font = font_size + "px arial";
	for (var i = 0; i < chardrop.length; i++) {
		var text = binary[Math.floor(Math.random() * binary.length)];
		backgroundtx.fillText(text, i*font_size, chardrop[i]*font_size);
		if (chardrop[i]*font_size > background.height && Math.random() > 0.975) {
			chardrop[i] = 0;
		}
		chardrop[i]++;
	}

}

setInterval(draw, 120);