const submit_button = document.getElementById("login-button") 
const password = document.getElementById("password-login-input") 
const confirm_password = document.getElementById("confirm-password-login-input")
const form = document.getElementById("sign-up-form")
const error_message = document.getElementById("wrong-password")

console.log(submit_button)
console.log(form)


function submitForm(e) {
    e.preventDefault()
    if (password.value !== confirm_password.value){
        error_message.style.display = "block"
    }
    else { 
        error_message.style.display = "none"
        if (form.reportValidity()){
            form.submit()
        }
    }
}