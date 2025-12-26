export const toggleNavbarBackground = () => {
    const navbar = document.getElementById('navbar');

    if (window.scrollY === 0 && navbar && navbar.classList.contains("bg-dark")) {
        // Don't remove bg-dark if data-keep-dark attribute is set
        if (!navbar.hasAttribute('data-keep-dark')) {
            navbar
                .classList
                .remove('bg-dark');
        }
    }
};