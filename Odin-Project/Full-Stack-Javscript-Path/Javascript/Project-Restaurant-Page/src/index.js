import { build_entire_menu_page } from "./initial_load";
import { build_home_page } from "./home"
import { build_contact_page } from "./contact";
import { remove } from "./clean"


let home, menu, contact ;


function get_buttons(){
    home = document.getElementById("home"); 
    menu = document.getElementById("menu"); 
    contact = document.getElementById("contact");

    home.addEventListener('click', () => {home_page_compiled()});
    menu.addEventListener('click', () => {menu_compiled()});
    contact.addEventListener('click', () => {contact_page_compiled()});
}



build_entire_menu_page();
get_buttons();


function menu_compiled() { 
    remove();
    build_entire_menu_page();
    get_buttons();
} 


function home_page_compiled () {
    remove(); 
    build_home_page();
    get_buttons();
}

function contact_page_compiled() { 
    remove(); 
    build_contact_page(); 
    get_buttons();
}
