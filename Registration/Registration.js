document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

  
    alert(`Registration successful!\n\nUsername: ${username}\nEmail: ${email}`);
    document.getElementById('registerForm').reset();
  });