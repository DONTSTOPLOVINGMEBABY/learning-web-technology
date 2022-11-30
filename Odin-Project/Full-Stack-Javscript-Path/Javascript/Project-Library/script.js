const books_div = document.getElementsByClassName('book-list');



document.getElementById("bring_up_form").addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'flex'; 
});

function closeForm() {
    document.querySelector('.bg-modal').style.display = 'none'; 
}

document.getElementById("add-book").addEventListener('click', (ev) => {
    ev.preventDefault();
    const title = document.getElementById('title'); 
    const author = document.getElementById('author'); 
    const pages = document.getElementById('page-number');
    const completed = document.getElementsByName('completed')
    let which_completed = ''; 

    for (let i = 0 ; i < completed.length ; i++) {
        if (completed[i].checked) {
            which_completed = completed[i].id;
        }
    }
    closeForm() ; 
    addBookToLibrary(title.value, author.value, pages.value, which_completed);
    console.log(myLibrary);
})


// function elementFromHtml(html) {
//     const template = document.createElement("template"); 
//     template.innerHTML = html.trim() ; 
//     return template.content.firstElementChild; 
// }

// let hello = elementFromHtml(`
// <ul>
//             <li>Hello</li>
//             <li>Hello my name is</li>
//             <li>Okay, let's go</li>
//         </ul>
// `)


// books_div[0].appendChild(hello);



let myLibrary = [] ;


function Book(title, author, pages, completed){
    this.title = title ; 
    this.author = author ; 
    this.pages = pages ; 
    this.completed = completed
}

function addBookToLibrary(title, author, pages, completed) {
    const pushBook = new Book(title, author, pages, completed);
    myLibrary.push(pushBook);
}

const lotr = new Book("Lord of the Rings", "J. R. R. Tolkien", 1178, false); 
const normal_people = new Book("Normal People", "Sally Rooney", 350, false); 
const ninteen_84 = new Book("1984", "George Orwell", 312, false); 

myLibrary.push(lotr, normal_people, ninteen_84);
console.log(myLibrary);