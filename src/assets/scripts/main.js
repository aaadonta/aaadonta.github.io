// The script is loaded at the end of body, after the navigation is available.
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.createElement('div');
overlay.className = 'page-overlay';
document.body.appendChild(overlay);

// The home page has no mobile navigation or scrolling navbar.
if (navbar) {
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            navMenu.classList.toggle('active');
            navbar.classList.toggle('menu-open');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navbar.classList.remove('menu-open');
            overlay.classList.remove('active');
        });
    }

    // Only touch the DOM when crossing the existing 50px threshold.
    let scrolled = navbar.classList.contains('scrolled');
    function updateNavbar() {
        const next = window.scrollY > 50;
        if (next !== scrolled) {
            navbar.classList.toggle('scrolled', next);
            scrolled = next;
        }
    }
    window.addEventListener('scroll', updateNavbar, { passive: true });
    window.addEventListener('pageshow', updateNavbar);
    updateNavbar();
}
