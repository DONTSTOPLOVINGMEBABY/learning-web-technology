const empty_project_page = document.getElementsByClassName('empty-project')[0]; 
const empty_notes_page = document.getElementsByClassName('empty-notes')[0];
const empty_todos_page = document.getElementsByClassName('empty-todos')[0]; 
const empty_lists_page = document.getElementsByClassName('empty-lists')[0]; 

const build_list_page = document.getElementsByClassName('build-list')[0]; 
const build_note_page = document.getElementsByClassName('build-note')[0];

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
const button_add_to_list = document.getElementById('add-to-list'); 

const form_submit_new_project = document.getElementById('submit-new-project') ; 
const form_create_list = document.getElementById('create-list') ; 
const form_submit_new_note = document.getElementById('submit-new-note'); 
const form_submit_new_todo = document.getElementById('submit-new-todo') ;

const nav_menu_projects = document.getElementById("nav-menu-projects") ; 
const nav_menu_lists = document.getElementById('nav-menu-lists') ; 
const nav_menu_notes = document.getElementById('nav-menu-notes') ; 
const nav_menu_todos = document.getElementById('nav-menu-todos') ; 


const all_display_none_attributes = [
    empty_project_page, 
    empty_notes_page, 
    empty_todos_page, 
    empty_lists_page, 
    build_list_page, 
    build_note_page, 
    toggle_background_modal, 
    toggle_modal, 
    add_project_form, 
    add_list_form, 
    add_note_form, 
    add_todo_form
]

function toggle_all_displays_to_none () {
    for (let i = 0 ; i < all_display_none_attributes.length; i++) {
        all_display_none_attributes[i].style.display = "none" ; 
    }
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

function plus_note_button () {
    toggle_all_displays_to_none();
    modal_on() ;  
    on(add_note_form)
}

function plus_list_button () {
    toggle_all_displays_to_none() ; 
    modal_on() ; 
    on(add_list_form) ;
}

function plus_project_button() {
    toggle_all_displays_to_none()
    modal_on() ; 
    on(add_project_form) ; 
}






















/* all listeners that toggle modal */ 

top_shortcut_note.addEventListener('click', () => { plus_note_button() }) ; 

top_shortcut_list.addEventListener('click', () => { plus_list_button() }) ;

top_shortcut_project.addEventListener('click', () => { plus_project_button() }) ;

toggle_modal_exit.addEventListener('click', () => { off(toggle_modal, toggle_background_modal) }) ; 

