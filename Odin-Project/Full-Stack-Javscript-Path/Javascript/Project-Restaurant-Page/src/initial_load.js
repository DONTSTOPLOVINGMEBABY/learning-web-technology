import greek_omelette from "./greek-omelette.jpg"

let main_html = `
<div class="go-across-menu">
        <ul>
            <li><a id="home" href="#">Home</a></li>
            <li><a id="menu" href="#">Menu</a></li>
            <li><a id="contact" href="#">Contact</a></li>
        </ul>
    </div>

    <div class="wrapper">
        <div class="menu">
            <div class="item">
                <h1>Greek Omelette</h1>
                <div class="side-by-side">
                    <img id="post-image" src="./greek-omelette.jpg" alt="Omelette">
                    <div class="info">
                    <p id="price">7.99</p>
                    <p>This omelette is sure to delight with all of its feta cheese, onions, peppers, and ham!</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <h1>Greek Omelette</h1>
                <div class="side-by-side">
                    <img id="post-image" src="./greek-omelette.jpg" alt="Omelette">
                    <div class="info">
                    <p id="price">7.99</p>
                    <p>This omelette is sure to delight with all of its feta cheese, onions, peppers, and ham!</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <h1>Greek Omelette</h1>
                <div class="side-by-side">
                    <img id="post-image" src="./greek-omelette.jpg" alt="Omelette">
                    <div class="info">
                    <p id="price">7.99</p>
                    <p>This omelette is sure to delight with all of its feta cheese, onions, peppers, and ham!</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <h1>Greek Omelette</h1>
                <div class="side-by-side">
                    <img id="post-image" src="./greek-omelette.jpg" alt="Omelette">
                    <div class="info">
                    <p id="price">7.99</p>
                    <p>This omelette is sure to delight with all of its feta cheese, onions, peppers, and ham!</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <h1>Greek Omelette</h1>
                <div class="side-by-side">
                    <img id="post-image" src="./greek-omelette.jpg" alt="Omelette">
                    <div class="info">
                    <p id="price">7.99</p>
                    <p>This omelette is sure to delight with all of its feta cheese, onions, peppers, and ham!</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <h1>Greek Omelette</h1>
                <div class="side-by-side">
                    <img id="post-image" src="./greek-omelette.jpg" alt="Omelette">
                    <div class="info">
                    <p id="price">7.99</p>
                    <p>This omelette is sure to delight with all of its feta cheese, onions, peppers, and ham!</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <h1>Greek Omelette</h1>
                <div class="side-by-side">
                    <img id="post-image" src="./greek-omelette.jpg" alt="Omelette">
                    <div class="info">
                    <p id="price">7.99</p>
                    <p>This omelette is sure to delight with all of its feta cheese, onions, peppers, and ham!</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <h1>Greek Omelette</h1>
                <div class="side-by-side">
                    <img id="post-image" src="./greek-omelette.jpg" alt="Omelette">
                    <div class="info">
                    <p id="price">7.99</p>
                    <p>This omelette is sure to delight with all of its feta cheese, onions, peppers, and ham!</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <h1>Greek Omelette</h1>
                <div class="side-by-side">
                    <img id="post-image" src="./greek-omelette.jpg" alt="Omelette">
                    <div class="info">
                    <p id="price">7.99</p>
                    <p>This omelette is sure to delight with all of its feta cheese, onions, peppers, and ham!</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <h1>Greek Omelette</h1>
                <div class="side-by-side">
                    <img id="post-image" src="./greek-omelette.jpg" alt="Omelette">
                    <div class="info">
                    <p id="price">7.99</p>
                    <p>This omelette is sure to delight with all of its feta cheese, onions, peppers, and ham!</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <h1>Greek Omelette</h1>
                <div class="side-by-side">
                    <img id="post-image" src="./greek-omelette.jpg" alt="Omelette">
                    <div class="info">
                    <p id="price">7.99</p>
                    <p>This omelette is sure to delight with all of its feta cheese, onions, peppers, and ham!</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <h1>Greek Omelette</h1>
                <div class="side-by-side">
                    <img id="post-image" src="./greek-omelette.jpg" alt="Omelette">
                    <div class="info">
                    <p id="price">7.99</p>
                    <p>This omelette is sure to delight with all of its feta cheese, onions, peppers, and ham!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`


function elementFromHtml(html) {
    const template = document.createElement("template"); 
    template.innerHTML = html.trim() ; 
    return template.content; 
}


function build_entire_menu_page(){
    const element = document.getElementById('content');
    let output = elementFromHtml(main_html);
    element.append(output);
    document.querySelectorAll('#post-image').forEach( (element) => {
        element.src=greek_omelette;
    })
}




export { build_entire_menu_page } 