// script.js

// Theme Toggle Functionality
// DOM Elements
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

// Check for saved theme preference or respect OS preference
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)"); // Detect if the user prefers dark mode
const currentTheme = localStorage.getItem("theme"); // Get the current theme from localStorage

// Initial Theme Application
/*
Prioritizes user's saved preference (localStorage)
Falls back to OS preference if no saved setting exists
Applies dark theme by:
- Adding dark-theme class to <body>
- Swapping moon icon to sun icon
*/
if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
    document.body.classList.add("dark-theme");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
}

// Theme Toggle Event Listener
themeToggle.addEventListener("click", () => {
    // Toggles dark-theme class on click
    document.body.classList.toggle("dark-theme");

    // Updates icon based on current theme
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark"); // Save dark theme preference
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        localStorage.setItem("theme", "light"); // Save light theme preference
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
})









//year
document.getElementById("year").textContent = new Date().getFullYear();