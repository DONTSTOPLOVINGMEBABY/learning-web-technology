import * as objects from "./objects.js"

const all_todos = new objects.Aggregate_Objects_Of_Same_Type() ;
const all_projects = new objects.Aggregate_Objects_Of_Same_Type() ; 
const all_notes = new objects.Aggregate_Objects_Of_Same_Type() ; 
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
    if (all_projects.bucket_objects.length == 0){
        on(empty_project_page) ; 
    }
    else {
        on(show_all_projects_page) ;
    }
}

function switch_nav_to_lists() {
    toggle_all_displays_to_none () ; 
    if (all_lists.bucket_objects.length == 0){
        on(empty_lists_page) ; 
    }
    else {
        on(show_all_lists_page) ; 
    }
}

function switch_nav_to_notes() {
    toggle_all_displays_to_none () ; 
    if (all_notes.bucket_objects.length == 0){
        on(empty_notes_page) ; 
    }
    else {
        on(show_all_notes_page) ; 
    }
}

function switch_nav_to_todos() {
    toggle_all_displays_to_none () ; 
    if (all_todos.bucket_objects.length == 0){
        on(empty_todos_page) ; 
    }
    else {
        on(show_all_todos_page) ; 
    }
}

function new_entry_button_nav () {
    toggle_all_displays_to_none() ; 
    modal_on() ; 
    switch_modal_to_project(); 
}



let this_string = "Henry" ;
all_todos.add_object(this_string) ; 
all_lists.add_object(this_string) ; 
all_notes.add_object(this_string) ; 
all_projects.add_object(this_string) ; 













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

/* All listeners for all no-project/notes etc. buttons */ 

button_no_project_create_project.addEventListener('click', () => { plus_project_button() }) ; 
button_no_list_create_list.addEventListener('click', () => { plus_list_button() }) ; 
button_no_notes_create_notes.addEventListener('click', () => { plus_note_button() }) ; 
button_no_todo_create_todo.addEventListener('click', () => { plus_todo_no_button() }) ; 