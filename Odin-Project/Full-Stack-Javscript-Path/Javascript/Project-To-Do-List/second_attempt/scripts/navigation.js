import * as objects from "./objects.js"
import * as build_html from "./build_all_html.js"
 
const all_todos = new objects.Aggregate_Objects_Of_Todo_Type() ;
const all_projects = new objects.Aggregate_Objects_Of_Same_Type() ; 
const all_notes = new objects.Aggregate_Objects_Of_Note_Type() ; 
const all_lists = new objects.Aggregate_Objects_Of_Same_Type() ; 

const empty_project_page = document.getElementsByClassName('empty-project')[0]; 
const empty_notes_page = document.getElementsByClassName('empty-notes')[0];
const empty_todos_page = document.getElementsByClassName('empty-todos')[0]; 
const empty_lists_page = document.getElementsByClassName('empty-lists')[0]; 

const show_all_projects_page = document.getElementsByClassName('show-all-projects')[0] ;
const show_all_notes_page = document.getElementsByClassName('show-all-notes')[0] ; 
const show_all_todos_page = document.getElementsByClassName('display-todos')[0] ; 
const show_all_lists_page = document.getElementsByClassName('show-all-lists')[0] ; 

const toggle_background_modal = document.getElementsByClassName('background-modal')[0]; 
const toggle_modal = document.getElementsByClassName('modal')[0];
const toggle_modal_exit = document.getElementsByClassName('exit_button')[0] ; 

const add_project_form = document.getElementsByClassName('add-project-form')[0];
const add_list_form = document.getElementsByClassName('add-list-form')[0];
const add_note_form = document.getElementsByClassName('add-note-form')[0]; 
const add_todo_form = document.getElementsByClassName('add-todo-form')[0];

const top_shortcut_note = document.getElementById('top-add-note'); 
const top_shortcut_list = document.getElementById('top-add-list'); 
const top_shortcut_project = document.getElementById('top-add-project');

const button_add_new_entry = document.getElementById('add-new-entry-button') ;
const button_no_project_create_project = document.getElementById('no-project-create-project');
const button_add_list_items = document.getElementById('add-list-items');  
const button_no_list_create_list = document.getElementById('no-list-create-list'); 
const button_no_notes_create_notes = document.getElementById('no-notes-create-notes');
const button_no_todo_create_todo = document.getElementById("no-todos-create-todos")
const button_add_to_list = document.getElementById('add-to-list'); 

const form_submit_new_project = document.getElementById('submit-new-project') ; 
const form_create_list = document.getElementById('create-list') ; 
const form_submit_new_note = document.getElementById('submit-new-note'); 
const form_submit_new_todo = document.getElementById('submit-new-todo') ;

const nav_menu_projects = document.getElementById("nav-menu-projects") ; 
const nav_menu_lists = document.getElementById('nav-menu-lists') ; 
const nav_menu_notes = document.getElementById('nav-menu-notes') ; 
const nav_menu_todos = document.getElementById('nav-menu-todos') ; 

const modal_sidebar_project = document.getElementById("sidebar-new-window-projects") ; 
const modal_sidebar_list = document.getElementById("sidebar-new-window-lists") ; 
const modal_sidebar_notes = document.getElementById("sidebar-new-window-notes") ; 
const modal_sidebar_todo = document.getElementById("sidebar-new-window-todo") ; 
const modal_topbar_title = document.getElementById('adding-new') ; 

const display = document.getElementsByClassName('display')[0] ; 


const all_display_none_attributes = [
    empty_project_page, 
    empty_notes_page, 
    empty_todos_page, 
    empty_lists_page, 
    show_all_projects_page, 
    show_all_notes_page, 
    show_all_todos_page, 
    show_all_lists_page, 
    toggle_background_modal, 
    toggle_modal, 
    add_project_form, 
    add_list_form, 
    add_note_form, 
    add_todo_form, 
]

const all_italic_menu_attributes = [
    nav_menu_projects, 
    nav_menu_lists, 
    nav_menu_notes, 
    nav_menu_todos, 
    modal_sidebar_project, 
    modal_sidebar_list, 
    modal_sidebar_notes, 
    modal_sidebar_todo, 
]

const all_modal_displays = [
    add_project_form, 
    add_list_form, 
    add_note_form, 
    add_todo_form, 
]


function toggle_all_displays_to_none () {
    for (let i = 0 ; i < all_display_none_attributes.length; i++) {
        all_display_none_attributes[i].style.display = "none" ; 
    }
} 

function toggle_all_menu_attributes_to_not_selected () {
    for (let i = 0 ; i < all_italic_menu_attributes.length; i++){
        all_italic_menu_attributes[i].style.fontStyle = "normal" ; 
        let split_list = all_italic_menu_attributes[i].textContent.split('~') ; 
        if (split_list.length > 1){
            all_italic_menu_attributes[i].textContent = split_list[1]; 
        }  
    }
}

function add_italic_add_tilda (document_element) {
    let string = document_element.textContent ; 
    string = '~' + string ; 
    document_element.textContent = string;
    document_element.style.fontStyle = "italic" ; 
}

