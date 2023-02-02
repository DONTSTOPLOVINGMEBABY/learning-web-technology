import React from "react";
import GithubLogo from "../assets/github-logo.svg"
import "../styles.css/footer.css"

function Footer (props) {

    document.getElementById("github-logo").addEventListener('click', ()=>{
        window.open("https://www.github.com/DONTSTOPLOVINGMEBABY") 
    })

    return (
        <div className="footer">
            <img id="github-logo" src={GithubLogo} alt="github logo"/>Henry Jacobs &#169;
        </div>
    )
}

export default Footer