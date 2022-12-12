
function elementFromHtml(html) {
    const template = document.createElement("template"); 
    template.innerHTML = html.trim() ; 
    return template.content; 
}

const view_all_to_dos_string = `
<div class="view-all-todos">
<ul id="all-todos-list"></ul>
</div>
`

const no_projects_string = `
<div class="no_projects">
You don't have any projects. Click the button to make one => 
<button id="make-project">Make Project</button>
</div>
`

const display_projects_string = `
<div class="display-projects">
<div class="projects">
    <ul id="side-bar-list">
    </ul>
</div>
<div class="show_related_info">
    <div id="project-info-title">Project Info Title</div>
    <div id="project-info-description">Project Info Description</div>
    <div id="project-info-due-date">Project Info Due Date</div>
    <div id="project-info-priority">Project Priority</div>
    <ul id="project-info-todos"></ul>
</div>
</div>
`

const make_project_form_string = `
<div class="make-project">
<form id="project-form">
    <input type="text" id="project-name" name="project_name" placeholder="Project Name" required>
    <p id="paragraph-placeholder">Project Due Date <input type="date" id="project-due-date" name="project-due-date" placeholder="Project Due Date" required></p>
    <textarea id="project-description" name="project-description" cols="20" rows="4">Project Description (optional)</textarea>
    <button type="submit">Create Project</button>
</form>
</div>
`


const view_all_to_dos_html = elementFromHtml(view_all_to_dos_string) ; 
const no_projects_html = elementFromHtml(no_projects_string) ; 
const display_projects_html = elementFromHtml(display_projects_string) ; 
const make_project_form_html = elementFromHtml(make_project_form_string) ; 


function display_project (object_list, dom_parent_element) {
    dom_parent_element.append(display_projects_html) ; 
    const side_bar_list = document.getElementById("side-bar-list");
    const project_info_title = document.getElementById("project-info-title");
    const project_info_description = document.getElementById("project-info-description");
    const project_info_due_date = document.getElementById("project-info-due-date"); 
    const project_info_priority = document.getElementById("project-info-priority");

    for (let i = 0 ; i < object_list.length ; i++) {
        let list_string = `<li class="list-of-projects" id="${object_list[i].name}" >
        ${object_list[i].name}<img src="./delete.png" class="del-project"></img></li>` ; 
        let html_string = elementFromHtml(list_string) ; 
        side_bar_list.append(html_string);
    }

    function add_listeners (element) {
        element.addEventListener('click', () => {
            for (let i = 0 ; i < object_list.length ; i++) {
                if (element.id == object_list[i].name) {
                    project_info_title.textContent = object_list[i].name ;   
                    project_info_description.textContent = object_list[i].description ; 
                    project_info_due_date.textContent = object_list[i].due_date ; 
                    project_info_priority.textContent = object_list[i].priority ; 
                }
            }
        })
    }


    const all_objects = document.querySelectorAll(".list-of-projects") ; 
    all_objects.forEach(add_listeners) ; 
    project_info_title.textContent = object_list[0].name ;   
    project_info_description.textContent = object_list[0].description ; 
    project_info_due_date.textContent = object_list[0].due_date ; 
    project_info_priority.textContent = object_list[0].priority ; 

}

function make_no_project_page (dom_element) {
    dom_element.append(no_projects_html);
    const button = document.getElementById("make-project") ; 
    button.addEventListener('click', () => {
        dom_element.firstElementChild.remove() ; 
        dom_element.append(make_project_form_html);
    })

}


function check_if_any_remain (object_list, dom_element) {
    if (object_list.length == 0) {
        dom_element.firstElementChild.remove();
        make_no_project_page(dom_element);
    }
}



export { 
    view_all_to_dos_html, 
    no_projects_html, 
    display_projects_html, 
    make_project_form_html, 
    display_project, 
    check_if_any_remain, 
};