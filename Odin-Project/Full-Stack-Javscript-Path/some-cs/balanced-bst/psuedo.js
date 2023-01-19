const clean = require('./hold-sort-and-clean')
const queue = require('./hold-queue-stack') ; 

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

function set_root(array, value){array.data = value} 

function print_array(array){
    let string = '' ;
    for (let i = 0 ; i < array.length ; i++){ 
        string += `${array[i]} `
    }
    return string ; 
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
    let print_string = "" ; 
    let return_array = [ [] , [] ] ;   // Make an array to return two different arrays of data
    let total = 0 ; 

    while (q.len() >= 1) {
        let curr = q.Dequeue() ; 
        if (curr == null){ q.Enqueue(null) }

        else {
            if (curr[0].left != null){q.Enqueue(curr[0].left)}
            
            if (curr[0].right != null){q.Enqueue(curr[0].right)}

            print_string += `${curr[0].data} `
            return_array[0].push(curr[0].data)     // Store node data in first array 
            return_array[1].push(curr[0])          // Store nodes in second array
            total += 1 ;
        }

    }
    return_array.push(total)
    if (cb){cb()}
    else {return return_array}
}

function in_order (root, cb = null) {
    let array = levelOrder(root) ;
    if (cb){ 
        for (let i = 0 ; i < array[1].length ; i++){
            cb(array[1][i]) ; 
        }
    }
    return "No call back given" ; 
}


function pre_order (root, cb = null){
    if (root == null) {return} 
    let stack = new queue.Stack() ; 
    let return_array = [ [] , [] ]
 
    let curr = root ; 

    while (stack.stack_length() > 0 || curr != null){

        while (curr != null){
            return_array[0].push(curr.data) ; 
            return_array[1].push(curr) ; 
            
            if (curr.right != null){stack.the_stack.push(curr.right)}
            
            curr = curr.left ; 
    
        }

        if (stack.stack_length() > 0){
            curr = stack.the_stack.pop() ; 
        } 
    }
    if (cb){
        for (let i = 0 ; i < return_array[1].length ; i++){
            cb(return_array[1][i])
        }
    }
    return return_array ; 
}

function post_order (root, cb=null){
    if (root == null){return}
    let stack = new queue.Stack() ;
    let return_array = [ [], [] ] 

    let curr = root ; 

    while(stack.stack_length() > 0 || curr != null){

        while (curr != null){
            return_array[0].push(curr.data) ;  
            return_array[1].push(curr) ; 

            if (curr.left != null){stack.the_stack.push(curr.left)} 

            curr = curr.right ; 
        }

        if (stack.stack_length() > 0) {curr = stack.the_stack.pop()} 
    }
    if (cb){
        for (let i = 0 ; i < return_array[1].length ; i++){
            cb(return_array[1][i])
        }
    }
    return return_array ; 

}

function height (node){
    if (node == null) {return 0}
    else {
        let left_depth = height(node.left) ; 
        let right_depth = height(node.right) ;

        if (left_depth > right_depth){ return left_depth + 1 }
        else { return right_depth + 1 }
    }
}

function isBalanced (root) {
    let left, right ; 
    if (root.left){  left = levelOrder(root.left)[2] }  
    if (root.right){ right = levelOrder(root.right)[2] }      
    if (left == right || right == left - 1 || left == right - 1){return true}
    else {return false}
}

function rebalance(root){
    let new_array = levelOrder(root)[0] ;
    new_array = clean.cleanDuplicates_and_sort(new_array) ; 
    let new_tree = buildTree(new_array, 0, new_array.length - 1) ; 
    let new_nodes = levelOrder(new_tree)[1]
    root.data = new_tree.data ;
    root.left = new_tree.left ; 
    root.right = new_tree.right ;  
    for (let i = 0 ; i < new_nodes.length ; i++){
        let element = find(root, new_nodes[i].data) ;
        element.left = new_nodes[i].left ; 
        element.right = new_nodes[i].right ;  
    }
}


// Initialize array with 12 random numbers 0 - 20000 
// Remove Duplicates (if any) and Sort List from Least
// to Greatest using Merge-Sort
let array = [] 
for (let i = 0 ; i < 12 ; i++){
    array.push(Math.round(Math.random() * 20001, 0)) ; 
}
array = clean.cleanDuplicates_and_sort(array) ; 


// Initialize and Print BST 
const binary_search_tree = new Tree(array) ; 
const root = binary_search_tree["root"] ; 
console.log("\n") ; 
clean.prettyPrint(root) ; 
console.log("Is BST balanced? ", isBalanced(root)) ; 
console.log("\n\n") ; 


// Print In-Order & Pre-Order & Post-Order 
console.log(`In-Order: ${print_array(levelOrder(root)[0])}`) ; 
console.log(`Pre-Order: ${print_array(pre_order(root)[0])}`) ; 
console.log(`Post-Order: ${print_array(post_order(root)[0])}`) ; 
console.log("\n\n") ;


// Purposefully unbalance tree
for (let i = 0 ; i < 20 ; i++){
    let add_to_tree = Math.round(Math.random() * 20001, 0) ; 
    insert(root, add_to_tree) ;  
} 
clean.prettyPrint(root) ; 
console.log("Is tree balanced? ", isBalanced(root)) ; 
console.log("Height of Deepest Element (root): ", height(root)) ; 
console.log("\n\n") ; 


// Rebalance the Tree 
rebalance(root) ; 
clean.prettyPrint(root) ; 
console.log("IS tree balanced? ", isBalanced(root)) ; 
console.log("\n\n") ; 


// Reprint In-order, Pre-order, and Post-order
console.log(`In-Order: ${print_array(levelOrder(root)[0])}`) ; 
console.log(`Pre-Order: ${print_array(pre_order(root)[0])}`) ; 
console.log(`Post-Order: ${print_array(post_order(root)[0])}`) ; 
console.log("\n") ;