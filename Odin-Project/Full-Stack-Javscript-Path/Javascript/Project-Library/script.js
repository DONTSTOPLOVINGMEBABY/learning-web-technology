let container = document.getElementsByClassName('everything-books');
container = container[0]

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
    console.log(which_completed);
})


function shrink_string(string) {
    string = string.replace(/\s/g, '');
    return string;
}



function display_book (book) {

    function elementFromHtml(html) {
        const template = document.createElement("template"); 
        template.innerHTML = html.trim() ; 
        return template.content; 
    }

    let string = 
        `
        <p id="book-title"><i>${book.title}</i></p>
        <p id="book-author">${book.author}</p>
        <p id="book-pages">${book.pages}</p>
        <button id="read-button">Read</button>
        <button id="delete-button">Delete</button>
        `

    const parent_div = document.createElement('div') ;
    parent_div.classList.add(`book`, `${shrink_string(book.title)}`);
    string = elementFromHtml(string);
    parent_div.append(string);


    // if (book.completed == 'havent-started') {
    //     read_button.style.backgroundColor = '#FF6525'
    // }
    // else if (book.completed == 'currently-reading'){

    // }
    // else if (book.completed == 'finished'){

    // }


    container.append(parent_div);
    added_books.push(book.title);
}


let myLibrary = [] ;
let added_books = [] ;


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

const lotr = new Book("Lord of the Rings", "J. R. R. Tolkien", 1178, 'havent-started'); 
const normal_people = new Book("Normal People", "Sally Rooney", 350, false); 
const ninteen_84 = new Book("1984", "George Orwell", 312, false); 

myLibrary.push(lotr, normal_people, ninteen_84);
console.log(myLibrary);


display_book(lotr);
