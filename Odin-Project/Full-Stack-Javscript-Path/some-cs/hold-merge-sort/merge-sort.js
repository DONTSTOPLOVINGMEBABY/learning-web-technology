/* 
    Psuedo Code from David Malan

    on input of n elements:
        if n < 2
            return 
        else
            sort left half of elements
            sort right half of elements
            merge sorted values

    Psuedo Code from Abdul Bari

    A <-- Array
    p <-- Starting indicy of A (0 or 1, depending on language)
    r <-- Final Indcy of A (n - 1)
    q <-- Midpoint between p and r ( (p + r) / 2 )


    Merge(A, p, q, r):
        nL = q - p + 1  // Length of p --> q assuming length function returns 1 higher than last index
        nR = r - q     // Length of q --> r 
        let L[0:nL -1] and R[0:nr -1] : Initialize two new arrays, both big enough to fit nL and nR items. L = Left, R = Right
        for i = 0 to nL - 1 : 
            L[i] = A[p + i]         // copy A[p:q] into L[0:nL-1]
        for j = 0 to nR - 1 :   
            R[j] = A[ q + j + 1 ]   // copy A[q+1: r] into R[0:nR - 1]
        i = 0           // i indexes the smallest remaining element in L 
        j = 0           // j indexes the smallest remaining element in R
        k = p           // k indexes the location to A to fill
        // As long as each of the arrays L and R contains an unmerged element
        // copy the smallest unmerged element back into A[p:r] 
        while i < nL and j < nR :
            if L[i] < R[j]:
                A[k] = L[i] 
                i = i + i 
            else A[k] = R[j]
                j = j + 1 
            k = k + 1 
        // Having gone through one of L and R entirely, copy the remainder
        // of the other to the end of A[p:r] 
        while i < nL : 
            A[k] = L[i] 
            i = i + 1 
            k = k + 1 
        while j < nR
            A[k] = R[j]
            j = j + 1 
            k = k + 1 

*/ 


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


let first_array = [1, 45, 55, 66, 3, 22, 44, 55] ; 
let odd_array = second_array = [1000, 22, 11, 55, 223, 55, 88, 66432, 234, 3443, -1] ; 
console.log("first_array before merge_sort:", first_array) ; 
console.log("second_array before merge_sort:", second_array) ; 
Merge_Sort(first_array, 0, first_array.length - 1) ; 
Merge_Sort(odd_array, 0, odd_array.length - 1) ; 
console.log("first_array after merge_sort:", first_array) ; 
console.log("second_array after merge_sort:", second_array) ; 