function highlight_menu_item (document_element) {
    toggle_all_menu_attributes_to_not_selected() ;
    add_italic_add_tilda(document_element) ; 
}

function on () {
    for (let i = 0 ; i < arguments.length ; i++){
        arguments[i].style.display = "flex" ; 
    }
}

function off () {
    for (let i = 0 ; i < arguments.length ; i++){
        arguments[i].style.display = "none" ; 
    }
}

function modal_on () {
    on(toggle_background_modal, toggle_modal);
}

function navigate_around_in_modal (document_element) {
    for (let i = 0 ; i < all_modal_displays.length ; i++) {
        all_modal_displays[i].style.display = "none"; 
    }
    document_element.style.display = "flex" ; 
}

function plus_note_button () {
    toggle_all_displays_to_none();
    modal_on() ;  
    switch_modal_to_note() ; 
}

function plus_list_button () {
    toggle_all_displays_to_none() ; 
    modal_on() ; 
    switch_modal_to_list() ; 
}

function plus_project_button() {
    toggle_all_displays_to_none() ; 
    modal_on() ; 
    switch_modal_to_project() ; 
}

function plus_todo_no_button () {
    toggle_all_displays_to_none() ; 
    modal_on() ; 
    switch_modal_to_todo() ; 
}

function switch_modal_to_project() {
    navigate_around_in_modal(add_project_form) ; 
    highlight_menu_item(modal_sidebar_project) ;
    modal_topbar_title.textContent = 'Project' ; 
}

function switch_modal_to_list () {
    navigate_around_in_modal(add_list_form) ; 
    highlight_menu_item(modal_sidebar_list) ; 
    modal_topbar_title.textContent = 'List' ; 
}

function switch_modal_to_note () {
    navigate_around_in_modal(add_note_form); 
    highlight_menu_item(modal_sidebar_notes) ; 
    modal_topbar_title.textContent = 'Note' ; 
}

function switch_modal_to_todo () {
    navigate_around_in_modal(add_todo_form) ; 
    highlight_menu_item(modal_sidebar_todo) ; 
    modal_topbar_title.textContent = 'Todo' ; 
}

function switch_nav_to_projects () {
    toggle_all_displays_to_none() ; 
    if (Object.keys(all_projects.bucket_objects).length == 0){
        on(empty_project_page) ; 
    }
    else {
        on(show_all_projects_page) ;
    }
}

function switch_nav_to_lists() {
    toggle_all_displays_to_none () ; 
    if (Object.keys(all_lists.bucket_objects).length == 0){
        on(empty_lists_page) ; 
    }
    else {
        on(show_all_lists_page) ; 
        build_html.make_lists(all_lists, show_all_lists_page) ; 
    }
}

function switch_nav_to_notes() {
    toggle_all_displays_to_none () ; 
    if (Object.keys(all_notes.bucket_objects).length == 0){
        on(empty_notes_page) ; 
    }
    else {
        on(show_all_notes_page) ; 
        build_html.make_notes(all_notes, show_all_notes_page) ; 
    }
}

function switch_nav_to_todos() {
    toggle_all_displays_to_none () ; 
    if (Object.keys(all_todos.bucket_objects).length == 0){
        on(empty_todos_page) ; 
    }
    else {
        on(show_all_todos_page) ; 
        build_html.make_toDos(all_todos, show_all_todos_page) ; 
    }
}

function new_entry_button_nav () {
    toggle_all_displays_to_none() ; 
    modal_on() ; 
    switch_modal_to_project(); 
}









let this_string = "Henry" ;

let a_todo = new objects.To_Dos("Hello", "Small Description", "23/23/23", "Big Project", "green") ; 
let b_todo = new objects.To_Dos("Hello, wassup", "Small Description", "23/23/23", "Bigger Project", "yellow") ; 
let c_todo = new objects.To_Dos("Hello My Friend", "Small Description", "23/23/23", "Biggest Project", "yellow") ; 
let d_todo = new objects.To_Dos("Hi there", "Nice to see you", "12/12/1222", "Biggest Youtuber Ever", "red") ; 
let k_todo = new objects.To_Dos("Hi there", "nice to see you", "12/12/2222", "Biggest Youtuber Everr", "red");

all_todos.add_project(a_todo) ; 
all_todos.add_project(b_todo) ;
all_todos.add_project(c_todo) ; 
all_todos.add_project(k_todo) ; 


