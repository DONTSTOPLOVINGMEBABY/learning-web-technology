import styles from "./styles/article-preview.module.css"
import { useNavigate } from "react-router-dom"

function ArticlePreview ({
        author, 
        subtitle, 
        title, 
        uploadDate, 
        id
    }){

    const navigate = useNavigate()

    const load_article = async () => {
        navigate(`/articles/${id}`)
    }

    return (
        <div onClick={load_article} className={styles.article_preview}>
            <h1 className={styles.article_title}>{title}</h1>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <h3 className={styles.author}>By: {author}</h3>
            <h3 className={styles.date}>Originally Uploaded: {`${new Date(uploadDate).getMonth() + 1}/${new Date(uploadDate).getDay()}/${new Date(uploadDate).getFullYear()}`}</h3>
        </div>
    )
}

export default ArticlePreview