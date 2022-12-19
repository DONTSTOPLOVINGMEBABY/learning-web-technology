function elementFromHtml(html) {
    const template = document.createElement("template"); 
    template.innerHTML = html.trim() ; 
    return template.content; 
}

function make_projects(list_of_projects, append_element) {} ; 
function make_lists(list_of_lists, append_element) {
    

    function make_one_list () {}
} ; 




function make_notes(all_notes_object, append_element) {
    const notes_container_1 = document.getElementsByClassName('notes-container-1')[0] ; 
    const notes_container_2 = document.getElementsByClassName('notes-container-2')[0] ;
    const notes_container_3 = document.getElementsByClassName('notes-container-3')[0] ;  
    const all_notes_container = [notes_container_1, notes_container_2, notes_container_3]
    
    function make_one_note (title, description) {
        const singular_note = `
        <div class="display-note" id="${title}">
            <div class="title-and-icons">
                <p class="display-title">${title}</p>
                <div class="note-delete-edit">
                <img class="edit-pencil" id="note-edit" src="./pencil-outline.svg" alt="pencil">
                <div class="delete-icon" id="note-delete">x</div>
                </div>
            </div>
            <p class="display-note-contents">${description}</p>
        </div>
        `
        return singular_note ; 
    }

    function get_sum_of_all_element_heights (element) {
        let height = 0 ; 
        element.childNodes.forEach( (child_node) => {
            height += child_node.offsetHeight ; 
        }) 
        return height ; 
    }

    function activate_note_buttons (all_notes_object) {
        const all_delete_icons = document.querySelectorAll("#note-delete") ; 
        const all_edit_icons = document.querySelectorAll("#note-edit") ; 

        function delete_note (element) {
            
            let singular_note = element.parentElement.parentElement.parentElement ; 
            console.log(singular_note.id)
            all_notes_object.delete_note(singular_note.id) 
            remove_all_note_elements() ; 
            add_notes_to_display() ; 
        }

        all_delete_icons.forEach( (element) => {
            element.addEventListener('click', () => { delete_note(element) })
        })
    }

    function remove_all_note_elements () {
        document.querySelectorAll("#note-delete").forEach( (element) => {
            element.parentElement.parentElement.parentElement.remove(); 
        })
    }

    function add_notes_to_display() {
    
        let counter = 0 ; 
        for (let this_object in all_notes_object.bucket_objects) {
            if (!all_notes_object.loaded_objects.includes(this_object)) {
            counter %= 3 ;  
            let notes_container_1_height = get_sum_of_all_element_heights(notes_container_1) ;  
            let notes_container_2_height = get_sum_of_all_element_heights(notes_container_2) ; 
            let notes_container_3_height = get_sum_of_all_element_heights(notes_container_3) ; 
            let note = make_one_note(this_object, all_notes_object.bucket_objects[this_object]) ;
            let note_html = elementFromHtml(note) ; 
            all_notes_object.load_notes(this_object) ;  
            if (notes_container_1_height == notes_container_2_height && notes_container_2_height == notes_container_3_height) {
                all_notes_container[counter].append(note_html) ; 
            } 
            else if (notes_container_1_height < notes_container_2_height && notes_container_1_height < notes_container_3_height) {
                notes_container_1.append(note_html) ; 
            }
            else if (notes_container_2_height < notes_container_1_height && notes_container_2_height < notes_container_3_height) {
                notes_container_2.append(note_html) ; 
            }
            else {
                notes_container_3.append(note_html) ; 
            }
            counter += 1 ; 
            }
            
        }
        activate_note_buttons(all_notes_object) ;
    }
    
    add_notes_to_display(); 
    
} ; 



function make_toDos(all_todos_object, append_element) {

    let list_of_todos = all_todos_object.bucket_objects ; 
    let list_of_added_items = all_todos_object.array_of_loaded_objects ; 
    let array_of_objects = all_todos_object.array_of_objects ; 

    function make_one_todo (title, due_date, priority, project, aggregate_name){
        const singular_todo = `
        <div class="singular-todo" id="${aggregate_name}">
            <div class="priority-color ${priority}"></div>
            <div class="to-do-title">${title}</div>
            <div class="part-of-project">Project: ${project}</div>
            <div class="to-do-due-date">${due_date}</div>
            <div class="hold-icons">
                <img class="edit-pencil" id="big-pencil" src="./pencil-outline.svg" alt="pencil">
                <div class="delete-icon" id="big-delete">x</div>
            </div>
        </div>
        `
        return elementFromHtml(singular_todo) 
    }
    
    function make_to_do_buttons_function (all_todos_object, array_of_objects) {
        const all_to_do_pencils = document.querySelectorAll('#big-pencil') ; 
        const all_to_do_exit_buttons = document.querySelectorAll("#big-delete") ; 
    
        function delete_button (element) {
            let this_singular_todo = element.target.parentElement.parentElement ; 
            let project_name = this_singular_todo.id ; 
            all_todos_object.delete_object(project_name) ; 
            this_singular_todo.remove() ; 
        }
    
        all_to_do_pencils.forEach( (element) => {
            element.addEventListener('click', () => { console.log("Working for me") }) 
        })
    
        all_to_do_exit_buttons.forEach( (element) => {
            element.addEventListener('click', (element) => { delete_button(element) }) 
        })
    
    }

    for (let this_object in array_of_objects){
        let todo = array_of_objects[this_object] 
        if (!list_of_added_items.includes(this_object)) {
            let append_todo = make_one_todo(todo.title, todo.due_date, todo.priority, todo.project, this_object) ; 
            append_element.append(append_todo) ; 
            all_todos_object.load_object(this_object) ; 
        }
    }

    make_to_do_buttons_function(all_todos_object, array_of_objects) ;

}






export {
    make_toDos,
    make_notes, 
}