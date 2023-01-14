#include <stdio.h> 

void merge(int *ptr, int p, int q, int r){
    int nL = q - p + 1 ; 
    int nR = r - q ; 
    int left[nL] ; 
    int right[nR] ; 
    for (int i = 0 ; i <= (nL -1) ; i++){
        left[i] = *(ptr + p + i); 
    }
    for (int j = 0 ; j <= (nR - 1) ; j++){
        right[j] = *(ptr + q + j + 1) ; 
    }
    int i = 0 , j = 0 , k = p ; 
    while (i < nL && j < nR){
        if (left[i] <= right[j]){
            *(ptr + k) = left[i] ; 
            i++; 
        }
        else {
            *(ptr + k) = right[j] ; 
            j++ ; 
        }
        k++ ; 
    }
    while (i < nL){
        *(ptr + k) = left[i] ; 
        i++ ; 
        k++ ; 
    }
    while (j < nR){
        *(ptr + k) = right[j] ; 
        j++ ; 
        k++ ; 
    }
}

int merge_sort(int *ptr, int p, int r){
    if (p >= r){return 0 ;}  
    int q = (p + r) / 2 ; 
    merge_sort(ptr, p, q) ; 
    merge_sort(ptr, q + 1, r) ; 
    merge(ptr, p, q, r) ; 
    return 0 ; 
}

int main () {
    int first_array[] = {233, 5, 525, 6446, -2344, 21, 34, 5445} ;
    int second_array[] = {1000, 22, 11, 55, 223, 55, 88, 66432, 234, 3443, -1} ;
    int *ptr = first_array ; 
    int *second_ptr = second_array ; 

    puts("first_array before sort: ") ; 
    for (int i = 0 ; i < sizeof(first_array) / sizeof(int) ; i++) {
        printf("%d ",  *(ptr + i));
    }
    puts("\nsecond_array before sort: ") ; 
    for (int i = 0 ; i < sizeof(second_array) / sizeof(int) ; i++) {
        printf("%d ",  *(second_ptr + i));
    }
    puts("\n\n") ; 

    merge_sort(ptr, 0, (sizeof(first_array) / sizeof(int)) - 1 ) ; 
    merge_sort(second_ptr, 0, (sizeof(second_array) / sizeof(int)) - 1) ; 

    puts("first_array after sort: ") ; 
    for (int i = 0 ; i < sizeof(first_array) / sizeof(int) ; i++) {
        printf("%d ",  *(ptr + i));
    }
    puts("\nsecond_array after sort: ") ; 
    for (int i = 0 ; i < sizeof(second_array) / sizeof(int) ; i++){
        printf("%d ", *(second_ptr + i)) ; 
    }
    puts("\n") ; 

    return 0; 
}
    


/*   MERGE SORT PSUEDO-CODE

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