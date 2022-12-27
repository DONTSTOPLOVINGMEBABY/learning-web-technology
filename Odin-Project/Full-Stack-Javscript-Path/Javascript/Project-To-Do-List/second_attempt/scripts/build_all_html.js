function elementFromHtml(html) {
    const template = document.createElement("template"); 
    template.innerHTML = html.trim() ; 
    return template.content; 
}

function get_sum_of_all_element_heights (element) {
    let height = 0 ; 
    element.childNodes.forEach( (child_node) => {
        height += child_node.offsetHeight ; }) 
    return height ; 
}

function add_new_elements_evenly(container_1, container_2, container_3, all_blank_container, full_object, counter, html_element, object) {        
    let container_1_height = get_sum_of_all_element_heights(container_1) ;  
    let container_2_height = get_sum_of_all_element_heights(container_2) ; 
    let container_3_height = get_sum_of_all_element_heights(container_3) ; 
    if (container_1_height == container_2_height && container_2_height == container_3_height) {
        all_blank_container[counter].append(html_element) ; 
    } 
    else if (container_1_height <= container_2_height && container_1_height <= container_3_height) {
        container_1.append(html_element) ; 
    }
    else if (container_2_height <= container_1_height && container_2_height <= container_3_height) {
        container_2.append(html_element) ; 
    }
    else {
        container_3.append(html_element) ; 
    }
    counter += 1 ;
    full_object.load(object) ; 

}


function make_projects(list_of_projects, append_element, list_of_todos, activate_edit_button) {
    const projects_container_1 = document.getElementsByClassName('projects-container-1')[0] ; 
    const projects_container_2 = document.getElementsByClassName('projects-container-2')[0] ; 
    const projects_container_3 = document.getElementsByClassName('projects-container-3')[0] ;
    const all_projects_container = [ projects_container_1, projects_container_2, projects_container_3 ] ; 
    
    function make_one_project (title, todo_items, due_date) {
        let singular_project = `
        <div class="display-project" id="${title}">
            <div class="title-and-icons">
                <p class="display-title">${title}</p>
                <div class="hold-icons">
                    <img class="edit-pencil" id="project-pencil" src="./pencil-outline.svg" alt="pencil">
                    <div class="delete-icon" id="project-exit"">x</div>
                </div>
            </div>
            <p class="display-project-due-date"><span id="project-title-date">Due: ${due_date}</span></p>
            <h3>Todos:</h3>
            <ul class="display-project-todos"> 
        `
        for (let i = 0 ; i < todo_items.length ; i++) {
            let make_project_todo_item = `<li>${todo_items[i]}</li>` ; 
            singular_project += make_project_todo_item ; 
        }
        singular_project += `</ul></div>`
        return elementFromHtml(singular_project) ; 
    }

    function activate_project_buttons () {
        const project_exit = document.querySelectorAll("#project-exit") ; 
        const project_pencil = document.querySelectorAll("#project-pencil") ; 

        
        function delete_project (element) {
            let singular_project_element = element.parentElement.parentElement.parentElement ; 
            let the_project = list_of_projects.return_project_element(singular_project_element.id) ;
            the_project.todos.forEach( (todo) => {list_of_todos.delete_object(`${singular_project_element.id}-${todo}`)} ) ; 
            list_of_projects.delete_project(singular_project_element.id) ;  
            remove_projects_in_todo_dropdown() ; 
            remove_all_project_elements() ; 
            add_projects_to_display() ;    
        }
        
        function edit_project (element) {
            const title_input = document.getElementById("project-title-input") ; 
            const description_input = document.getElementById("project-description-input") ;
            const due_date_input = document.getElementById("project-date-input") ; 
            let title = element.parentElement.previousSibling.previousSibling.textContent ; 
            let the_project = list_of_projects.return_project_element(title) ; 
            let description = the_project.description ; 
            let due_date = the_project.due_date ; 
            title_input.value = title; 
            description_input.value = description ; 
            due_date_input.value = due_date ; 
            activate_edit_button() ;              
            list_of_projects.load_items_into_temp_bin(the_project.todos, the_project.title) ; 
        }

        project_pencil.forEach( (element) => {
            element.addEventListener('click', () => {
                edit_project(element) ;  
            })
        })

        project_exit.forEach( (element) => {
            element.addEventListener('click', () => {
                delete_project(element) ; 
            })
        })

    }

    function add_projects_to_display () {

        let counter = 0 ; 
        for (let object in list_of_projects.bucket_objects){
            if (!list_of_projects.loaded_objects.includes(object)) {
            let html_project_element = make_one_project(list_of_projects.bucket_objects[object].title, 
                list_of_projects.bucket_objects[object].todos, 
                list_of_projects.bucket_objects[object].due_date) ; 
            counter %= 3 ;
            add_new_elements_evenly(projects_container_1, projects_container_2, projects_container_3, all_projects_container, list_of_projects, counter, html_project_element, object) ; 
            }
        }
        activate_project_buttons() ; 
    }
    remove_all_project_elements() ; 
    list_of_projects.loaded_objects = [] ; 
    add_projects_to_display() ; 
} ;  

