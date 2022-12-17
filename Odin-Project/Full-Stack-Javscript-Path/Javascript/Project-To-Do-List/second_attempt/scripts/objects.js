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
        this.priority ;
    }

    set_priority (priority) {
        this.priority = priority ; 
    }
}

function Aggregate_Objects_Of_Same_Type () {
    this.bucket_objects = [] ; 

    this.delete_object = function (name) {
        for (let i = 0 ; i < this.bucket_objects.length ; i++){
            if (this.bucket_objects[i].title == name.title){
                this.bucket_objects.splice(i, i + 1) ;
                break
            }
        }
    }

    this.add_object = function (object) {
        this.bucket_objects.push(object) ; 
    }
}


export { 
    Note, 
    Project, 
    List, 
    To_Dos, 
    Aggregate_Objects_Of_Same_Type, 
} ; 