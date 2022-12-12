import { make_note, make_project, make_to_do, make_shopping_list, all_to_dos, all_notes, 
all_projects, all_shopping_lists, } from "./objects.js";

import { view_all_to_dos_html, no_projects_html, display_projects_html, 
make_project_form_html, display_project, check_if_any_remain } from "./all-html-generation.js";

const to_dos = new all_to_dos(); 
const notes = new all_notes(); 
const projects = new all_projects(); 
const shopping_lists = new all_shopping_lists(); 

const projects_tab = document.getElementById("projects-tab"); 
const shopping_lists_tab = document.getElementById("shopping-lists-tab") ; 
const notes_tab = document.getElementById("notes-tab"); 
const view_all_to_do_tab = document.getElementById("view-all-to-do-tab"); 
const fill_content = document.getElementById("fill-content"); 


const yes = make_project("Yes", "nice", "12/2/22", projects);
const no = make_project("No", "nice", "12/2/22", projects);


projects_tab.addEventListener('click', () => {
    if (projects.all_projects.length == 0) {
        fill_content.append(no_projects_html);
    }
    else {
        display_project(projects.all_projects, fill_content);
        const all_trash_cans = document.querySelectorAll(".del-project") ; 
        all_trash_cans.forEach( (element) => {
            element.addEventListener('click', () => {
                for (let i = 0 ; i < projects.all_projects.length ; i++) {
                    if (element.parentElement.id == projects.all_projects[i].name) {
                        projects.all_projects.splice(i, 1);
                        element.parentElement.remove();
                        console.log(projects.all_projects);
                    }
                    check_if_any_remain(projects.all_projects, fill_content);
                }
            })
        }) ; 
    }
    console.log("Hello");
})


