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
    constructor(title, description, due_date, project, priority){
        this.title = title ;
        this.description = description ; 
        this.due_date = due_date ; 
        this.project = project ; 
        this.priority = priority ; 
    }

    set_priority (priority) {
        this.priority = priority ; 
    }
}

function Aggregate_Objects_Of_Same_Type () {
    this.bucket_objects = {} ; 
    this.array_of_loaded_objects = {} ; 
    this.array_of_objects = {} ; 

    this.delete_object = function (todo) {
        let string = todo.project + '-' + todo.title ;
        delete this.array_of_loaded_objects[todo.project] ; 
        delete this.bucket_objects[todo.project] ; 
        delete this.array_of_objects[string] ; 
    }

    this.add_object = function (object) {
        if (!this.bucket_objects[object.project]){
            this.bucket_objects[object.project] = object.title ; 
            let string = object.project + '-' + object.title ; 
            this.array_of_objects[string] = object ; 
        }
    }

    this.load_object = function (object) {
        this.array_of_loaded_objects[object.project] = object.title ; 
    }
}


export { 
    Note, 
    Project, 
    List, 
    To_Dos, 
    Aggregate_Objects_Of_Same_Type, 
} ; 