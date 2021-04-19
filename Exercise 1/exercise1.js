var createtextbox = document.createElement("INPUT");
createtextbox.setAttribute("type", "text");

function validate(form) {
    var pass1 = form.pass.value;
    var pass2 = form.passValid.value;
    if (pass1 == pass2) {
        if (pass1.length >= 8 ) {
            alert("Password validated!");
        } else {
            alert("Error: Password must be at least 8 characters");
        }
    } else {
        alert("Error: Passwords do not match");
    }
}