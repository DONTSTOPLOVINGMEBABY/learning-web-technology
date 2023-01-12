function first (list) {
    return list[0] ; 
}

function rest (list) {
    return list.splice(1, list.length) 
}

function fibs (number){
    let answer = [], counter = 0 ; 
    for (let i = 0 ; i < number ; i++){
        if (i == 0) {
            answer.push(0) ; 
            continue ; 
        }
        else if (i == 1){
            answer.push(1) ; 
            continue ; 
        }
        let previous = answer[i -2] ; 
        let current = answer[i - 1] ; 
        let next = previous + current ; 
        answer.push(next) ;  
    }
    return answer ; 
}


console.log(fibs(8))

let array = [] ; 

function fibsRec(number){
    if (number < 2){return 1}
    return fibsRec(number - 1) + fibsRec(number - 2) ; 
}

//not mine

function fib (n) {
    if (n < 2) {
        return [1];   
    }
    if (n < 3) {
        return [1, 1];
    }

    var a = fib(n - 1);
    a.push(a[n - 2] + a[n - 3]);
    return a;
};
