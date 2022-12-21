class Note {
    constructor(title, description) {
        this.title = title ; 
        this.description = description ; 
    }
}

class Project { 
    constructor(title, description = "", due_date){
        this.title = title ;
        this.description = description ; 
        this.due_date = due_date ; 
        this.todos = [] ; 
    }

    add_to_do (todo) {
        this.todos.push(todo)
    }

    remove_to_do (todo_title) {
        for (let i = 0 ; i < this.todos.length ; i ++) {
            if (this.todos[i] == todo_title){
                this.todos.splice(i, i+1) ; 
            }
        }
    }
}

class List {
    constructor(title) {
        this.title = title ; 
        this.list_items = [] ; 
    }

    add_item_to_list = function (item) {
        this.list_items.push(item) ; 
    }

    remove_item_from_list = function (item) {
        for (let i = 0 ; i < this.list_items.length ; i++) {
            if (this.list_items[i] == item){
                this.list_items.splice(i, i + 1) ; 
            }
        }
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


function Aggregate_Objects_Of_Todo_Type () {
    this.bucket_objects = {} ; 
    this.array_of_loaded_objects = [] ; 
    this.array_of_objects = {} ; 

    this.delete_object = function (todo) {
        delete this.bucket_objects[todo] ; 
        delete this.array_of_objects[todo] ; 
        for (let i = 0 ; i < this.array_of_loaded_objects.length ; i++) {
            if (this.array_of_loaded_objects[i] == todo){
                this.array_of_loaded_objects.splice(i, i + 1) ; 
                break ; 
            } 
        }
    }

    this.add_todo = function (object) {
        if (!this.bucket_objects[object.project]){
            let string = object.project + '-' + object.title ; 
            this.bucket_objects[string] = object.title ; 
            this.array_of_objects[string] = object ; 
        }
    }

    this.load = function (object) {
        this.array_of_loaded_objects.push(object)
    }

    this.check_if_todo_exists = function (name, project) {
        for (let object in this.bucket_objects){
            if (object.split('-')[0] == project && object.split('-')[1] == name) { return true }
        }
        return false ; 
    }
}


function Aggregate_Objects_Of_Note_Type  () {
    this.bucket_objects = {} ; 
    this.loaded_objects = [] ; 

    this.add_note = function (note) {
        this.bucket_objects[note.title] = note.description 
    }

    this.delete_note = function (note_title) {
        delete this.bucket_objects[note_title] ; 
        this.loaded_objects = [] ; 
    }

    this.load = function (note_title) {
        this.loaded_objects.push(note_title) ;
    }
} 


function Aggregate_Objects_Of_List_Type () {
    this.bucket_objects = {} ; 
    this.loaded_objects = [] ; 
    this.whole_objects = {} ; 

    this.add_list = function (list) {
        this.bucket_objects[list.title] = list.list_items ;
        this.whole_objects[list.title] = list ;   
    }

    this.delete_list = function (list_title) {
        delete this.bucket_objects[list_title] ; 
        this.loaded_objects = [] ; 
    }

    this.load = function (list_title) {
        this.loaded_objects.push(list_title) ;
    }

    this.return_list_element = function (list_title) {
        for (let a_list in this.whole_objects){
            if (a_list == list_title) {
                return this.whole_objects[a_list] ; 
            }
        }
    } ; 

}

function Aggregate_Objects_Of_Project_Type() { 
    this.bucket_objects = {} ; 
    this.loaded_objects = [] ; 
    this.loaded_dropdown_objects = [] ; 

    this.add_project = function (project) {
        this.bucket_objects[project.title] = project ;  
    }

    this.delete_project = function (project_title) {
        delete this.bucket_objects[project_title] ; 
        this.loaded_objects = [] ; 
    }

    this.load = function (project_title) {
        this.loaded_objects.push(project_title) ;
    }

    this.return_project_element = function (project_title) {
        for (let a_project in this.bucket_objects){
            if (a_project == project_title){
                return this.bucket_objects[a_project] ; 
            }
        }
    }
}


export { 
    Note, 
    Project, 
    List, 
    To_Dos, 
    Aggregate_Objects_Of_Todo_Type, 
    Aggregate_Objects_Of_Note_Type, 
    Aggregate_Objects_Of_List_Type, 
    Aggregate_Objects_Of_Project_Type, 
} ; 