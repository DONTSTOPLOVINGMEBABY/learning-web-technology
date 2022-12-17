function elementFromHtml(html) {
    const template = document.createElement("template"); 
    template.innerHTML = html.trim() ; 
    return template.content; 
}

const todos_already_loaded = {} ; 


function make_toDos(list_of_todos, append_element) {

    function make_one_todo (title, due_date, priority, project){
        const singular_todo = `
        <div class="singular-todo">
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

    for (let i = 0 ; i < list_of_todos.length ; i++){

        if (!todos_already_loaded[list_of_todos[i].project]) {
            let todo = make_one_todo(list_of_todos[i].title, list_of_todos[i].due_date, list_of_todos[i].priority, list_of_todos[i].project) ; 
            append_element.append(todo)
            todos_already_loaded[list_of_todos[i].project] = list_of_todos[i].title ; 
        }
    }

    console.log(todos_already_loaded); 

}



export {
    make_toDos,
}