function make_lists(list_of_lists, append_element, activate_edit_button) {
    const lists_container_1 = document.getElementsByClassName('lists-container-1')[0] ; 
    const lists_container_2 = document.getElementsByClassName('lists-container-2')[0] ;
    const lists_container_3 = document.getElementsByClassName('lists-container-3')[0] ;  
    const all_lists_container = [lists_container_1, lists_container_2, lists_container_3] ; 

    function make_one_list (title, items_in_list) {
        let singular_list = `
        <div class="display-all-lists" id="${title}">
            <div class="title-and-icons">
                <p class="display-title">${title}</p>
                <div class="hold-icons">
                    <img class="edit-pencil" id="list-pencil" src="./pencil-outline.svg" alt="pencil">
                    <div class="delete-icon" id="list-exit">x</div>
                </div>
            </div>
            <ul class="display-list-contents">
        `
        for (let i = 0 ; i < items_in_list.length ; i++){
            let list_element_div = `<li>${items_in_list[i]}<img id="delete-from-list"
            src="./delete.svg" alt="trash-can"></li>`
            singular_list += list_element_div ; 
        }
        singular_list += `</ul></div>`
    
        let singular_list_html = elementFromHtml(singular_list) ;
        return singular_list_html ;  
    } 

    function activate_list_buttons () {
        const list_edit_buttons = document.querySelectorAll("#list-pencil") ; 
        const list_exit_buttons = document.querySelectorAll("#list-exit") ; 
        const delete_item_from_list_icons = document.querySelectorAll("#delete-from-list") ; 

        function edit_list (element) {
            const title_input = document.getElementById("list-title-input") ; 
            const display_list_ul = document.getElementById("display-list-ul") ; 
            title_input.value = '' ; 
            remove_all_display_list(); 
            let title = element.parentElement.previousSibling.previousSibling.textContent ; 
            let the_list = list_of_lists.return_list_element(title) ; 
            title_input.value = the_list.title ; 
            the_list.list_items.forEach( (item) => {
                let list_element_div = `<li class="modal-list-item">${item}</li>`
                display_list_ul.append(elementFromHtml(list_element_div)) ; 
            })
            activate_edit_button(); 
        }

        function delete_list (element) {
            let singular_list_element = element.parentElement.parentElement.parentElement ; 
            list_of_lists.delete_list(singular_list_element.id)  ;  
            remove_all_list_elements() ; 
            add_lists_to_display() ; 
        }  

        function delete_one_element(element) {
            let the_list = list_of_lists.return_list_element(element.parentElement.parentElement.parentElement.id) ;
            let the_deleted_element = element.parentElement.textContent ; 
            the_list.remove_item_from_list(the_deleted_element) ; 

            if (the_list.list_items.length == 0) {
                list_of_lists.delete_list(the_list.title) ; 
            }
            else {
                list_of_lists.loaded_objects = [] ;
            }
            remove_all_list_elements() ; 
            add_lists_to_display() ;
 
        }

        list_edit_buttons.forEach( (element) => {
            element.addEventListener('click', () => {
                edit_list(element) ; 
            })
        })

        list_exit_buttons.forEach( (element) => {
            element.addEventListener('click', () => {
                delete_list(element) ; 
            })
        }) 

        delete_item_from_list_icons.forEach( (element) => {
            element.addEventListener('click', () => { delete_one_element(element) }) ; 
        })
    }

    function add_lists_to_display () {
        let counter = 0 ; 
        for (let object in list_of_lists.bucket_objects){
            
            if (!list_of_lists.loaded_objects.includes(object)) {
                counter %= 3 ;
                let the_html_list = (make_one_list(object, list_of_lists.bucket_objects[object])) ; 
                add_new_elements_evenly(lists_container_1, lists_container_2, lists_container_3, all_lists_container, list_of_lists, counter, the_html_list, object ) ; 
            }   
        }
        activate_list_buttons() ; 
    }
    add_lists_to_display() ; 
} ; 


