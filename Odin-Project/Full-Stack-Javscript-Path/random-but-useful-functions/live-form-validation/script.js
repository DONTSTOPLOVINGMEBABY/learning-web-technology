const email_input = document.getElementById("email") ; 
const country_input = document.getElementById("country") ; 
const zip_code_input = document.getElementById("zip-code") ; 
const password_input = document.getElementById("password") ; 
const confirm_password_input = document.getElementById("conf-password") ; 



function check_password () {
    let password = password_input.value ; 
    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
        password_input.style.backgroundColor = "#14B800" ; 
        password_input.style.opacity = ".75" ; 
        return true ; 
    }
    else {
        password_input.style.backgroundColor = "#FF0000" ; 
        password_input.style.opacity = ".75" ; 
        return false ;
    }
}

function check_confirm_password () {
    let password = password_input.value ; 
    let conf_password = confirm_password_input.value ; 

    if (password == conf_password) {
        confirm_password_input.style.backgroundColor = "#14B800" ; 
        confirm_password_input.style.opacity = ".75" ; 
        return true ; 
    }
    else {
        confirm_password_input.style.backgroundColor = "#FF0000" ; 
        confirm_password_input.style.opacity = ".75" ; 
        return false ; 
    }

}

function display_message () {
    return check_password() && check_confirm_password() ; 
}

document.getElementById("submit-this-thing").addEventListener('click', () => {
    if (!email_input.checkValidity() || !zip_code_input.checkValidity() || !password_input.checkValidity() || !confirm_password_input.checkValidity()){
        return ; 
    }
    else if (display_message()) {
        location.reload() ; 
    }
    else {
        alert ("Passwords dont match") ; 
    }
})