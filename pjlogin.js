document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    // Implement user authentication and redirection to the main page
});
