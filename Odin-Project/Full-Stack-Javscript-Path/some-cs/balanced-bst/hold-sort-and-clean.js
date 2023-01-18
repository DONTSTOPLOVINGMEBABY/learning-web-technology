function cleanDuplicates_and_sort(array){
    let copy = [array[0]] ; 
    for (let i = 0 ; i < array.length ; i++){
        let item = array[i] ; 
        let found = false ;
        for (let i = 0 ; i <= copy.length ; i++){
            if (item == copy[i]){
                found = true
            }
        }
        if (!found) {copy.push(item)} ; 
    }
    Merge_Sort(copy, 0, copy.length - 1) ; 
    return copy ; 
}

function Merge(a, p, q, r) {
    let nL = q - p + 1 ; 
    let nR = r - q ; 
    let l = [] ; 
    let right = [] ; 
    for (let i = 0 ; i <= (nL - 1); i++){
        l[i] = a[p + i] 
    }
    for (let j = 0 ; j <= (nR - 1); j++){
        right[j] = a[q + j + 1] 
    }
    let i = 0 ; 
    let j = 0 ;
    let k = p ; 
    while (i < nL && j < nR){
        if (l[i] <= right[j]){
            a[k] = l[i] 
            i += 1 ; 
        }
        else {
            a[k] = right[j] ; 
            j += 1 ; 
        }
        k += 1 ; 
    }
    while (i < nL){
        a[k] = l[i]
        i += 1 ; 
        k += 1 ; 
    }
    while (j < nR){
        a[k] = right[j] ; 
        j += 1 ; 
        k += 1 ; 
    }
}

function Merge_Sort(a, p, r){
    if (p >= r){return}
    let q = Math.floor((p + r) / 2) ; 
    Merge_Sort(a, p, q) ; 
    Merge_Sort(a, q + 1, r) ; 
    Merge(a, p, q, r) ; 
}

module.exports = {
    cleanDuplicates_and_sort, 
} ; 