function make_notes(all_notes_object, append_element, activate_edit_button) {
    const notes_container_1 = document.getElementsByClassName('notes-container-1')[0] ; 
    const notes_container_2 = document.getElementsByClassName('notes-container-2')[0] ;
    const notes_container_3 = document.getElementsByClassName('notes-container-3')[0] ;  
    const all_notes_container = [notes_container_1, notes_container_2, notes_container_3]
    
    function make_one_note (title, description) {
        let singular_note = `
        <div class="display-note" id="${title}">
            <div class="title-and-icons">
                <p class="display-title">${title}</p>
                <div class="note-delete-edit">
                <img class="edit-pencil" id="note-edit" src="./pencil-outline.svg" alt="pencil">
                <div class="delete-icon" id="note-delete">x</div>
                </div>
            </div>
            `
            
        let description_cpy = '' ; 
        for (let i = 0 ; i < description.length ; i++){
            if (description[i] == "\n") {
                description_cpy += '<br>' ; 
            }
            description_cpy += description[i] ; 
        }

        singular_note += `
        <p class="display-note-contents">${description_cpy}</p>
        </div>
        `

        return singular_note ; 
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

        function edit_note (element) {
            const note_title = document.getElementById("note-title-input") ; 
            const note_contents = document.getElementById("note-description-input") ; 
            let title = element.parentElement.previousSibling.previousSibling.textContent ;  
            let text = element.parentElement.parentElement.nextSibling.nextSibling.innerText ;
            note_title.value = title ; 
            note_contents.value = text ; 

            all_notes_object.delete_note(title) ; 
            activate_edit_button() ; 
        }


        all_delete_icons.forEach( (element) => {
            element.addEventListener('click', () => { delete_note(element) })
        })

        all_edit_icons.forEach( (element) => {
            element.addEventListener('click', () => { edit_note(element) }) 
        })
    }


    function add_notes_to_display() {
    
        let counter = 0 ; 
        for (let this_object in all_notes_object.bucket_objects) {
            if (!all_notes_object.loaded_objects.includes(this_object)) {
            counter %= 3 ;  
            let note = make_one_note(this_object, all_notes_object.bucket_objects[this_object]) ; 
            note = elementFromHtml(note) ; 
            add_new_elements_evenly(notes_container_1, notes_container_2, notes_container_3, all_notes_container, 
                all_notes_object, counter, note, this_object) ; 
            counter += 1 ; 
            }
            
        }
        activate_note_buttons(all_notes_object) ;
    }
    
    add_notes_to_display(); 
    
} ; 

