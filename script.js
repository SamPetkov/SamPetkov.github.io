document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    const body = document.body;

    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        // Default is light-mode, as set in HTML
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
            localStorage.setItem('theme', 'light');
        }
    });
});
