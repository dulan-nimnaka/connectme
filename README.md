# ConnectMe - Social Link Platform

A responsive social link sharing platform, built with HTML, CSS, and JavaScript.

## 🌟 Features
- **Responsive Design**: Works perfectly on all devices
- **Dark/Light Mode**: Toggleable theme with localStorage persistence
- **Google Analytics**: Track link clicks and user engagement
- **Animated UI**: Smooth hover effects and entrance animations
- **Easy Customization**: Change links and styles via simple config files

## 🛠️ Technologies Used
- **Frontend**: HTML5, CSS3 (Flexbox, Variables, Animations), JavaScript (DOM Manipulation, Event Handling)
- **Analytics**: Google Analytics 4 (GA4)
- **Hosting**: GitHub Pages

## 🚀 Getting Started

### Prerequisites
- GitHub account
- Google Analytics account (optional)

### Installation
1. Clone the repository: `git clone https://github.com/dulan-nimnaka/connectme.git`
2. Open `index.html` in browser

## 🌈 Customization Guide

### Personalization Guide

#### Update Profile Info
Edit directly in index.html:
  ```
  <header>
  <h1>Your Name</h1>
  <p class="tagline">Your Professional Tagline</p>
  </header>

  ```
#### Modify Links
##### HTML (Direct in index.html):
  ```
  <a href="YOUR_LINK" class="link-card" target="_blank">
  <div class="link-icon">
    <i class="fab fa-platform"></i> <!-- Change icon -->
  </div>
  <div class="link-content">
    <div class="link-title">Link Title</div>
    <div class="link-url">display.url</div>
  </div>
</a>
  ```

### Change Colors
Modify CSS variables in style.css:
  ```
  :root {
    --primary: #4e54c8;   /* Main brand color */
    --secondary: #ff7e5f; /* Accent color */
    --dark: #2c3e50;      /* Dark text */
    --light: #f9f9f9;     /* Light background */
  }
  ```
### Font Customization
Replace in style.css:
  ```
  body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  }
  ```

## 🤝 Contributing

1. Fork the project

2. Create your feature branch (git checkout -b feature/amazing-feature)

3. Commit changes (git commit -m 'Add some amazing feature')

4. Push to branch (git push origin feature/amazing-feature)

5. Open a Pull Request

## 🌟 Live Demo
Experience the platform: 👉 https://dulan-nimnaka.github.io/connectme/


## 🙏 Acknowledgments
- Font Awesome for icons
- Google Analytics for tracking
- GitHub Pages for hosting

## ✍️ Author
Dulan Nimnaka [ConnectMe](https://dulan-nimnaka.github.io/connectme/)
















