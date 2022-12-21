import * as objects from "./objects.js"
import * as build_html from "./build_all_html.js"
import * as forms from "./forms.js" 
  
const all_todos = new objects.Aggregate_Objects_Of_Todo_Type() ;
const all_projects = new objects.Aggregate_Objects_Of_Project_Type() ; 
const all_notes = new objects.Aggregate_Objects_Of_Note_Type() ; 
const all_lists = new objects.Aggregate_Objects_Of_List_Type() ; 

const display = document.getElementsByClassName('display')[0] ; 

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
const button_add_list_items = document.getElementById('add-to-list');  
const button_no_list_create_list = document.getElementById('no-list-create-list'); 
const button_no_notes_create_notes = document.getElementById('no-notes-create-notes');
const button_no_todo_create_todo = document.getElementById("no-todos-create-todos")

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

const low_priority_label = document.getElementById("low-priority-label") ; 
const med_priority_label = document.getElementById("med-priority-label") ; 
const high_priority_label = document.getElementById("high-priority-label") ;
const dropbtn = document.getElementsByClassName("dropbtn")[0] ; 
const dropdown_items = document.getElementById("dropdown-todo") ; 

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
    modal_on() ;  
    switch_modal_to_note() ; 
}

function plus_list_button () {
    modal_on() ; 
    switch_modal_to_list() ; 
}

function plus_project_button() {
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
    highlight_menu_item(nav_menu_projects) ;
    if (Object.keys(all_projects.bucket_objects).length == 0){
        on(empty_project_page) ; 
    }
    else {
        on(show_all_projects_page) ;
        build_html.make_projects(all_projects, show_all_projects_page) ; 
    }
}

function switch_nav_to_lists() {
    toggle_all_displays_to_none () ;
    highlight_menu_item(nav_menu_lists) ; 
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
    highlight_menu_item(nav_menu_notes) ;
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
    highlight_menu_item(nav_menu_todos) ;
    if (Object.keys(all_todos.bucket_objects).length == 0){
        on(empty_todos_page) ; 
    }
    else {
        on(show_all_todos_page) ; 
        build_html.make_toDos(all_todos, show_all_todos_page) ; 
    }
}

function new_entry_button_nav () {
    modal_on() ; 
    switch_modal_to_project(); 
}

function create_new_project (ev) {
    const title_input = document.getElementById("project-title-input") ; 
    const description_input = document.getElementById("project-description-input") ;
    const due_date = document.getElementById("project-date-input") ; 

    if (title_input.checkValidity() && due_date.checkValidity()) {
        ev.preventDefault() ;
        let new_project = new objects.Project(title_input.value, description_input.value, due_date.value) ; 
        all_projects.add_project(new_project) ; 
        switch_nav_to_projects() ; 
        title_input.value = "" ; 
        description_input.value = "" ; 
        due_date.value = "" ; 
   }
}


function create_new_list (ev) {
    const title_input = document.getElementById("list-title-input") ; 
    const all_modal_list_items = document.querySelectorAll(".modal-list-item") ; 

    if (title_input.checkValidity()) { 
        ev.preventDefault() ; 

        let new_list = new objects.List(title_input.value) ; 
        let new_set = new Set() ;

        all_modal_list_items.forEach( (item) => {
            new_set.add(item.textContent)
        })

        for (let item of new_set) { new_list.add_item_to_list(item) } 

        all_lists.add_list(new_list) ; 
        switch_nav_to_lists() ; 
        title_input.value = '' ; 
    }
}

function add_to_list_button () {
    const display_list_ul = document.getElementById("display-list-ul") ; 
    const title_input = document.getElementById("add-to-list-input") ; 

    if (title_input.value != "") {
        build_html.add_list_item_to_modal_list(title_input.value, display_list_ul) ;
        title_input.value = "" ; 
    }
}


function create_new_note(ev) {
    const note_title = document.getElementById("note-title-input") ; 
    const note_contents = document.getElementById("note-description-input") ; 

    if (note_title.checkValidity() && note_contents.checkValidity()){
        ev.preventDefault() ; 
        let new_note = new objects.Note(note_title.value, note_contents.value) ; 
        all_notes.add_note(new_note) ; 
        switch_nav_to_notes() ; 
        note_title.value = "" ; 
        note_contents.value = "" ; 
    } 

} 

function create_new_todo (ev) {
    const title_input = document.getElementById("todo-title-input") ; 
    const todo_description = document.getElementById("todo-description-input") ;
    const date_input = document.getElementById("todo-date-input") 
    const low_priority = document.getElementById("low-priority") ; 
    const med_priority = document.getElementById("med-priority") ; 
    const high_priority = document.getElementById("high-priority") ; 
    
    if (title_input.checkValidity() && date_input.checkValidity() && dropbtn.innerText != "Choose-Project" && all_todos.check_if_todo_exists(title_input.value, dropbtn.innerText)) {
        ev.preventDefault() ; 
        alert("Todo with that title already belongs to that project. Select a different one!")
    }

    else if (title_input.checkValidity() && date_input.checkValidity() && dropbtn.innerText == "Choose-Project"){
        ev.preventDefault() ;     
        alert("Select a Project to associate todo with!")
    }

    else if (title_input.checkValidity() && date_input.checkValidity() && dropbtn.innerText != "Choose-Project"){
        ev.preventDefault() ; 
        let new_todo ; 

        if (low_priority.checked) {
            new_todo = new objects.To_Dos(title_input.value, todo_description.value, date_input.value, 
                dropbtn.innerText, "green") ; 
        }
        else if (med_priority.checked) {
            new_todo = new objects.To_Dos(title_input.value, todo_description.value, date_input.value, 
                dropbtn.innerText, "yellow") ;
        }
        else {
            new_todo = new objects.To_Dos(title_input.value, todo_description.value, date_input.value, 
                dropbtn.innerText, "red") ; 
        }

        all_todos.add_todo(new_todo) ; 
        switch_nav_to_todos() ; 
        title_input.value = "" ; 
        todo_description.value = "" ; 
        date_input.value = "" ; 
        select_low_priority() ; 
        dropbtn.innerText= "Choose-Project" ; 
    }  
}

