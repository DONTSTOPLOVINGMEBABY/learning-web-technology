import React from "react";
import GithubLogo from "../assets/github-logo.svg"
import "../styles.css/footer.css"

function Footer (props) {

    function openGithub() {
        window.open("https://www.github.com/DONTSTOPLOVINGMEBABY") ; 
    }

    return (
        <div className="footer">
            <img id="github-logo" onClick={openGithub} src={GithubLogo} alt="github logo"/>Henry Jacobs &#169;
        </div>
    )
}

export default Footer