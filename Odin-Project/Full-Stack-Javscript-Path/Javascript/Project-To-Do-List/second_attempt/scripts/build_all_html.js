function elementFromHtml(html) {
    const template = document.createElement("template"); 
    template.innerHTML = html.trim() ; 
    return template.content; 
}

function make_projects(list_of_projects, append_element) {} ; 
function make_lists(list_of_lists, append_element) {} ; 
function make_notes(list_of_notes, append_element) {} ; 

function make_toDos(all_todos_object, append_element) {

    let list_of_todos = all_todos_object.bucket_objects ; 
    let list_of_added_items = all_todos_object.array_of_loaded_objects ; 
    let array_of_objects = all_todos_object.array_of_objects ; 

    function make_one_todo (title, due_date, priority, project){
        const singular_todo = `
        <div class="singular-todo" id="the-${project}">
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

    for (let todo in list_of_todos){
        let found = false ; 
        for (let added_object in list_of_added_items){
            if (added_object != todo) { continue }
            else if (added_object == todo) { 
                found = true ; 
                break ;
            }
        }
        if (found) {continue} 
        else {
            let string = todo + "-" + list_of_todos[todo]
            let todo_from_list = array_of_objects[string]
            let append_todo = make_one_todo(todo_from_list.title, todo_from_list.due_date, todo_from_list.priority, todo_from_list.project) ; 
            append_element.append(append_todo) ; 
            all_todos_object.load_object(todo_from_list) ; 
        }
    }
    
    make_to_do_buttons_function(all_todos_object, array_of_objects) ; 

}

function make_to_do_buttons_function (all_todos_object, array_of_objects) {
    const all_to_do_pencils = document.querySelectorAll('#big-pencil') ; 
    const all_to_do_exit_buttons = document.querySelectorAll("#big-delete") ; 

    function delete_button (element) {
        let this_singular_todo = element.target.parentElement.parentElement ; 
        let project_name = this_singular_todo.id.split("-")[1] ; 
        let grab_todo = project_name + "-" + all_todos_object.bucket_objects[project_name] ; 
        grab_todo = all_todos_object.array_of_objects[grab_todo]
        all_todos_object.delete_object(grab_todo) ; 
        this_singular_todo.remove() ; 
    }

    all_to_do_pencils.forEach( (element) => {
        element.addEventListener('click', () => { console.log("Working for me") }) 
    })

    all_to_do_exit_buttons.forEach( (element) => {
        element.addEventListener('click', (element) => { delete_button(element) }) 
    })

}






export {
    make_toDos,
}