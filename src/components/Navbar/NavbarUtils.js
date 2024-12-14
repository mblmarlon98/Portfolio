export const toggleNavbarBackground = () => {
    const navbar = document.getElementById('navbar');

    if (window.scrollY === 0 && navbar && navbar.classList.contains("bg-dark")) {
        navbar
            .classList
            .remove('bg-dark');
    }
};