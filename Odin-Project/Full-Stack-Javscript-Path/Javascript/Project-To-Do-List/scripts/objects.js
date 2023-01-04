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

    this.delete_object = function (todo, project_name=false) {
        if (project_name){
            let string = project_name + "-" + todo ; 
            todo = string ; 
        }
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

    this.rename_project = function (old_project_title, new_project_title) {
        
        let temp ; 
        let temp_k_j ; 
        for (let k in this.bucket_objects){
            temp = this.bucket_objects[k] ;
            temp_k_j = k ; 
            let string = k.split("-") ;
            if (string[0] == old_project_title){
                string[0] = new_project_title ; 
                delete this.bucket_objects[temp_k_j] ; 
            } 
            k = string[0] + "-" + string[1] ;  
            this.bucket_objects[k] = temp ; 
        }
        
        for (let j in this.array_of_objects){
            temp = this.array_of_objects[j] ; 
            temp_k_j = j ; 
            let string = j.split("-") ;
            if (string[0] == old_project_title){
                string[0] = new_project_title ; 
                delete this.array_of_objects[temp_k_j] ; 
            } 
            j = string[0] + "-" + string[1] ;  
            this.array_of_objects[j] = temp ;
            if (string[0] == new_project_title){
                this.array_of_objects[j].project = new_project_title ;
            }  
        }

    }

    this.return_todo = function (title) {
        for (let k in this.array_of_objects){
            if (this.array_of_objects[k].title == title){
                return this.array_of_objects[k] ; 
            } 
        }
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
    this.temp_bin = [] ;
    this.old_name = "" ;  

    this.add_project = function (project) {
        this.bucket_objects[project.title] = project ;  
    }

    this.delete_project = function (project_title) {
        delete this.bucket_objects[project_title] ; 
        this.loaded_objects = [] ; 
        this.loaded_dropdown_objects = [] ; 
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

    this.load_items_into_temp_bin = function (temp_list_of_todos, old_name){
        temp_list_of_todos.forEach( (todo) => {this.temp_bin.push(todo)})
        this.old_name = old_name ; 
    }

    this.reset_temp_bin = function () {
        this.temp_bin = [] ;
        this.old_name = '';  
    }

    this.edit_todo = function (project_title, old_todo_name, new_todo_name) {
        for (let project in this.bucket_objects){
            if (project == project_title){
                for (let i = 0 ; i < this.bucket_objects[project].todos.length ; i++){
                    if (this.bucket_objects[project].todos[i] == old_todo_name){
                        this.bucket_objects[project].todos.splice(i, i + 1) ; 
                        this.bucket_objects[project].todos.push(new_todo_name) ; 
                    } 
                }
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