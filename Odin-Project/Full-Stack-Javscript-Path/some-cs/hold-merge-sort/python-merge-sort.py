'''

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

A <-- Array
p <-- Starting indicy of A (0 or 1, depending on language)
r <-- Final Indcy of A (n - 1)
q <-- Midpoint between p and r ( (p + r) / 2 )

'''



def merge(array, p, q, r):
    nL = q - p + 1 
    nR = r - q  
    left = [None] * nL
    right = [None] * nR
    for i in range(nL):
        left[i] = array[p + i]
    for j in range(nR):
        right[j] = array[q + j + 1]
    i = 0 
    j = 0
    k = p 
    while (i < nL and j < nR):
        if (left[i] <= right[j]):
            array[k] = left[i]
            i += 1 
        else:
            array[k] = right[j]
            j += 1 
        k += 1 
    while i < nL :
        array[k] = left[i] 
        i += 1 
        k += 1 
    while j < nR:
        array[k] = right[j]
        j += 1 
        k += 1 


def merge_sort(a, p, r):
    if (p >= r):
        return
    q = (p + r) // 2 
    merge_sort(a, p, q) 
    merge_sort(a, q + 1, r) 
    merge(a, p, q, r)


first_array = [1, 45, 55, 66, 3, 22, 44, 55] 
second_array = [1000, 22, 11, 55, 223, 55, 88, 66432, 234, 3443, -1]
print("first_array before merge_sort:", first_array)
print("second_array before merge_sort:", second_array) 
merge_sort(first_array, 0, len(first_array) - 1)
merge_sort(second_array, 0, len(second_array) - 1)  
print("first_array after merge_sort", first_array) 
print("second_array after merge_sort", second_array)  