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
        const chardrop = [];
        for (let x = 0; x < columns; x++) {
            chardrop[x] = 1;
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
