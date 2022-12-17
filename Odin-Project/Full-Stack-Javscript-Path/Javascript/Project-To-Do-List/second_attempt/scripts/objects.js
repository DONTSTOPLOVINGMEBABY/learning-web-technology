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
            if (this.bucket_todos[i].title == name.title){
                this.bucket_todos.splice(i, i + 1) ;
                break
            }
        }
    }

    this.add_to_do = function (todo) {
        this.bucket_todos.push(todo) ; 
    }
}

function Aggregate_Notes () {
    this.bucket_notes = [] ; 

    this.delete_note = function (name) {
        for (let i = 0 ; i < this.bucket_notes.length ; i++){
            if (this.bucket_notes[i].title == name.title){
                this.bucket_notes.splice(i, i + 1) ;
                break
            }
        }
    }

    this.add_note = function (note) {
        this.bucket_notes.push(note) ; 
    }
}

function Aggregate_Lists () {
    this.bucket_lists = [] ; 

    this.delete_list = function (name) {
        for (let i = 0 ; i < this.bucket_lists.length ; i++){
            if (this.bucket_lists[i].title == name.title){
                this.bucket_lists.splice(i, i + 1) ;
                break
            }
        }
    }
    
    this.add_list = function (list) {
        this.bucket_lists.push(list) ; 
    }
}

function Aggregate_Projects () {
    this.bucket_projects = [] ; 

    this.delete_project = function (name) {
        for (let i = 0 ; i < this.bucket_projects.length ; i++){
            if (this.bucket_projects[i].title == name.title){
                this.bucket_projects.splice(i, i + 1) ;
                break
            }
        }
    }

    this.add_project = function (project) {
        this.bucket_projects.push(project) ; 
    }
}

export { 
    Note, 
    Project, 
    List, 
    To_Dos, 
    Aggregate_Todos, 
    Aggregate_Notes, 
    Aggregate_Lists, 
    Aggregate_Projects, 
} ; 