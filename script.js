const toogleTheme = document.getElementById("toogle-theme");
const html = document.getElementById("html");

toogleTheme.addEventListener("change", toggleThemeHandler);

function toggleThemeHandler() {
    if (toogleTheme.checked) {
        html.dataset.theme = "dark";
    } else {
        html.dataset.theme = "light";
    }
}
