import styles from "./styles/homepage.module.css"
import Header from "../components/header"
import SideBarHome from "../components/sidebar-home"
import { useEffect, useState } from "react"
import ArticlePreview from "../components/article-preview"

function HomePage () {

    const [articleData, setArticleData] = useState()
    
    const fetchArticleData = async () => {
        let articles = await fetch("http://localhost:3001/", {
            method: 'GET', 
            headers : {
                'Content-Type' : 'application/json', 
            }
        })
        if (!articles.ok){ alert("failed") ; return }
        articles = await articles.json()
        setArticleData(articles)
    }




    useEffect( () => {
        fetchArticleData()
    }, [])


    return (
        <>
            { articleData ?  
                <div id={styles.homepage_wrapper}>
                    <Header id={styles.header}/> 
                    <SideBarHome setCriteria={setArticleData} criteria={articleData} id={styles.sidebar_home}/> 
                    <div id={styles.homepage_content}>
                        { articleData.map( (article) => {
                            return <ArticlePreview author={article.author} 
                            subtitle={article.subtitle}
                            title={article.title}
                            uploadDate={article.uploadDate}
                            id={article._id}
                            key={article._id}
                            />
                        })}
                    </div>
            </div> : null } 
        </>
    )
}

export default HomePage



/* 

What's the functionality that we need? 

1. Filter article by category, author, date 

2. We need to see all published categories and be able to load into their respective pages 

3. We need to be able to make comments (and also therefore login)

4. 


*/ 