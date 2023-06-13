import "../App.css"

export default function Message (props) {
    return ( 
        <div className="message">
            <h5>{props.name}</h5>
            <p>{props.message}</p>
        </div> 
    )
}