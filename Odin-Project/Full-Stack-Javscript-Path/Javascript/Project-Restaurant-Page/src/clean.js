function elementFromHtml(html) {
    const template = document.createElement("template"); 
    template.innerHTML = html.trim() ; 
    return template.content; 
}


function remove () {
    let content = `<div id="content"></div>`;
    document.getElementById("content").remove();
    document.body.append(elementFromHtml(content)); 
}


export { remove } 




