const hint = document.getElementById("hint")
const thehint = document.getElementById("thehint")
const form = document.getElementById("secret-form")
const secret = document.getElementById("secret-login")
const error_message = document.getElementById("wrong-secret")
let interval_id


function activateHint(){
    hint.style.display = "block"
}

function fancyColors () {
    let color1 = Math.floor(Math.random() * 256), 
    color2 = Math.floor(Math.random() * 256), 
    color3 = Math.floor(Math.random() * 256) 
    error_message.style.color = `rgb(${color1}, ${color2}, ${color3})`
}

function stopColors () {
    clearInterval(interval_id)
    error_message.style.display = "none"
}


function submitForm (e) {
    e.preventDefault()
    let test_secret = secret.value.replace(/[\s"']/g, '').toUpperCase()
    if (test_secret !== "CAMPROCKISAGREATMOVIE"){
        error_message.style.display = "block"
        fancyColors() 
        interval_id = setInterval(fancyColors, 100)
        setTimeout( () => stopColors(), 5000)
    }
    else {
        form.submit()
    }
}


hint.addEventListener("click", () => {
    thehint.style.display = "block"
})

setTimeout( activateHint, 500 )


