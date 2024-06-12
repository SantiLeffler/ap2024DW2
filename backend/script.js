function showRegisterForm() {
    hideAllForms();
    document.getElementById('registerForm').style.display = 'block';
}

function showLoginForm() {
    hideAllForms();
    document.getElementById('loginForm').style.display = 'block';
}

function showUpdatePasswordForm() {
    hideAllForms();
    document.getElementById('updatePasswordForm').style.display = 'block';
}

function hideAllForms() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('updatePasswordForm').style.display = 'none';
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    localStorage.setItem(username, password);
    alert('Usuario registrado exitosamente');
    hideAllForms();
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
        alert('Inicio de sesión exitoso');
    } else {
        alert('Usuario o contraseña incorrecta');
    }
    hideAllForms();
}

function updatePassword() {
    const username = document.getElementById('updateUsername').value;
    const oldPassword = document.getElementById('oldPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === oldPassword) {
        localStorage.setItem(username, newPassword);
        alert('Contraseña actualizada exitosamente');
    } else {
        alert('Usuario o contraseña antigua incorrecta');
    }
    hideAllForms();
}
