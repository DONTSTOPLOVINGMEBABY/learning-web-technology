class Note {
    constructor(title, description) {
        this.title = title ; 
        this.description = description ; 
    }
}

class Project { 
    constructor(title, description, due_date){
        this.title = title ;
        this.description = description ; 
        this.due_date = due_date ; 
        this.todos = [] ; 
    }

    add_to_do (todo) {
        this.todos.push(todo)
    }
}

class List {
    constructor(title) {
        this.title = title ; 
        this.list_items = [] ; 
    }
}

class To_Dos {
    constructor(title, description, due_date){
        this.title = title ;
        this.description = description ; 
        this.due_date = due_date ; 
    }
}


function Aggregate_Todos () {
    this.bucket_todos = [] ; 

    this.delete_todo = function (name) {
        for (let i = 0 ; i < this.bucket_todos.length ; i++){
            if (this.bucket_todos[i].title == name){
                this.bucket_todos.slice(i, i) ;
                break ; 
            }
        }
    }

    this.add_to_do = function (todo) {
        this.bucket_todos.push(todo) ; 
    }
}



export { Note, Project, List, To_Dos, Aggregate_Todos } ; 