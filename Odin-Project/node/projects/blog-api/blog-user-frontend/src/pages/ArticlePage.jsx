import styles from "./styles/articlepage.module.css"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import parse from 'html-react-parser';
import home from "../assets/home.svg"


function ArticlePage () {

    const { articleId } = useParams()
    const navigate = useNavigate()
    const [articleData, setArticleData] = useState()
    const [articleComments, setArticleComments] = useState()
    const [checked, setChecked] = useState()

    function go_home () {
        navigate("/blog")
    }
 
    const fetchArticle = async () => {
        let articleData = await fetch(`http://localhost:3001/articles/${articleId}`, {
            method: 'GET', 
        }) 
        if (!articleData.ok){ navigate("/blog") }
        articleData = await articleData.json() 
        console.log(articleData)
        setArticleData(articleData.article)
        setArticleComments(articleData.comments)
        setChecked(articleData.article.published)
        console.log(elementFromHtml(articleData.article.content))
    }


    useEffect( () => {
        if (articleId){ fetchArticle() }
    }, [articleId])


    return (
        <>
            { articleData ?  
                <div id={styles.article_container}>
                    <div id={styles.article}>
                        <div id={styles.categories_and_menu}>
                            <span id={styles.categories}>{articleData.categories.join("|")}</span>
                            <img src={home} id={styles.lil_home} alt="home" onClick={go_home}/>
                        </div>
                        <span id={styles.title} dangerouslySetInnerHTML={{ __html : parse(articleData.title) }}></span>
                        <span id={styles.subtitle} dangerouslySetInnerHTML={{ __html : parse(articleData.subtitle) }}></span>
                        <div id={styles.article_title_author}>
                            <span id={styles.author}>By {articleData.author}</span>
                        </div>
                        <span id={styles.date}>{articleData.date}</span>
                        <span id={styles.content}> 
                            <div dangerouslySetInnerHTML={{ __html : parse(articleData.content)}}></div>
                        </span>
                    </div> 
                </div>
            : null } 
        </>
    )
}

export default ArticlePage