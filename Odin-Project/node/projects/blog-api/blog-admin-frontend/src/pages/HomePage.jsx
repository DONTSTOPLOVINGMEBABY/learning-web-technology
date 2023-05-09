import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles/HomePage.module.css'
import authenticate_jwt from '../utils/auth-jwt'
import ArticlePreview from '../components/homepage/article-preview'
import Header from '../components/homepage/homepage-header'

function HomePage() {

	// Hooks
	const [validJWT, setValidJWT] = useState(null)
	const [publishedArticles, setPublishedArticles] = useState(null)
	const [unpublishedArticles, setUnpublishedArticles] = useState(null)
	const navigate = useNavigate()

	const get_admin_homepage = async () => {
		let token = authenticate_jwt()
		if (!token){ navigate("/admin/login") }
		let articles = await fetch("https://hjacobs-rest-api-production.up.railway.app/admin/home", {
			method : 'GET', 
			headers : { 
				'Content-Type' : 'application/json', 
				'Authorization' : `Bearer ${token}` 
			}
		})
		if (!articles.ok){ navigate("/admin/login") }
		articles = await articles.json()	
		console.log(articles)
		setValidJWT(true)
		setPublishedArticles(articles.published)
		setUnpublishedArticles(articles.unpublished)
	} 

	const logout = function () {
		localStorage.removeItem('jwt')
		navigate('/admin/login')
	}

	useEffect( () => {
		if (!validJWT){ get_admin_homepage() }
	}, [])

	return (
		<> 
		{publishedArticles && unpublishedArticles ? 
			<div id={styles.admin_home_container}>
				<div id={styles.admin_home}>
					<Header publishedLength={publishedArticles.length} unpublishedLength={unpublishedArticles.length}/>
					<div id={styles.display_articles}>
						<div id={styles.published_articles}>
							<h1 className={styles.col_title}>Published Articles</h1>
							{ publishedArticles.map( (article) => {
								return <ArticlePreview author={article.author} categories={article.categories} content={article.content} published={article.published} subtitle={article.subtitle} title={article.title} uploadDate={article.uploadDate} key={article._id} id={article._id}/> 
							})}
						</div>
						<div id={styles.unpublished_articles}>
							<h1 className={styles.col_title}>Unpublished Articles</h1>
							{ unpublishedArticles.map( (article) => {
								return <ArticlePreview author={article.author} categories={article.categories} content={article.content} published={article.published} subtitle={article.subtitle} title={article.title} uploadDate={article.uploadDate} key={article._id} id={article._id}/> 
							})}
						</div>
					</div>
					<div id={styles.center_logout_button}>
						<button id={styles.logout_button} onClick={logout}>Logout</button>
					</div>
				</div>
			</div>
		: null }
		</>
	)
}

export default HomePage