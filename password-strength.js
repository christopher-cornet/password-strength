/* Show password when checkbox is clicked */
function show_password() {
    var password = document.getElementById("user-password");
    if (password.type === "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
    if (password.value.length <= 10) {
        console.log("pas fou") 
    }
}

/* Level of security of the password */
function security() {
    let i = 0;
    let text = document.getElementsByClassName("security-level")
    if (password.length <= 10) {
        text.textContent = "Mauvais";
    }
}

var password = document.getElementById("user-password");
if (password.value.length > 2) {
    console.log("pas fou") 
}