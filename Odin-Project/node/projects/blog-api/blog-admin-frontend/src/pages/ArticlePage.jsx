import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Switch from "react-switch";
import authenticate_jwt from "../utils/auth-jwt";
import parse from 'html-react-parser';
import styles from "./styles/ArticlePage.module.css"
import home from "../assets/home.svg"


function ArticlePage () {

    const { articleId } = useParams()
    const navigate = useNavigate()
    const [articleData, setArticleData] = useState()
    const [articleComments, setArticleComments] = useState()
    const [checked, setChecked] = useState()

    function go_home () {
        navigate("/admin/home")
    }
 
    const fetchArticle = async () => {
        let articleData = await fetch(`http://localhost:3001/admin/articles/${articleId}`, {
            method: 'GET', 
            headers: {
                'Authorization' : `Bearer ${authenticate_jwt()}`
            }
        }) 
        if (!articleData.ok){ navigate("/admin/home") }
        articleData = await articleData.json() 
        console.log(articleData)
        setArticleData(articleData.article)
        setArticleComments(articleData.comments)
        setChecked(articleData.article.published)
        console.log(elementFromHtml(articleData.article.content))
    }

    const publish_unpublish_article = async () => {
        let changeStatus = await fetch(`http://localhost:3001/admin/make-article-live/${articleId}`, {
            method: 'POST', 
            headers : {
                'Authorization' : `Bearer ${authenticate_jwt()}`
            }
        })
        if (changeStatus.ok){ setChecked(!checked) }
        else { alert("Error Changing Document Status") }
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
                            <div id={styles.publish_button}>
                                <span id={styles.published_unpublished_txt}>
                                    PUBLISH STATUS
                                </span>
                                <Switch 
                                checked={ checked }
                                onChange={publish_unpublish_article}
                                />
                            </div>
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