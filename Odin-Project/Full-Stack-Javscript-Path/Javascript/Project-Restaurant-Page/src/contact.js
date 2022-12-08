let contact_html = `
<div class="go-across-menu">
        <ul>
            <li><a id="home" href="#">Home</a></li>
            <li><a id="menu" href="#">Menu</a></li>
            <li><a id="contact" href="#">Contact</a></li>
        </ul>
    </div>

    <div class="rest-content">
        <div class="form">
            <form>
                <fieldset>
                        <div class="first-last">
                            <div class="cell">
                                <label for="first_name">First Name</label>
                                <input type="text" id="first_name" name="first_name">
                            </div>
                            <div class="cell" id="move">
                                <label for="last_name">Last Name</label>
                                <input type="text" id="last_name" name="last_name">
                            </div>
                        </div>  
                        <div class="email-phone">
                            <div class="cell">
                                <label for="email">Email</label>
                                <input type="email" id="email">
                            </div>
                            <div class="cell">
                                <label for="phone-number">Phone number</label>
                                <input type="text" id="phone-number">
                            </div>
                        </div>
                </fieldset>
                    <input id="submitbutton" type="submit" value="Contact">
                </div>
</div>
`

function elementFromHtml(html) {
    const template = document.createElement("template"); 
    template.innerHTML = html.trim() ; 
    return template.content; 
}

function build_contact_page () {
    const element = document.getElementById("content"); 
    let output = elementFromHtml(contact_html) ;
    element.append(output);
    document.body.className = "contact"
}


export { build_contact_page }