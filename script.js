const no = document.querySelector('.no');

document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.background-video');
    const yes = document.querySelector('.yes');

    // start me video pause
    video.pause();

    // 💖 YES CLICK
    yes.addEventListener('click', () => {

        // video show + play
        video.style.opacity = 1;
        video.play();

        yes.textContent = "@KartikeyRahul";

        // 🎬 cinematic overlay
        setTimeout(() => {

            const overlay = document.createElement("div");

            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.background = "rgba(0,0,0,0.9)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.flexDirection = "column";
            overlay.style.zIndex = "999";
            overlay.style.textAlign = "center";

            overlay.innerHTML = `
                <h1 style="font-size:40px; color:white; margin-bottom:10px;">
                    I LOVE YOU ❤️
                </h1>
                <p style="color:pink; font-size:22px;">
                    I love you too meri moongfali 🥜 😘 🙈
                </p>
            `;

            document.body.appendChild(overlay);

            // ❤️ hearts
            setInterval(() => {
                const heart = document.createElement("div");
                heart.innerHTML = "❤️";
                heart.style.position = "absolute";
                heart.style.left = Math.random() * 100 + "vw";
                heart.style.fontSize = "20px";
                heart.style.top = "100%";

                document.body.appendChild(heart);

                let pos = 100;
                const anim = setInterval(() => {
                    pos -= 1;
                    heart.style.top = pos + "%";
                    if (pos < -10) {
                        clearInterval(anim);
                        heart.remove();
                    }
                }, 30);

            }, 300);

            // 🎆 fireworks
            setInterval(() => {
                const f = document.createElement("div");
                f.style.position = "absolute";
                f.style.width = "6px";
                f.style.height = "6px";
                f.style.borderRadius = "50%";
                f.style.left = Math.random() * 100 + "vw";
                f.style.top = Math.random() * 100 + "vh";
                f.style.background = `hsl(${Math.random()*360},100%,50%)`;

                document.body.appendChild(f);

                setTimeout(() => f.remove(), 1000);

            }, 400);

        }, 1000);

    });
});

// 😂 NO button move
function move() {
    const maxWidth = window.innerWidth - 100;
    const maxHeight = window.innerHeight - 100;

    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    no.style.position = 'absolute';
    no.style.left = randomX + "px";
    no.style.top = randomY + "px";
}

no.addEventListener('mouseover', move);
