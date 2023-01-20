function first (list) {
    return list[0] ; 
}

function rest (list) {
    return list.splice(1, list.length) 
}

function recursive_sum(n){
    if (n == 1){
        return 1 ; 
    }
    return n + recursive_sum(n -1) ; 
}

function power(base, exponent){
    if (exponent == 1) {return base}
    return base * power(base, exponent-1) ; 
}

function factorial(number){
    if (number == 1) {return 1} 
    return number * factorial(number -1) 
}

function all(array, cb){
    if (array.length == 0){return true}
    if (cb(first(array))){
        return all(rest(array), cb)
    }
    else {
        return false
    }
}

function sumArray(array) {
    if (array.length == 0) {return 0}
    return first(array) + sumArray(rest(array)) ; 
}

function search_nested_object(object, value){
    for (let key in object){
        if (key == value){return true}
    }

}


let nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}


function peel_add(array, sum) {
    if (array.length == 0){return sum}
    if ( Array.isArray(first(array)) ){
        return peel_add(rest(array), peel_add(first(array), sum))
    }
    if (!isNaN(first(array))){
        return peel_add(rest(array), sum + first(array)) 
    }
    return peel_add(rest(array), sum)   // Catches for all other types besides numbers
}


function peel_square(array, sum){
    if (array.length == 0){return sum}
    if ( Array.isArray(first(array)) ){return peel_square(rest(array), peel_square(first(array), sum))}
    if (!isNaN(first(array))){ return peel_square(rest(array), sum + (first(array) * first(array)))}
    return peel_square(array, sum) 
}


function repitive_array(number, amount, count, array){
    if (count == amount){return array}
    if (count != amount){array.push(number)}
    return repitive_array(number, amount, count + 1, array)
}

console.log(repitive_array(4, 3, 0, [])) 



console.log(peel_square([1,2,3], 0))
console.log(peel_square([[1,2],3], 0))
console.log(peel_square([[[[[[[[[1]]]]]]]]], 0))
console.log(peel_square([10,[[10],10],[10]], 0))


let seven = peel_add([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]], 0); // 7

console.log(seven)

let hasIt = search_nested_object(nestedObject, 44); // true

console.log(first([[5], 3]))
console.log(rest([[5], 3]))

let allAreLessThanSeven = all([1,2,9], function(num){
    return num < 7;
});

console.log(allAreLessThanSeven); // false

console.log(recursive_sum(3)) 
console.log(power(2, 4)) ; 
console.log(factorial(5)) ; 
console.log(sumArray([1, 2, 3, 10]))