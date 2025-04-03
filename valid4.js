// Form Validation (Registration Page)
function validateForm() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    // Optionally, add more validations for email or name here
    return true; // Proceed with form submission if all validations pass
}
