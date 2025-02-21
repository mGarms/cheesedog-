// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === 'test' && password === 'password') {
        errorMessage.textContent = '';
        alert('Login successful!');
        //window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});