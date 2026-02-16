const background = document.getElementById("background");
if (background) {
    const backgroundtx = background.getContext("2d");
    if (backgroundtx) {
        const canvas = background;
        const ctx = backgroundtx;
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        const binary = "01".split("");
        const font_size = 20;
        const columns = canvas.width / font_size;
        const rows = canvas.height / font_size;
        const chardrop = [];
        for (let x = 0; x < columns; x++) {
            chardrop[x] = Math.floor(Math.random() * rows);
        }
        // Pre-fill the canvas so rain is already visible on load
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 50; i++) {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "green";
            ctx.font = font_size + "px arial";
            for (let j = 0; j < chardrop.length; j++) {
                const text = binary[Math.floor(Math.random() * binary.length)];
                ctx.fillText(text, j * font_size, chardrop[j] * font_size);
                if (chardrop[j] * font_size > canvas.height && Math.random() > 0.975) {
                    chardrop[j] = 0;
                }
                chardrop[j]++;
            }
        }
        function draw() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "green";
            ctx.font = font_size + "px arial";
            for (let i = 0; i < chardrop.length; i++) {
                const text = binary[Math.floor(Math.random() * binary.length)];
                ctx.fillText(text, i * font_size, chardrop[i] * font_size);
                if (chardrop[i] * font_size > canvas.height && Math.random() > 0.975) {
                    chardrop[i] = 0;
                }
                chardrop[i]++;
            }
        }
        setInterval(draw, 120);
    }
}
