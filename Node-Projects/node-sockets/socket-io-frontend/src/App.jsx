import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { io } from 'socket.io-client'
import Message from './components/message'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [connected, setConnected] = useState(false)
  const [chats, setChats] = useState([])
  const messageInput = useRef() 
  const roomInput = useRef() 
  const nameInput = useRef() 
  const socketRef = useRef()
  const joinChatRoomInput = useRef()

  useEffect( () => {
    socketRef.current = io('http://localhost:3000')
    socketRef.current.on('connect', () => {
      setConnected(socketRef.current.id)
    })

    return () => {
      socket.current.disconnect()
    }
  }, [])
  
  useEffect( () => {
    const socket = io('http://localhost:3000/user', {auth : {token : 'Test'}})
    socket.on('connect', () => {
      console.log(`connected to ${socket}`)
    })

    return () => {
      socket.disconnect()
    }
  }, [])


  useEffect(() => {
    if (!socketRef.current) return;
    
    const handleMessage = (message) => {
        setChats((chats) => [...chats, message]);
        console.log("hji");
    };
    
    socketRef.current.on('receive-message', handleMessage);
    
    // Clean up the listener when the component unmounts or the socket changes
    return () => {
        socketRef.current.off('receive-message', handleMessage);
    };
  }, [socketRef.current]);
 


  const createMessage = async (e) => {
    e.preventDefault()
    let name = nameInput.current.value 
    let message = messageInput.current.value
    let room = roomInput.current.value 
    if (message.trim() === '' || name.trim() === ''){return}
    if (room.trim() === '') {
      socketRef.current.emit('send-message', { name, message })
    }
    else {
      socketRef.current.emit('send-message', { name, message, room })
    }
    setChats([...chats, {name, message}])
    messageInput.current.value = ''

  }
  
  const joinChatRoom = async (e) => {
    e.preventDefault()
    let room = joinChatRoomInput.current.value
    if (room.trim() === ''){ return }
    socketRef.current.emit('join-room', room, message => {
      makeAMessage(message)
    })
  }

  const makeAMessage = (message) => {
    setChats([...chats, {name: "admin", message}]) 
  }


  return (
    <>
      { connected ? <h1>Connected with id {connected}</h1> : null }
      <div className='chat'>
        {chats.map( (chat, _) => {
          return <Message name={chat.name} message={chat.message} />
        })}
      </div>
      <form onSubmit={createMessage}>
        <div className='form-cell'>
          <label htmlFor="message">Message </label>
          <input type="text" id='message-input' ref={messageInput}/>
        </div>
        <div className='form-cell'>
          <label htmlFor="room-input">Room</label>
          <input type="text" id='room-input' ref={roomInput} />
        </div>
        <div className='form-cell'>
          <label htmlFor="name">Name</label>
          <input type="text" id='name' ref={nameInput}/>
        </div>
        <button type='submit' id='submit-button'>Send</button>
      </form>

      <form onSubmit={joinChatRoom}>
          <div className='form-cell'>
            <label htmlFor="join-chat-room">Join Chat Room</label>
            <input type="text" ref={joinChatRoomInput}/>
          </div>
          <button type='submit'>Join Chat Room</button>
      </form>
    </>

    
  )
}

export default App
