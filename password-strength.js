/* Show password when checkbox is clicked */
function show_password() {
    var password = document.getElementById("user-password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}