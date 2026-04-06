// script.js
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const editor = document.getElementById('editor');

// Temporärer Demo-Login (später ersetzt durch Netlify/GitHub Auth)
loginBtn.addEventListener('click', () => {
    // Hier würde später Netlify CMS Login erscheinen
    loginBtn.style.display = 'none';
    editor.style.display = 'block';
    logoutBtn.style.display = 'block';
});

// Logout Button
logoutBtn.addEventListener('click', () => {
    editor.style.display = 'none';
    loginBtn.style.display = 'block';
    logoutBtn.style.display = 'none';
});