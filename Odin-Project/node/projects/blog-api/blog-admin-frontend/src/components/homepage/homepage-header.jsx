import { useNavigate } from 'react-router-dom'
import styles from '../styles/homepage-header.module.css'
import online_icon from '../../assets/green-circle.svg'
import offline_icon from '../../assets/red-circle.svg'

function Header({publishedLength, unpublishedLength}) {

    // Hooks 
    const navigate = useNavigate()


    const coming_soon = () => {
        alert("Coming soon")
    }

    const create_new_post = () => {
        navigate("/admin/create-article")
    }
    
    return (
        <div id={styles.header}>
            <div id={styles.metrics}>
                <span id={styles.metrics_title}>Quick Metrics</span>
                <div id={styles.published_status_container}>
                    <span className={styles.publish_status_span}><img src={online_icon} className={styles.publish_status_icon}/>{publishedLength} { publishedLength == 1 ? 'article' : 'articles'} published</span>
                    <span className={styles.publish_status_span}><img src={offline_icon} className={styles.publish_status_icon}/>{unpublishedLength} { unpublishedLength == 1 ? 'article' : 'articles'} unpublished</span>
                </div>
            </div>
            <span id={styles.header_title}>Admin Dashboard</span>
            <div id={styles.admin_buttons}>
                <button onClick={create_new_post} id={styles.create_new_post}>Create New Post</button>
                <button onClick={coming_soon} id={styles.all_metrics}>View All Metrics</button>
            </div>
        </div>
    )
}

export default Header