document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let age = document.getElementById("age").value.trim();

    let valid = true;

    // Clear previous messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("mobileError").innerHTML = "";
    document.getElementById("ageError").innerHTML = "";

    // Name validation
    if (name == "") {
        document.getElementById("nameError").innerHTML =
            "Name is Required";
        valid = false;
    }
    else if (!/^[A-Za-z]+$/.test(name)) {
        document.getElementById("nameError").innerHTML =
            "Only alphabets allowed";
        valid = false;
    }

    // Email validation
    if (email == "") {
        document.getElementById("emailError").innerHTML =
            "Email is Required";
        valid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").innerHTML =
            "Enter valid email";
        valid = false;
    }

    // Mobile validation
    if (mobile == "") {
        document.getElementById("mobileError").innerHTML =
            "Mobile is Required";
        valid = false;
    }
    else if (!/^[0-9]{10}$/.test(mobile)) {
        document.getElementById("mobileError").innerHTML =
            "Mobile must be 10 digits";
        valid = false;
    }

    // Age validation
    if (age == "") {
        document.getElementById("ageError").innerHTML =
            "Age is Required";
        valid = false;
    }
    else if (!/^[0-9]+$/.test(age)) {
        document.getElementById("ageError").innerHTML =
            "Age must contain numbers only";
        valid = false;
    }
    else if (age < 18 || age > 60) {
        document.getElementById("ageError").innerHTML =
            "Age must be between 18 and 60";
        valid = false;
    }

    // If all validations are successful
    if (valid) {
        alert("Form Submitted Successfully!");
    }

});