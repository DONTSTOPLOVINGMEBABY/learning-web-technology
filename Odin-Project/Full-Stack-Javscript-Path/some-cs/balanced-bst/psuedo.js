const clean = require('./hold-sort-and-clean')


/* 
1. Set The middle element of the array as root.
2. Recursively do the same for the left half and right half.
3. Get the middle of the left half and make it the left child of the root created in step 1.
4. Get the middle of the right half and make it the right child of the root created in step 1.
5. Print the preorder of the tree.

------------------------------
Psuedo by IDESERVE YOUTUBE 

1. Initialize start = 0, end = length of array - 1 
2. mid = (start + end) / 2 
3. Create a tree node with mid as root (lets call it A)
4. Recursively do the following steps: 
5. Calculate mid of left subarray and make it root of left subtree of A 
6. Calculate mid of rigth subarray and make it root of right subtree of A 
*/ 

function Node (data) {
    this.data = data ; 
    this.left ; 
    this.right ; 
}

function Tree (array) {
    this.root = buildTree(array, 0, array.length - 1)
}

function buildTree (array, start, end){
    if (start > end){return null} ;
    let mid = Math.floor((start + end) / 2) ; 
    let root = new Node(array[mid]) ; 

    root.left = buildTree(array, start, mid - 1) ; 
    root.right = buildTree(array, mid + 1, end) ; 

    return root ; 
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

let test_array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
let use_this_array = clean.cleanDuplicates_and_sort(test_array) ; 
let this_thing = new Tree(use_this_array) ; 

prettyPrint(this_thing["root"])