let the_html = `
<div class="go-across-menu">
        <ul>
            <li><a id="home" href="#">Home</a></li>
            <li><a id="menu" href="#">Menu</a></li>
            <li><a id="contact" href="#">Contact</a></li>
        </ul>
    </div>


    <div class="rest-container">

    
    <div class="henrys-dinner-title">
            <h1 id="full-blast">Henry's Amazing Diner</h1>
    </div>


    <div class="info">
        <div class="article">
            <h1>History</h1>
            <p>Henry's diner was founded in 1939 by Henry Jacobs himself and has been committed
                to serving the best damn omelette your sorry tongue will ever taste for over 83
                years!</p>
        </div>
        <div class="article">
            <h1>Directions</h1>
            <p>We are located in the upper east side of the one and only Manhattan, NY NY right off 32nd and Broadway.</p> 
        </div>
        <div class="article">
            <h1>Mission</h1>
            <p id="bump">As part of our mission to supporting our proud NY community, Henry's Amazing Diner donates over thirty percent of all profits made to local and state charities with the goal of eliminating hunger!</p>
        </div>

    </div>
    </div>
`

function elementFromHtml(html) {
    const template = document.createElement("template"); 
    template.innerHTML = html.trim() ; 
    return template.content; 
}

function build_home_page() { 
    const element = document.getElementById("content") ;
    let output = elementFromHtml(the_html);
    element.append(output);
    document.body.className = "first-page"
}


export { build_home_page } 