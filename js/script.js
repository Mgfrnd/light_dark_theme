alert("Atenção este site não está renderizado para responsivo! projetado apenas para teste darkmode")


const changeThemebtn = document.querySelector("#change-theme")

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Load light or dark mode
function  loadTheme() {
    const darkMode = localStorage.getItem("dark");

    if (darkMode) {
        toggleDarkMode();
    }
}

loadTheme();

changeThemebtn.addEventListener("change", function () {
    toggleDarkMode();

    // Save or remove dark mode
    localStorage.removeItem("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    }
});