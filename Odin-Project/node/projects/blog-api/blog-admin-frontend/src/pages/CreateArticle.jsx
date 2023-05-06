import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import styles from "./styles/CreateArticle.module.css"
import authenicate_jwt from "../utils/auth-jwt"

function CreateArticle() {

	// const content = useRef(null)
	const [editorApiKey, setEditorApiKey] = useState()
	const navigate = useNavigate()

	// refs
	const title = useRef()
	const subtitle = useRef()
	const author = useRef()
	const upload_date = useRef()
	const published = useRef()
	const content = useRef(null)
	const categories = useRef()

	




	/*
	
						<div className='cell'>
							<label htmlFor='Title'>Title</label>
							<input type='text' name='title'/>
						</div>
						<div className='cell'>
							<label htmlFor='subtitle'>Subtitle</label>
							<input type='text' name='subtitle'/>
						</div>
						<div className='cell'>
							<label htmlFor='author'>Author</label>
							<input type='text' name='author'/>
						</div>
						<div className='cell'>
							<label htmlFor='Title'>Upload Date</label>
							<input type='date' name='upload_date'/>
						</div>
						<div className='cell'>
							<label htmlFor='Title'>Publish</label>
							<input type='checkbox' name='title'/>
						</div>
						<div className='cell'>
							<label htmlFor='categories'>Categories</label>
							<select name='categories' id='categories'>
								<option value="AI">AI</option>
								<option value="Programming Languages">Programming Languages</option>
								<option value="Systems Design">Systems Design</option>
							</select>
						</div>
						<div id='button-shell'>
							<button id='submit-button' type='submit'>Make Article</button>
						</div>

	*/

	const send_form = async (e) => {
		e.preventDefault()
		let jwt = authenicate_jwt() 
		console.log("Jwt: ", jwt)
		if (!jwt) { alert("failed") ; return }
		let data = {
			'title' : title.current.value, 
			'subtitle' : subtitle.current.value, 
			'author' : author.current.value, 
			'published' : published.current.checked, 
			'upload_date' : upload_date.current.value, 
			'categories' : categories.current.value, 
			'content' : content.current.getContent()
		}
		let postData = await fetch("http://localhost:3001/admin/create-article", {
			method : 'POST', 
			headers : {
				'Content-Type' : 'application/json', 
				'Authorization' : `Bearer ${jwt}`, 
			}, 
			body : JSON.stringify(data), 
		})
		if (!postData.ok) { alert("Post failed") }
		let response = await postData.json()
		console.log(response)

		// console.log(title.current.value)
		// console.log(subtitle.current.value)
		// console.log(author.current.value)
		// console.log(published.current.checked)
		// console.log(upload_date.current.value)
		// console.log(categories.current.value)
		// console.log(content.current.getContent())

		console.log(JSON.stringify(data))

	}


 
	const grab_editor_api_key = async () => {
		let token = authenicate_jwt() 
		if (!token) { navigate("/admin/login") ; return } 
		let key = await fetch("http://localhost:3001/admin/get_tiny_key", {
			method: "GET", 
			headers: {
				'Content-Type' : 'application/json', 
				'Authorization' : `Bearer ${token}`
			}
		})
		if (!key.ok){
			alert("Error getting editor key, redirecting to main page") 
			navigate("/admin/home")
			return
		}
		key = await key.json()
		console.log(key)
		setEditorApiKey(key.key)
	}

	useEffect( () => {
		grab_editor_api_key()
	}, [])

	return (
		<div id={styles.make_article_container}>
			<div id={styles.make_article}>
				{ editorApiKey ? 
					
					<form method='POST' action='http://localhost:3001/admin/create-article' onSubmit={send_form}>
						<Editor
						body_id='content_box'
						apiKey={editorApiKey}
						onInit={(evt, editor) => content.current = editor}
						initialValue="<p>This is the initial content of the editor.</p>"
						init={{
							height: 500,
							menubar: false,
							plugins: [
							'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
							'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
							'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
							],
							toolbar: 'undo redo | blocks | ' +
							'bold italic forecolor | alignleft aligncenter ' +
							'alignright alignjustify | bullist numlist outdent indent | ' +
							'removeformat | help',
							content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
						}}
						/>
						<div className='cell'>
							<label htmlFor='Title'>Title</label>
							<input type='text' name='title' ref={title}/>
						</div>
						<div className='cell'>
							<label htmlFor='subtitle'>Subtitle</label>
							<input type='text' name='subtitle' ref={subtitle}/>
						</div>
						<div className='cell'>
							<label htmlFor='author'>Author</label>
							<input type='text' name='author' ref={author}/>
						</div>
						<div className='cell'>
							<label htmlFor='Title'>Upload Date</label>
							<input type='date' name='upload_date' ref={upload_date}/>
						</div>
						<div className='cell'>
							<label htmlFor='published'>Publish</label>
							<input type='checkbox' name='published' ref={published}/>
						</div>
						<div className='cell'>
							<label htmlFor='categories'>Categories</label>
							<select name='categories' id='categories' ref={categories}>
								<option value="AI">AI</option>
								<option value="Programming Languages">Programming Languages</option>
								<option value="Systems Design">Systems Design</option>
							</select>
						</div>
						<div id='button-shell'>
							<button id='submit-button' type='submit'>Make Article</button>
						</div>


					</form> 
					: null
				}	 
			</div>
		</div>
	)



	/*
	const ArticleSchema = new Schema({
    title : { type : String, require: true }, 
    subtitle : { type : String, require : true }, 
    author : { type : String, require : true }, 
    content : { type: String, require: true }, 
    uploadDate : { type: Date, require: true }, 
    lastModified : { type: Date, require : false }, 
    categories : { type: Array, require: true }, 
    published: { type: Boolean, require: true }, 
})

	
	
	*/ 



  // const content = useRef(null)
  // const [editorApiKey, setEditorApiKey] = useState()
  // const log = () => {
  //   if (content.current.value) {
  //     console.log(content.current.getContent())
  //   }
  // }

  // const grab_editor_api_key = async () => {
	// let key = await fetch("http://localhost:3001/admin/get_tiny_key", {
	// 	method : "GET", 
	// 	headers : {
	// 		'Authorization' : `Bearer ${authenicate_jwt()}`
	// 	}
	// })
	// if (!key.ok){ 
	// 	alert("Failed")
	// 	return
	// }
	// key = await key.json()
	// console.log(key)
	// setEditorApiKey(key.key)
  // }

  // useEffect( () => {
	// grab_editor_api_key()
  // }, [])


  // return (
  //   <> 
  //     <Editor
  //       apiKey='m49et63wdoqm9atkrhyis42itkyrbip78rpfoiz0i4f4ee9d'
  //       onInit={(evt, editor) => content.current = editor}
  //       initialValue="<p>This is the initial content of the editor.</p>"
  //       init={{
  //         height: 500,
  //         menubar: false,
  //         plugins: [
  //           'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
  //           'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
  //           'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
  //         ],
  //         toolbar: 'undo redo | blocks | ' +
  //           'bold italic forecolor | alignleft aligncenter ' +
  //           'alignright alignjustify | bullist numlist outdent indent | ' +
  //           'removeformat | help',
  //         content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  //       }}
  //     />
  //     <button onClick={log}>Log editor content</button>
  //   </>
  // )
}


export default CreateArticle