function select_high_priority () {
    low_priority_label.classList.remove("green") ; 
    med_priority_label.classList.remove("yellow") ; 
    high_priority_label.classList.remove("red")  ;
    high_priority_label.classList.add("red") ; 
} 

function select_med_priority() {
    low_priority_label.classList.remove("green") ; 
    med_priority_label.classList.remove("yellow") ; 
    high_priority_label.classList.remove("red")  ;
    med_priority_label.classList.add("yellow") ; 
}

function select_low_priority() {
    low_priority_label.classList.remove("green") ; 
    med_priority_label.classList.remove("yellow") ; 
    high_priority_label.classList.remove("red")  ;
    low_priority_label.classList.add("green") ; 
}














/* all listeners that toggle/invoke the modal */ 

top_shortcut_note.addEventListener('click', () => { plus_note_button() }) ; 
top_shortcut_list.addEventListener('click', () => { plus_list_button() }) ;
top_shortcut_project.addEventListener('click', () => { plus_project_button() }) ;
toggle_modal_exit.addEventListener('click', () => { off(toggle_modal, toggle_background_modal) }) ; 
modal_sidebar_project.addEventListener('click', () => { switch_modal_to_project() }) ; 
modal_sidebar_list.addEventListener('click', () => { switch_modal_to_list() }) ; 
modal_sidebar_notes.addEventListener('click', () => { switch_modal_to_note() }) ; 
modal_sidebar_todo.addEventListener('click', () => { 
    switch_modal_to_todo() 
    build_html.display_projects_in_todo_dropdown(dropdown_items, dropbtn, all_projects) ;     
}) ; 

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

/* All listeners for submitting new projects/notes, etc. */ 

form_submit_new_project.addEventListener('click', (ev) => { create_new_project(ev) }) ; 
form_create_list.addEventListener('click', (ev) => { create_new_list(ev) }) ; 
form_submit_new_note.addEventListener('click', (ev) => { create_new_note(ev) }) ; 
form_submit_new_todo.addEventListener('click', (ev) => { create_new_todo(ev) }) ; 
low_priority_label.addEventListener('click', () => { select_low_priority() }) ; 
med_priority_label.addEventListener('click', () => { select_med_priority() } ) ; 
high_priority_label.addEventListener('click', () => { select_high_priority() }) ; 
button_add_list_items.addEventListener('click', () => { add_to_list_button() }) ; 






startup() ; 



console.log(all_lists.return_list_element("Big List")) 
































































function startup() {
    
    let this_string = "Henry" ;

    let a_todo = new objects.To_Dos("Hello", "Small Description", "23/23/23", "Big Project", "green") ; 
    let b_todo = new objects.To_Dos("Hello, wassup", "Small Description", "23/23/23", "Bigger Project", "yellow") ; 
    let c_todo = new objects.To_Dos("Hello My Friend", "Small Description", "23/23/23", "Biggest Project", "yellow") ; 
    let d_todo = new objects.To_Dos("Hi there", "Nice to see you", "12/12/1222", "Biggest Youtuber Ever", "red") ; 
    let k_todo = new objects.To_Dos("Hi there", "nice to see you", "12/12/2222", "Biggest Youtuber Everr", "red");

    all_todos.add_todo(a_todo) ; 
    all_todos.add_todo(b_todo) ;
    all_todos.add_todo(c_todo) ; 
    all_todos.add_todo(d_todo) ; 
    all_todos.add_todo(k_todo) ; 


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


    // all_notes.add_note(a_note) ; 
    // all_notes.add_note(b_note) ; 
    // all_notes.add_note(a_note) ; 
    // all_notes.add_note(c_note) ; 
    all_notes.add_note(d_note) ; 
    all_notes.add_note(e_note) ; 
    all_notes.add_note(g_note) ;



    let first_list = new objects.List("Big List") ; 
    let second_list = new objects.List("Small List") ; 
    first_list.add_item_to_list("Hello") ;
    second_list.add_item_to_list("Welcome") ; 
    second_list.add_item_to_list("Nice Nice") ; 

    all_lists.add_list(first_list) ; 
    all_lists.add_list(second_list) ; 



    let a_project = new objects.Project("This_Project", "Huge deal", "23/21/2322") ; 
    let b_project = new objects.Project("That_Project", "Even bigger deal", "12/23/2022") ; 
    a_project.add_to_do(a_todo.title) ; 
    a_project.add_to_do(c_todo.title) ; 
    b_project.add_to_do(d_todo.title) ; 

    all_projects.add_project(a_project) ; 
    all_projects.add_project(b_project) ; 

    switch_nav_to_projects() ; 

}

