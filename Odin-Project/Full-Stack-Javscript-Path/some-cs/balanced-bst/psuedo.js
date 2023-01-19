const clean = require('./hold-sort-and-clean')
const queue = require('./hold-queue') ; 

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
    this.left = null; 
    this.right = null; 
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

function find(root, key) {
    if (!root){return false}
    else if (root.data == key){return root} 
    else if (root.data < key){return find(root.right, key)}  
    else { return find(root.left, key) } 
}

function insert(root, key){
    if (root.data < key && root.right == null) {
        let new_node = new Node(key) ; 
        root.right = new_node ;
        return 
    }
    if (root.data > key && root.left == null){
        let new_node = new Node(key) ; 
        root.left = new_node ; 
        return ; 
    }
    if (root.data < key) {return insert(root.right, key)}
    if (root.data > key) {return insert(root.left, key)} 
}

function delete_routine(root, key){
    if (!find(root, key)){return false}
    if (root["data"] == key){
        if (root.right != null && root.right.left == null && root.right.right == null){
            let data = root.right.data ; 
            set_root(root, data) ; 
            root.right = null ; 
            return ;
        }
        if (root.right == null){
            if (root.left.right == null)
            {
                let data = root.left.data ; ; 
                set_root(root, data) ; 
                let left = root.left.left ; 
                root.left = left ; 
                return ; 
            }
            if (root.left.right){
                let data = root.left.right.data ; 
                let hold_left = root.left ; 
                set_root(root, data) ; 
                root.left.right = null ; 
                return ; 
            }
        }
        else {
            let old_left = root.left ; 
            let left = root.right.left ; 
            let right = root.right ; 
            let data = right.data; 
            set_root(root, data); 
            root.left = left ; 
            root.left.left = old_left ; 
            root.right = root.right.right ; 
            // Add so it works with all structures ; 
            return ; 
        }
    } 
    function delete_node(root, key, old=null){
        if (root.data < key){delete_node(root.right, key, root)} 
        if (root.data > key){delete_node(root.left, key, root)} 
        if (root.data == key){
            //leaf nodes
            if (root.left == null && root.right == null) {
                if (root.data > old.data){old.right = null; return}
                if (root.data < old.data){old.left = null; return}
            }
            //node with only one child
            if (root.left == null || root.right == null){
                if (old.data > root.data && root.right == null){old.left = root.left ; return}
                if (old.data > root.data && root.left == null){old.left = root.right ; return}
                if (old.data < root.data && root.right == null){old.right = root.left ; return}
                if (old.data < root.data && root.left == null){old.right = root.right ; return}
            }

            //node with two children who are leaf nodes 
            if (root.left.left == null && root.right.right == null){
                if (root.data < old.data){
                    old.left = root.right ; 
                    root.right.left = root.left ; 
                }
                else if (root.data > old.data){
                    old.right = root.left ; 
                    root.left.right = root.right ; 
                }
                return 
            } 
            // node with two children who are not leaf nodes
            if (root.left != null && root.right != null){
                let replace_node = root.right ; 
                let hold_root_left = root.left ; 
                let hold_replace_left = replace_node.left ; 
                if (root.data > old.data){
                    if (!root.right.left) {
                        old.right = root.right ; 
                        old.right.left = root.left ;
                        return ;  
                    }
                    old.right = replace_node ; 
                    replace_node.left = hold_replace_left ;
                    replace_node.left.left = hold_root_left ; 
                    return ; 
                }
                else if (root.data < old.data){
                    let hold_old_left = root.left ; 
                    old.left = root.right ; 
                    if (root.right.left){
                        root.left = root.right.left ; 
                        root.left.left = hold_old_left ; 
                    }  
                    else {
                        old.left.left = hold_old_left ; 
                    }
                    return 
                }
            }
        }
    }
    delete_node(root, key)
}

function levelOrder (root, cb = null) {
    if (root == null){return}
    let q = new queue.Queue ; 
    q.Enqueue(root) ; 
    q.Enqueue(null) ; 
    let print_string = "" ; 

    while (q.len() > 1) {
        let curr = q.Dequeue() ; 

        if (curr == null){ q.Enqueue(null) }

        else {
            if (curr.left){q.Enqueue(curr.left)}
            
            if (curr.right){q.Enqueue(curr.right)}

            print_string += `${curr.data} `
        }
    }
    console.log(print_string) ; 
    if (cb){cb()}
}



// let test_array = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1048, 2048, 4096, 8192, 16384] 
let test_array = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1048, 2048, 4096, 8192, 16384]
let use_this_array = clean.cleanDuplicates_and_sort(test_array) ; 
let this_thing = new Tree(use_this_array) ; 
const root = this_thing["root"] ; 

function set_root(array, value){
    array.data = value ; 
}

levelOrder(root)





































function try_delete () {
    clean.prettyPrint(root) ; 
    console.log("\n\n")
    delete_routine(root, 128) ;
    clean.prettyPrint(root)
    console.log("\n\n")
    delete_routine(root, 2048) ; 
    clean.prettyPrint(root)
    console.log("\n\n")
    delete_routine(root, 8192) ; 
    insert(root, 4097) ; 
    clean.prettyPrint(root)
    console.log("\n\n")
    delete_routine(root, 16384) ; 
    clean.prettyPrint(root)
    console.log("\n\n")
    delete_routine(root, 4097) ; 
    clean.prettyPrint(root)
    console.log("\n\n")
    delete_routine(root, 512) ; 
    clean.prettyPrint(root)
    console.log("\n\n")
    delete_routine(root, 8) ; 
    clean.prettyPrint(root)
    console.log("\n\n")
    delete_routine(root, 4096) ; 
    clean.prettyPrint(root)
    console.log("\n\n")
    delete_routine(root, 64) ; 
    clean.prettyPrint(root)
    console.log("\n\n")
}