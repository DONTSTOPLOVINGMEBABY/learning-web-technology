let container = document.getElementsByClassName('everything-books');
container = container[0]

document.getElementById("bring_up_form").addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'flex'; 
});

function closeForm() {
    document.querySelector('.bg-modal').style.display = 'none'; 
}


document.getElementById("add-book").addEventListener('click', (ev) => {
    const title = document.getElementById('title'); 
    const author = document.getElementById('author'); 
    const pages = document.getElementById('page-number');
    const completed = document.getElementsByName('completed')
    const form = document.getElementById(`the-form`);
    let which_completed = ''; 

    if (check_if_already_displayed(title.value)){
        title.setCustomValidity("Once a non-used title is supplied, form will submit");
    }
    else {
        title.setCustomValidity("");
    }

    if (title.checkValidity() && author.checkValidity() && pages.checkValidity()) {
        ev.preventDefault();
        for (let i = 0 ; i < completed.length ; i++) {
            if (completed[i].checked) {
                which_completed = completed[i].id;
            }
        }
        closeForm() ; 
        const newBook = addBookToLibrary(title.value, author.value, pages.value, which_completed);
        display_book(newBook);
        title.value = ''; 
        author.value = ''; 
        pages.value = '';
        return ; 
    }

})


function shrink_string(string) {
    string = string.replace(/\s/g, '');
    return string;
}

function check_if_already_displayed(book_title){
    for (let ctr = 0 ; ctr < displayed_books.length; ctr++){
        let existing_book = shrink_string(displayed_books[ctr]).toLowerCase();
        let new_book = shrink_string(book_title).toLowerCase(); 

        if (existing_book == new_book) {return true} ;  
    }
    return false;
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
        <p id="book-pages">${book.pages} pages</p>
        <button class="read-button" onclick="change_read_button(this.id)">Read</button>
        <button class="delete-button" onclick="delete_book(this.id)">Delete</button>
        `

    const parent_div = document.createElement('div') ;
    parent_div.classList.add(`book`);
    parent_div.setAttribute('id', `k${shrink_string(book.title)}`);
    string = elementFromHtml(string);
    parent_div.append(string);
    const read_button = Array.from(parent_div.childNodes)[6];
    read_button.setAttribute(`id`, `b${shrink_string(book.title)}`)
    const delete_button = Array.from(parent_div.childNodes)[8];
    delete_button.setAttribute('id', `d${shrink_string(book.title)}`);

    if (book.completed == 'havent-started') {
        read_button.style.backgroundColor = '#FF6525' ;
        read_button.textContent = `Haven't Started`;
    }
    else if (book.completed == 'currently-reading'){
        read_button.style.backgroundColor = '#F0F125' ;
        read_button.textContent = `Reading`;
    }
    else if (book.completed == 'finished'){
        read_button.style.backgroundColor = '#62FF6B' ;
        read_button.textContent = `Finished`; 
    }

    container.append(parent_div);
    displayed_books.push(book.title);
}


function delete_book(clicked_id) {
    const element = document.getElementById(clicked_id);
    element.parentElement.remove();
}

function change_read_button(clicked_id) {
    const read_button = document.getElementById(clicked_id);
    
    if (read_button.textContent == `Haven't Started`) {
        read_button.style.backgroundColor = '#F0F125' ;
        read_button.textContent = `Reading`;
    }
    else if (read_button.textContent == 'Reading') {
        read_button.style.backgroundColor = '#62FF6B' ;
        read_button.textContent = `Finished`; 
    }
    else if (read_button.textContent == 'Finished') {
        read_button.style.backgroundColor = '#FF6525' ;
        read_button.textContent = `Haven't Started`;
    }
}




let myLibrary = [] ;
let displayed_books = [] ;


function Book(title, author, pages, completed){
    this.title = title ; 
    this.author = author ; 
    this.pages = pages ; 
    this.completed = completed
}

function addBookToLibrary(title, author, pages, completed) {
    const pushBook = new Book(title, author, pages, completed);
    myLibrary.push(pushBook);
    return pushBook;
}

const lotr = new Book("Lord of the Rings", "J. R. R. Tolkien", 1178, 'havent-started'); 
const normal_people = new Book("Normal People", "Sally Rooney", 350, 'completed'); 
const ninteen_84 = new Book("1984", "George Orwell", 312, false); 

myLibrary.push(lotr, normal_people, ninteen_84);
console.log(myLibrary);


display_book(lotr);
display_book(lotr);
display_book(lotr);
display_book(lotr);
display_book(lotr);
display_book(lotr);