function make_toDos(all_todos_object, append_element, all_projects_object, activate_edit_button, low_priority, med_priority, high_priority) {

    let list_of_todos = all_todos_object.bucket_objects ; 
    let list_of_added_items = []; 
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
            let the_project_the_todo_belongs_to = all_projects_object.return_project_element(project_name.split("-")[0]) ; 
            the_project_the_todo_belongs_to.remove_to_do(project_name.split("-")[1]) ; 
            this_singular_todo.remove() ; 
            console.log(all_projects_object) ; 
            
        }

        function edit_todo (element) {
            const title_input = document.getElementById("todo-title-input") ; 
            const todo_description = document.getElementById("todo-description-input") ;
            const date_input = document.getElementById("todo-date-input") 
            const dropbtn = document.getElementsByClassName("dropbtn")[0] ; 
            const dropdown_todo = document.getElementById("dropdown-todo") ; 
            const low_priority_check = document.getElementById("low-priority") ; 
            const med_priority_check = document.getElementById("med-priority") ; 
            const high_priority_check = document.getElementById("high-priority") ;   
    

            let title = element.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.textContent ;
            let todo = all_todos_object.return_todo(title) ;
            title_input.value = todo.title ; 
            todo_description.value = todo.description ; 
            date_input.value = todo.due_date ; 
            if (todo.priority == "red"){
                high_priority() ; 
                high_priority_check.checked = true ; 
            }
            else if (todo.priority == "yellow"){
                med_priority() ; 
                med_priority_check.checked = true ; 
            }
            else {
                low_priority(); 
                low_priority_check.checked = true ; 
            }
            dropbtn.innerText = todo.project ; 
            all_projects_object.old_name = title ; 
            activate_edit_button() ; 
        }
    
        all_to_do_pencils.forEach( (element) => {
            element.addEventListener('click', (element) => { edit_todo(element) }) ;  
        })
    
        all_to_do_exit_buttons.forEach( (element) => {
            element.addEventListener('click', (element) => { delete_button(element) }) 
        })
    
    }

    document.querySelectorAll("#big-delete").forEach((thing) => {
        thing.parentElement.parentElement.remove() ; 
    })

    for (let this_object in array_of_objects){
        let todo = array_of_objects[this_object] 
        if (!list_of_added_items.includes(this_object)) {
            let append_todo = make_one_todo(todo.title, todo.due_date, todo.priority, todo.project, this_object) ; 
            append_element.append(append_todo) ; 
            all_todos_object.load(this_object) ; 
        }
    }

    make_to_do_buttons_function(all_todos_object, array_of_objects) ;  

}

function add_list_item_to_modal_list (list_item_name, append_element) {
    let list_item_string = `<li class="modal-list-item">${list_item_name}</li>` ; 
    let html_list_string = elementFromHtml(list_item_string) ; 
    append_element.append(html_list_string) ; 
} 

function display_projects_in_todo_dropdown(drop_down_element, drop_button, all_projects) {

    for (let object in all_projects.bucket_objects) {
        if (!all_projects.loaded_dropdown_objects.includes(object)){
            let new_element = `<p class="drop-down-item">${object}</p>` ; 
            drop_down_element.append(elementFromHtml(new_element)) ;
            all_projects.loaded_dropdown_objects.push(object) ;  
        }
    }
    const all_drop_down_elements = document.querySelectorAll(".drop-down-item") ;

    all_drop_down_elements.forEach( (thing) => {
        thing.addEventListener('click', () => {
            drop_button.innerText = thing.textContent ; 
        })
    } )
}

function remove_projects_in_todo_dropdown (all_projects){
    document.querySelectorAll('.drop-down-item').forEach( (element) => {
        element.remove() ; 
    })
}

function remove_all_note_elements () {
    document.querySelectorAll("#note-delete").forEach( (element) => {
        element.parentElement.parentElement.parentElement.remove(); 
    })
}

function remove_all_list_elements () {
    document.querySelectorAll("#list-exit").forEach( (element) => {
        element.parentElement.parentElement.parentElement.remove() ; 
    })
}

function remove_all_project_elements () {
    document.querySelectorAll("#project-exit").forEach( (element) => {
        element.parentElement.parentElement.parentElement.remove() ; 
    })
}

function remove_all_display_list () {
    document.querySelectorAll(".modal-list-item").forEach( (item) => {
        item.remove() ;
    })
}

export {
    make_toDos,
    make_notes, 
    make_lists, 
    make_projects, 
    add_list_item_to_modal_list, 
    display_projects_in_todo_dropdown, 
    remove_all_note_elements, 
    remove_all_list_elements, 
    remove_all_project_elements, 
    remove_all_display_list, 
    remove_projects_in_todo_dropdown, 
}