let a_note = new objects.Note("Hello", `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Ultrices neque ornare aenean euismod. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Bibendum neque egestas congue quisque egestas diam in arcu. Lobortis mattis aliquam faucibus purus in massa tempor. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Purus ut faucibus pulvinar elementum. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Gravida neque convallis a cras semper auctor. Eu consequat ac felis donec. Velit euismod in pellentesque massa placerat duis. A diam sollicitudin tempor id eu nisl nunc mi. Sapien eget mi proin sed libero enim sed. Proin libero nunc consequat interdum. Arcu dui vivamus arcu felis bibendum ut tristique. Egestas sed sed risus pretium quam. Sodales ut eu sem integer vitae justo eget magna. Id aliquet lectus proin nibh nisl.

Pulvinar mattis nunc sed blandit libero volutpat sed cras. Accumsan tortor posuere ac ut consequat semper viverra nam. Nibh nisl condimentum id venenatis a condimentum vitae. Viverra vitae congue eu consequat ac felis donec et odio. Velit laoreet id donec ultrices. Laoreet id donec ultrices tincidunt arcu non sodales neque. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Cursus eget nunc scelerisque viverra mauris. Nullam ac tortor vitae purus faucibus ornare suspendisse. In tellus integer feugiat scelerisque varius morbi enim nunc. Cras tincidunt lobortis feugiat vivamus. Neque ornare aenean euismod elementum nisi quis eleifend. Vestibulum lectus mauris ultrices eros in cursus. Diam phasellus vestibulum lorem sed. Pretium quam vulputate dignissim suspendisse in.`) ;
let b_note = new objects.Note("Hi there" , `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Ultrices neque ornare aenean euismod. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Bibendum neque egestas congue quisque egestas diam in arcu. Lobortis mattis aliquam faucibus purus in massa tempor. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Purus ut faucibus pulvinar elementum. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Gravida neque convallis a cras semper auctor. Eu consequat ac felis donec. Velit euismod in pellentesque massa placerat duis. A diam sollicitudin tempor id eu nisl nunc mi. Sapien eget mi proin sed libero enim sed. Proin libero nunc consequat interdum. Arcu dui vivamus arcu felis bibendum ut tristique. Egestas sed sed risus pretium quam. Sodales ut eu sem integer vitae justo eget magna. Id aliquet lectus proin nibh nisl.
`) ;   
let c_note = new objects.Note("Helkasd", `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Ultrices neque ornare aenean euismod. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Bibendum neque egestas congue quisque egestas diam in arcu. Lobortis mattis aliquam faucibus purus in massa tempor. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Purus ut faucibus pulvinar elementum. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Gravida neque convallis a cras semper auctor. Eu .
`) ; 
let d_note = new objects.Note('ohmygoodness', `
m ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Ultrices neque ornare aenean euismod. Phasellus faucibus scelerisque eleifend donec pretium`)
let e_note = new objects.Note('heayyay', `
m ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Ultrices neque ornare aenean euismod. Phasellus faucibus scelerisque`)
let g_note = new objects.Note('hea', `
m ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Ultrices neque ornare aenean euismod. Phasellus faucibus scelerisque`)


all_notes.add_note(a_note) ; 
all_notes.add_note(b_note) ; 
all_notes.add_note(a_note) ; 
all_notes.add_note(c_note) ; 
all_notes.add_note(d_note) ; 
all_notes.add_note(e_note) ; 
all_notes.add_note(g_note) ;



let first_list = new objects.List("Big List") ; 
let second_list = new objects.List("Small List") ; 
first_list.add_item_to_list("Hello") ;
second_list.add_item_to_list("Welcome") ; 
second_list.add_item_to_list("Nice Nice") ; 
console.log(first_list)
console.log(second_list) 
all_lists.add_list(first_list) ; 
all_lists.add_list(second_list) ; 
console.log(all_lists) ; 







/* all listeners that toggle/invoke the modal */ 

top_shortcut_note.addEventListener('click', () => { plus_note_button() }) ; 
top_shortcut_list.addEventListener('click', () => { plus_list_button() }) ;
top_shortcut_project.addEventListener('click', () => { plus_project_button() }) ;
toggle_modal_exit.addEventListener('click', () => { off(toggle_modal, toggle_background_modal) }) ; 
modal_sidebar_project.addEventListener('click', () => { switch_modal_to_project() }) ; 
modal_sidebar_list.addEventListener('click', () => { switch_modal_to_list() }) ; 
modal_sidebar_notes.addEventListener('click', () => { switch_modal_to_note() }) ; 
modal_sidebar_todo.addEventListener('click', () => { switch_modal_to_todo() }) ; 

/* all listeners for main-menu sidebar */

nav_menu_projects.addEventListener('click', () => { switch_nav_to_projects() }) ; 
nav_menu_lists.addEventListener('click', () => { switch_nav_to_lists() }) ; 
nav_menu_notes.addEventListener('click', () => { switch_nav_to_notes() }) ; 
nav_menu_todos.addEventListener('click', () => { switch_nav_to_todos() }) ; 
button_add_new_entry.addEventListener('click', () => { new_entry_button_nav() }) ; 

/* All listeners for all make project/notes etc. when no such things exists buttons */ 

button_no_project_create_project.addEventListener('click', () => { plus_project_button() }) ; 
button_no_list_create_list.addEventListener('click', () => { plus_list_button() }) ; 
button_no_notes_create_notes.addEventListener('click', () => { plus_note_button() }) ; 
button_no_todo_create_todo.addEventListener('click', () => { plus_todo_no_button() }) ; 



