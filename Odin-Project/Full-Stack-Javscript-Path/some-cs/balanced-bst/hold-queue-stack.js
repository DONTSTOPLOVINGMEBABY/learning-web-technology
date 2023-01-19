function Queue () {
    this.queue = [] ; 

    this.Dequeue = function () { 
        let first = this.queue.slice(0, 1) ; 
        this.queue.splice(0, 1) ; 
        return first ; 
    }

    this.Enqueue = function (data) {
        this.queue.push(data) ; 
    }

    this.len = function () {
        return this.queue.length ; 
    }
}

function Stack () {
    this.the_stack = [] ; 

    // use JS push and pop methods for push/pop operations

    this.stack_length = function () {
        return this.the_stack.length ; 
    }
    
}

module.exports = {
    Queue , 
    Stack, 
}