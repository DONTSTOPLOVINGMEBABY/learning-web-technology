const hint = document.getElementById("hint")
const thehint = document.getElementById("thehint")

function activateHint(){
    hint.style.display = "block"
}

hint.addEventListener("click", () => {
    thehint.style.display = "block"
})

setTimeout( activateHint, 5000 )