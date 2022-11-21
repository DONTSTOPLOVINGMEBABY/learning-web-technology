const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");
const submit_button = document.getElementById("submitbutton");

submit_button.addEventListener('click', function (e) {
    console.log(password.value, confirm_password.value);
    const equal = confirm_password.value == password.value;
    
    if (!equal) { 
    confirm_password.setCustomValidity("Passwords must match")
    }
    else{
    confirm_password.setCustomValidity("");
    }
})