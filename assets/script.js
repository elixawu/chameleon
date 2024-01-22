
const theme = localStorage.getItem('theme');

theme && document.body.classList.add(theme);

function toggleTheme() {
    document.body.classList.toggle('dark-mode');


    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
}

themeBtn = document.querySelector('.theme-toggle');
themeBtn.onclick = toggleTheme;
