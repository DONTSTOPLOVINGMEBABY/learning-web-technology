function Linked_List (){
    this.head = null ;

    // Takes a node and adds it to the front of the list
    this.prepend = function (node) {
        node.next = this.head ; 
        this.head = node ; 
    }

    // Takes a node and adds it to the back of the list 
    this.append = function (node) {
        let pointer = this.head ; 
        while (pointer.next != null){
            pointer = pointer.next ; 
        }
        pointer.next = node ; 
    }

    // Takes a node and searches the list for the node. 
    // If the node is found, the node is returned, if not
    // false is returned 
    this.search = function (node) { 
        let pointer = this.head ; 
        while (pointer != null){
            if (pointer.data == node.data){return pointer} 
            pointer = pointer.next ; 
        }
        return false ; 
    }

    // Takes a node and removes it from the list. If not found, 
    // false is returned 
    this.delete = function (node) {
        let current = this.head, previous ;
        if (this.head == node){
            this.head = node.next ;
            node.next = null ; 
            return ;
        }
        while (current.next != null && current.next != node){
            current = current.next
        }
        if (current.next == null) {return false} ; 
        current.next = current.next.next ; 
        node.next = null ;  
    }

    // Counts all the elements in the list
    this.size = function () {
        let count = 0, pointer = this.head ; 
        while (pointer != null){
            count += 1 ; 
            pointer = pointer.next ; 
        }
        return count ; 
    }

    // Returns first element
    this.get_head = function () {
        return this.head ; 
    }

    // Returns last element
    this.get_tail = function () {
        let pointer = this.head ; 
        if(pointer == null){return null}
        if (pointer.next == null){return pointer} ; 
        while (pointer.next != null){
            pointer = pointer.next ; 
        }
        return pointer ; 
    }

    // Returns index of element in the list, false if not found
    this.at_index = function (node) {
        let pointer = this.head, counter = 0 ; 
        if (pointer == node || pointer == null){return counter} ; 
        while (pointer != null && pointer != node){
            counter += 1
            pointer = pointer.next ;   
        } 
        if (pointer == null) {return false}
        return counter ; 
    }

    // Removes the last element in the list
    this.pop = function () {
        let pointer = this.head ; 
        if (pointer == null){return}
        if (pointer.next == null){this.head = null; return} 
        while (pointer.next.next != null){pointer = pointer.next}
        pointer.next = null ; 
    }

    // Returns true if element with given data is in the list, false
    // if not 
    this.contains = function (data) {
        let pointer = this.head ; 
        while (pointer != null){
            if (pointer.data == data) {
                return true
            }
            pointer = pointer.next ; 
        }
        return false
    }

    // Prints list in format: 
    // (node.data) --> (node.data) --> null
    this.pretty_print = function () {
        let pointer = this.head ;
        let string = "" ;  
        while (pointer != null){
            string += `( ${pointer.data} ) --> ` ; 
            pointer = pointer.next ; 
        }
        string += "null" ; 
        console.log(string, "\n") ; 
    }
}

function Node (data){
    this.data = data ; 
    this.next = null ; 
}

const singly_linked_list = new Linked_List() ;
const zero = new Node(0) ; 
const first = new Node(1) ;
const second = new Node(2) ; 
const third = new Node(3) ; 
const fourth = new Node(4) ; 

singly_linked_list.prepend(first) ; 
singly_linked_list.prepend(second) ; 
singly_linked_list.prepend(third) ; 
singly_linked_list.prepend(fourth) ; 
singly_linked_list.pretty_print() ; 

singly_linked_list.append(zero) ; 
singly_linked_list.pretty_print() ; 

console.log(singly_linked_list.search(second), "\n") ; 

singly_linked_list.delete(fourth) ; 
singly_linked_list.delete(zero) ; 
singly_linked_list.pretty_print() ; 

console.log(`Size of Linked List (excluding null): ${singly_linked_list.size()}`) ; 

console.log(`\nHead of List:\n`, singly_linked_list.get_head()) ; 
console.log(`\nTail of List: `, singly_linked_list.get_tail()) ; 

console.log("\nNode 1 Located at index: ", singly_linked_list.at_index(first)) ; 

console.log("\nIs there a value 1 that exists in the list? ", singly_linked_list.contains(1)) ; 
console.log("\nIs there a value -1223 that exists in the list? ", singly_linked_list.contains(-1223)) ; 

console.log("\nPop last element off the last.\nBefore pop: "); 
singly_linked_list.pretty_print() ; 
singly_linked_list.pop() ; 
console.log("After pop: ") ;
singly_linked_list.pretty_print() ;




/* OUTPUT FROM singly-linked-list.js  

( 4 ) --> ( 3 ) --> ( 2 ) --> ( 1 ) --> null

( 4 ) --> ( 3 ) --> ( 2 ) --> ( 1 ) --> ( 0 ) --> null

Node {
  data: 2,
  next: Node { data: 1, next: Node { data: 0, next: null } }
}

( 3 ) --> ( 2 ) --> ( 1 ) --> null

Size of Linked List (excluding null): 3

Head of List:
 Node {
  data: 3,
  next: Node { data: 2, next: Node { data: 1, next: null } }
}

Tail of List:  Node { data: 1, next: null }

Node 1 Located at index:  2

Is there a value 1 that exists in the list?  true

Is there a value -1223 that exists in the list?  false

Pop last element off the last.
Before pop:
( 3 ) --> ( 2 ) --> ( 1 ) --> null

After pop:
( 3 ) --> ( 2 ) --> null
*/ 