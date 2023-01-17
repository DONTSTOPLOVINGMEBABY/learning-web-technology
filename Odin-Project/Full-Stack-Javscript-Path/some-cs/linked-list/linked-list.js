/* 
    PSUEDO-CODE/NOTES

    *** THIS IS FOR DOUBLY LINKED LIST *** 

    Let L be a Linked List
    Let X be some element in L
    
    1. X has two attributes: .next and .prev (or just .next if singly LL) that 
    point to the next and previous elements in the list along with some data 
    2. if .next == NULL , then X is the last element in the list, if .prev == NULL, 
    then X is the end of the list

*/ 

function Linked_List(){
    this.head = null ; 


    this.list_search = function (data) {
        let x = this.head ; 
        while (x != null && x.key != data){
            x = x.next ; 
        }
        return x ; 
    }

    this.list_prepend = function (node){
        node.next = this.head ; 
        node.prev = null ;
        if (this.head != null){
            this.head.prev = node ; 
        }
        this.head = node ; 
    }

    this.list_insert = function (new_element, old_element){
        new_element.next = old_element.next ; 
        new_element.prev = old_element ; 
        if (old_element.next != null){
            old_element.next.prev = new_element ; 
        }
        old_element.next = new_element ; 
    } 

    this.list_delete = function (node){
        if (node.prev != null){
            node.prev.next = next ; 
        }
        else {
            this.head = node.next ; 
        }
        if (node.next != null){
            node.next.prev = node.prev ; 
        }
    }

    this.pretty_print = function () {
        let next = this.head.next ; 
        console.log(this.head.key) ; 
        while (next){
            console.log(next.key) ;
            next = next.next ; 
        }
    }
}



function Node (data) {
    this.head ; 
    this.tail ; 
    this.key = data ; 
}



let ll = new Linked_List() ; 
let array = [] ; 

for (let i = 20 ; i > 0 ; i--){
    let node = new Node(i) ; 
    ll.list_prepend(node)  ;
    array.push(node) ; 
}

let new_node = new Node(10000) ; 
ll.list_insert(new_node, array[12]) ;


ll.pretty_print() ; 

