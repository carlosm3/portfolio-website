const lightIcon = document.getElementById("light");
const darkIcon = document.getElementById("dark");

function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
    if (themeName === "theme-light") {
        darkIcon.style.display = "block";
        lightIcon.style.display = "none";
    } else {
        darkIcon.style.display = "none";
        lightIcon.style.display = "block";
    }
}

function toggleTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-light");
    } else {
        setTheme("theme-dark");
    }
}

(function () {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-dark");
    } else {
        setTheme("theme-light");
    }
})();

document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
