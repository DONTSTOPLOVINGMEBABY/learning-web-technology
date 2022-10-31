const container = document.querySelector('#container');


const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';


const para = document.createElement('p'); 
para.classList.add('theparagraph'); 
para.textContent = "Hey I'm Red";
para.style.color = "red";

const bigH = document.createElement('h1');
bigH.classList.add('theh1');
bigH.textContent = "Hey I'm a blue h1";
bigH.style.color = "blue";

const watchmewhip = document.createElement('h3');
watchmewhip.classList.add('class-watch-me-whip');
watchmewhip.textContent = "Watch me whip";
watchmewhip.style.color = "maroon";


const watchmedis = document.createElement('h3');
watchmedis.classList.add('class-watch-me-dis');
watchmedis.textContent = "Now watch me dissapear";
watchmedis.style.color = "maroon";


const myDiv = document.createElement('div');
myDiv.classList.add('myDiv');
myDiv.style.backgroundColor = "black" ;
myDiv.setAttribute('style', 'border: black; background: pink');


const nowH3 = document.createElement('h3'); 
nowH3.classList.add('the-h3');
nowH3.textContent = "I'm in a div!";

const divpara = document.createElement('p') ; 
divpara.classList.add('okay-baby');
divpara.textContent = "ME TOO!";


myDiv.appendChild(nowH3); 
myDiv.appendChild(divpara);


//Code for the button 
const btn = document.querySelector('#btn');
btn.onclick = () => alert("HELLO WORLD!");

function redirect (arg) {
    window.open("https://www.youtube.com/watch?v=uPudE8nDog0&ab_channel=TheHumanLeagueVEVO");
}
const nice_btn = document.getElementById("last-btn");
nice_btn.addEventListener('click', redirect);


const fancy_button = document.getElementById("btn3");
fancy_button.addEventListener('click', function (e) {
    alert("Definitely not the one you should have clicked.");
}) ;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
   
    button.addEventListener('click', (e) => {
        if (counter % 2 == 0) {
            e.target.style.background = "blue" ;} 
            else {
                e.target.style.background = "red" 
            }
    })
        
})


container.appendChild(content);
container.appendChild(para);
container.appendChild(bigH);
container.append(watchmewhip);
container.insertBefore(watchmewhip, content); // will obey most recent insert, so it puts it before
container.append(myDiv);

//parentNode.insertBefore(newNode, referenceNode) inserts newNode into parentNode before referenceNode

setTimeout( () => {
    container.removeChild(watchmewhip); 
    container.insertBefore(watchmedis, content);
    setTimeout( () => {container.removeChild(watchmedis);}, 1500);
}, 
3000);


let exampleGet = watchmedis.getAttribute('class');
console.log(exampleGet);


const paragraph_nodelist = document.querySelectorAll("p"); 
paragraph_nodelist[2].style.backgroundColor = "red";
paragraph_nodelist[2].style.fontWeight = "bolder";
paragraph_nodelist[2].style.fontSize = "18px";

let fontcounter = 16; 



const paragraph_button = document.getElementById("fontbutton");
paragraph_button.addEventListener('click', () => {paragraph_nodelist.forEach((node) => {
    node.style.fontSize = `${fontcounter}px`; 
    if (fontcounter < 42) {fontcounter += 1 ;}
    else {fontcounter = 16};
}) ;
});