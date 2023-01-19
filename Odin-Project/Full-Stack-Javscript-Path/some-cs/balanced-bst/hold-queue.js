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


module.exports = {
    Queue , 
}