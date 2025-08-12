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
});

// Scroll Animation Functionality
// DOM Element
const linkCards = document.querySelectorAll(".link-card");

// Add scroll animation to each link card
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.Style.animation = "slideUp 0.5s ease-out forwards"; // Apply slide-up animation
        }
    });
}, {threshold: 0.1}); // Trigger when 10% of the element is visible

linkCards.forEach(card => {
    observer.observe(card); // Observe each link card for intersection changes
})

// Analytics Script
// Google Tag Manager
function setupLinkAnalytics() {
    try {
        document.querySelectorAll(".link-card").forEach(link => {
            link.addEventListener("click", function() {
                const linkTitle = this.querySelector(".link-title").textContent; // Get the link title
                const linkUrl = this.href // Get the link URL

                // Send click event to Google Analytics
                gtag("event", "link_click", {
                    "event_category": "Social Links",
                    "event_label": linkTitle,
                    "link_url": linkUrl,
                    "transport_type": "beacon" /// Ensures tracking even if page unloads
                });

                // For external links, delay navigation to ensure tracking
                if (!linkUrl.includes(window.location.hostname)) {
                    e.preventDefault(); // Prevent default navigation
                    setTimeout(() => {
                        window.location.href = linkUrl; // Navigate to the link URL after a short delay
                    }, 200); // 200ms delay
                }

            });
        });
    } catch (error) {
        console.error("Analytics error: ", error);
    }
}


// Update the footer year dynamically
document.getElementById("year").textContent = new Date().getFullYear();