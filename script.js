        // Simple animation trigger on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            fadeElements.forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                fadeObserver.observe(el);
            });
            
            // Smooth scrolling for navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });

        // Theme switcher functionality
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        // Check for saved user preference, if any
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            body.classList.add(currentTheme);
            if (currentTheme === 'dark-theme') {
                themeToggle.checked = true;
            }
        }

        // Listen for toggle changes
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark-theme');
            } else {
                body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light-theme');
            }
        });

        




       // Mobile menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function() {
    // Toggle the menu visibility
    navLinks.classList.toggle('active');
    
    // Change the icon
    const icon = this.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        document.querySelector('.menu-toggle i').classList.remove('fa-times');
        document.querySelector('.menu-toggle i').classList.add('fa-bars');
    });
});