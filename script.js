
// Update date
const d = new Date();
const fmt = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
});
document.getElementById("today").textContent = fmt.format(d);

// Theme toggle: swap root palette quickly
const btn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");
let darkMode = true;

btn.addEventListener("click", () => {
    // Rotate + fade out
    themeIcon.style.transform = "rotate(180deg)";
    themeIcon.style.opacity = "0";

    setTimeout(() => {
        // Swap icon after half animation
        themeIcon.textContent = darkMode ? "🌞" : "🌙";

        // Reset animation
        themeIcon.style.transform = "rotate(0deg)";
        themeIcon.style.opacity = "1";

        // Toggle theme
        document.documentElement.style.filter = darkMode
            ? "invert(1) hue-rotate(180deg)"
            : "";
        darkMode = !darkMode;
    }, 250); // Wait for fade before swapping
});
