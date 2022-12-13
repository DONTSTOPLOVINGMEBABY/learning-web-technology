class To_Do {
    constructor (title, description, date, priority){
        this.title = title ; 
        this.description = description ; 
        this.date = date ; 
        this.priority = priority ; 
    }
}

class Project {
    constructor (name, description, due_date) {
        this.name = name ; 
        this.description = description ; 
        this.to_dos = []; 
        this.due_date = due_date ; 
    }

    add_toDo (to_do) { this.to_dos.push(to_do) } ; 

}

class Shopping_list {
    constructor (list_name) {
        this.list_name = list_name ; 
        this.list_items = []; 
    }
    add_list_item (item, quantity) { 
        const new_item = new list_item(item, quantity) ; 
        this.list_items.push(new_item);  
        return new_item ;
    }; 
}

class list_item {
    constructor (item, quantity) {
        this.item = item ; 
        this.quantity = quantity ; 
    }
}

class Note {
    constructor (note_name){
        this.note_name = note_name ; 
    }
}

function all_to_dos () {
    this.all_to_dos = []; 
    this.add_to_do = function (to_do) {this.all_to_dos.push(to_do)} ;
}

function all_notes () { 
    this.all_notes = []; 
    this.add_note = function (note) { this.all_notes.push(note) }
}

function all_projects () {
    this.all_projects = [] ; 
    this.add_project = function (project) { this.all_projects.push(project) } 
}

function all_shopping_lists () {
    this.all_shopping_lists = [] ; 
    this.add_shopping_list = function (shopping_list) { this.all_shopping_lists.push(shopping_list)}
}

function make_shopping_list (list_name, object_argument) {
    const s_list = new Shopping_list (list_name) ; 
    object_argument .add_shopping_list(s_list); 
    return s_list ; 
}

function make_to_do (title, description, date, priority, object_argument) {
    const to_do = new To_Do(title, description, date, priority);
    object_argument.add_to_do(to_do) ; 
    return to_do ; 
}

function make_project (name, description, due_date, object_argument) {
    const project = new Project(name, description, due_date); 
    object_argument.add_project(project); 
    return project ; 
}

function make_note (note_name, object_argument) {
    const note = new Note(note_name) ; 
    object_argument.add_note(note) ; 
    return note ; 
}


export { 
    make_note, 
    make_project, 
    make_to_do, 
    make_shopping_list, 
    all_to_dos, 
    all_notes, 
    all_projects, 
    all_shopping_lists, 
    } ; 