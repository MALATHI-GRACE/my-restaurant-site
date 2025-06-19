document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.querySelector('[data-theme-btn]');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.body.classList.add(`${currentTheme}-theme`);
    themeSwitch.setAttribute('aria-pressed', currentTheme === 'dark');

    themeSwitch.addEventListener('click', () => {
        const isPressed = themeSwitch.getAttribute('aria-pressed') === 'true';
        themeSwitch.setAttribute('aria-pressed', !isPressed);
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');

        const newTheme = isPressed ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
    });
});
