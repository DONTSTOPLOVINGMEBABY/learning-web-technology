import { useNavigate } from "react-router-dom"


export default function Single () {

    const navigate = useNavigate() ; 

    return (
        <div className="HomePage" style={{color: "green" , border: "4px solid green"}}>
            Hello
            <button onClick={() => navigate("/")}>Click me</button>
        </div>
    )
}

