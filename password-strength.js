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

let container = document.querySelector('.password-security');
document.addEventListener("keyup", function(e) {
    let password = document.getElementById("user-password").value;

    let security = Security(password)
    if (security <= 2) {
        container.classList.add('weak');
        container.classList.remove('medium');
        container.classList.remove('strong');
    } else if (security >= 2 && security <= 4) {
        container.classList.remove('weak');
        container.classList.add('medium');
        container.classList.remove('strong');
    } else {
        container.classList.remove('weak');
        container.classList.remove('medium');
        container.classList.add('strong');
    }
})