function capitalize (string) {
    let first = string.slice(0, 1) ; 
    first = first.toUpperCase() ; 
    let second = string.slice(1, string.length) ; 
    first += second ; 
    return first ; 
}

function reverseString (string) {
    let temp = '' ; 
    for (let i = string.length - 1 ; i >= 0 ; i--){
        temp += string[i]
    }
    return temp ; 
}

function Calculator () {


    this.add = function (x, y){return x + y} ; 
    this.multiply = function (x, y) { return x * y }; 
    this.subtract = function (x, y) {return x - y } ; 
    this.divide = function ( x, y ) { return x / y } ; 
}

function caesar_cipher (string, shift_factor) {
    let return_string = '' ; 
    for (let i = 0 ; i < string.length ; i++){
        return_string += String.fromCharCode(string.charCodeAt(i) + shift_factor) ;
    }
    return return_string 
}

function analyze_array (array){
    let min = Number.MAX_VALUE, max = -Number.MAX_VALUE ; 
    let sum = 0 ; 
    for (let i = 0 ; i < array.length ; i++){
        if (array[i] < min){min = array[i]} ; 
        if (array[i] > max){max = array[i]} ; 
        sum += array[i] ; 
    }
    let average = sum / array.length ; 
    return {
        average: average, 
        min: min, 
        max: max, 
        length: array.length, 
    }
}


const calc = new Calculator() ; 

export { capitalize, reverseString, Calculator, calc, caesar_cipher, analyze_array }