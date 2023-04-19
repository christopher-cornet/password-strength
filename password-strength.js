/* Show password when checkbox is clicked */
function show_password() {
    var password = document.getElementById("user-password");
    let i = 0;
    if (password.type === "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}

/* Level of security of the password */
function Security() {
    var password = document.getElementById("user-password").value;
    let i = 0;
    /*let text = document.getElementsByClassName("security-level")*/
    if (password.length > 8) {
        i++;
    }
    if (password.length >= 10) {
        i++;
    }
    if (/[A-Z]/.test(password)) {
        i++;
    }
    if (/[0-9]/.test(password)) {
        i++;
    }
    if (/[A-Za-z0-8]/.test(password)) {
        i++;
    }
    return i;
}

let password_security = document.querySelector('.password-security');
let security_level = document.querySelector('.security-level');
let h1 = document.querySelector('h1');

document.addEventListener("keyup", function(e) {
    let password = document.getElementById("user-password").value;
    let security = Security(password)

    if (security <= 2) {
        password_security.classList.add('weak');
        password_security.classList.remove('medium');
        password_security.classList.remove('strong');
        security_level.classList.add('weak-pwd')
        security_level.classList.remove('medium-pwd')
        security_level.classList.remove('strong-pwd')
        h1.classList.add('h1-weak-pwd')
        h1.classList.remove('h1-medium-pwd')
        h1.classList.remove('h1-strong-pwd')
    } else if (security >= 2 && security <= 4) {
        password_security.classList.remove('weak');
        password_security.classList.add('medium');
        password_security.classList.remove('strong');
        security_level.classList.remove('weak-pwd')
        security_level.classList.add('medium-pwd')
        security_level.classList.remove('strong-pwd')
        h1.classList.remove('h1-weak-pwd')
        h1.classList.add('h1-medium-pwd')
        h1.classList.remove('h1-strong-pwd')
    } else {
        password_security.classList.remove('weak');
        password_security.classList.remove('medium');
        password_security.classList.add('strong');
        security_level.classList.remove('weak-pwd')
        security_level.classList.remove('medium-pwd')
        security_level.classList.add('strong-pwd')
        h1.classList.remove('h1-weak-pwd')
        h1.classList.remove('h1-medium-pwd')
        h1.classList.add('h1-strong-pwd')
    }
})