document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll("#animated-text span");
    let holdTimer; 

    function setDriftAnimation() {
        words.forEach((word) => {
            const x = (Math.random() - 0.5) * 100 + "px";
            const y = (Math.random() - 0.5) * 50 + "px";
            word.style.setProperty("--x", x);
            word.style.setProperty("--y", y);
            word.style.animation = `drift ${8 + Math.random() * 5}s ease-in-out infinite alternate`;
        });
    }

    function resetToParagraph() {
        words.forEach((word) => {
            word.style.animation = "none";
            word.style.transform = "translate(0, 0)";
        });

        setTimeout(() => {
            setDriftAnimation();
        }, 2000);
    }

    setDriftAnimation(); 

    // for desktop
    document.addEventListener("keydown", (event) => {
        if (event.ctrlKey) {
            resetToParagraph();
        }
    });

    // for mobile
    document.addEventListener("touchstart", (event) => {
        holdTimer = setTimeout(() => {
            resetToParagraph();
        }, 500); 
    });

    document.addEventListener("touchend", () => clearTimeout(holdTimer));
    document.addEventListener("touchcancel", () => clearTimeout(holdTimer));
});
