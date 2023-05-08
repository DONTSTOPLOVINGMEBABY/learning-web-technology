import styles from "./styles/header.module.css"

function Header (props) {
    return (
        <div id={props.id}>
            A Blog (with lots of stolen content!)
        </div>
    )
}

export default Header