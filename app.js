const inputEmail = document.querySelector(".email");
const submitForm = document.getElementById("form");

submitForm.addEventListener("submit", function(e) {
    e.preventDefault();
    if (getValue()) {
        this.submitForm
        window.location.href = "success-page.html";
    }
})

function getValue() {
    var getEmail = document.getElementById("email").value;
    var errorMessage = document.getElementById("errorMessage");
    var isValid = true;

    if (getEmail != "") {
        errorMessage.textContent = "";
        inputEmail.classList.remove("errorInput");

        if (validateEmail(getEmail)) {
            errorMessage.textContent = "";
            sessionStorage.setItem('email', getEmail);
        } else {
            inputEmail.classList.add("errorInput");
            errorMessage.textContent = "Valid email required";
            isValid = false;
        }

    } 
    else {
        errorMessage.textContent = "Email is required";
        inputEmail.classList.add("errorInput");
        isValid = false;
    }
    return isValid;
}

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}