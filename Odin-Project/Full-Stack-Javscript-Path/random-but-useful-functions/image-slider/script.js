const pictures = document.getElementsByClassName("picture") ; 
const left = document.getElementById("left") ; 
const right = document.getElementById("right") ; 
const list_pictures = Array.from(pictures)

console.log(list_pictures) ; 

let counter = 0 
let old_counter ; 

function change_photo () {
    list_pictures[old_counter].style.display = "none" ; 
    list_pictures[counter].style.display = "block" ; 
}



right.addEventListener('click', () => {
    old_counter = counter ; 
    counter = ((counter + 1) % 4 ) ; 
    console.log(old_counter, counter)
    change_photo() ; 
})

left.addEventListener('click', () => {
    old_counter = counter ; 
    if (counter != 0) {counter = ((counter - 1) % 4) ;} 
    else {counter = 3}
    change_photo() ; 
})


setInterval( () => {
    old_counter = counter ; 
    if (counter != 0) {counter = ((counter - 1) % 4) ;} 
    else {counter = 3}
    change_photo() ;
}, "5000")