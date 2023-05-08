import styles from "./styles/sidebar.module.css"
import { useState, useEffect, useRef, createRef } from "react"

function SideBarHome ( props ) {
    
    const [allAuthors, setAllAuthors] = useState()
    const [allCategories, setAllCategories] = useState()
    const [holdRefs, setHoldRefs] = useState()
    const authorRef = useRef()

    const get_categories = async () => {
        let authors = new Set()
        let categories = new Set()
        props.criteria.forEach( (post) => {
            authors.add(post.author)
            post.categories.forEach( category => {
                categories.add( category )
            })
        })
        setAllAuthors([...authors])
        setAllCategories([...categories])
        authors.forEach( (author) => {
            setHoldRefs( prevState => [...categories].map(() => createRef())) 
        })
    }

    const setAuthor = async () => {
        let new_author = authorRef.current.value
        let articles = await fetch("http://localhost:3001/", {
            method: 'GET', 
            headers : {
                'Content-Type' : 'application/json', 
            }
            })
        if (!articles.ok){ return }
        articles = await articles.json()
        if (new_author === 'all') { props.setCriteria(articles) ; return}
        let newAuthors = articles.filter( story => story.author === new_author )
        console.log(newAuthors)
        props.setCriteria(newAuthors)
    }

    const call_me = async () => {
        let checked = []
        holdRefs.forEach( (ref) => {
            if (ref.current.checked){
                checked.push(ref.current.name)
            }
        })
        let articles = await fetch("http://localhost:3001/", {
            method: 'GET', 
            headers : {
                'Content-Type' : 'application/json', 
            }
            })
        if (!articles.ok){ return }
        articles = await articles.json()
        if (checked.length == 0) { props.setCriteria(articles) ; return }
        if ( authorRef.current.value === 'all'){
            let display_articles = articles.filter( article => article.categories.some( category => checked.includes(category)) )
            props.setCriteria( display_articles ) 
        }
        else {
            let author = authorRef.current.value 
            let display_articles = articles.filter( article => article.author === author && article.categories.some( category => checked.includes(category)))
            props.setCriteria( display_articles )
        }
    }




    useEffect( () => {
        get_categories()
    }, [])

    return (
        <div id={props.id}>
            <div id={styles.sort_categories}>
                { allCategories && holdRefs && allCategories.map( (category, index) => {
                    return ( <div key={category} id={styles.checkbox_container}>
                        <input type="checkbox" onChange={call_me} name={category} ref={holdRefs[index]} />
                        <label htmlFor={category}>{category}</label>
                    </div> ) 
                })}
            </div>
            <div id={styles.sort_author}>
                <select onChange={setAuthor} id={props.select_author} ref={authorRef}>
                    <option value="all">All Authors</option>
                    { allAuthors && allAuthors.map( (author, index) => {
                        return <option key={author} value={author}>{author}</option>
                    })}
                </select>
            </div> 
            <div id={styles.sort_newest_oldest}>

            </div>          
        </div>
    )
}

export default SideBarHome