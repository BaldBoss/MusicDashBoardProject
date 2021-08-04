import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import styles from "./Chat.module.css"
import { db,auth } from '../../Firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
export default function Chat(params) {
    const scrollBottom = useRef()
    const [messages,setMessages] = useState([])
    const [msg,setMsg] = useState([])
    const [User,setUser] = useState([])
  
    useEffect(()=>{
        db.collection('messages').orderBy("createAt").limit(50).onSnapshot(snapshot=>{
            setMessages(snapshot.docs.map(doc => doc.data()))
            console.log(snapshot.docs)
        })
        db.collection('user').onSnapshot(snapshot =>{
            setUser(snapshot.docs.map(doc => doc.data()))
        })
    },[])

    async function sendMessage(e){
        e.preventDefault()
        const {uid} = auth.currentUser
        await db.collection('messages').add({
            text:msg,
            uid,
            createAt:firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scrollBottom.current.scrollIntoView({behavior:'smooth'})
    }
    return(
        <section className={styles.container}>
            
            <div className={styles.listOfUsers}>
    
                    <div className={styles.displayName}>
                        <div className={styles.displayPic}>
                            <img src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" alt="" />
                        </div>
                        <div style={{margin: '0 10px'}}>
                            <span style={{fontWeight: 500}}>{User.map(e =>(e.email === auth.currentUser.email ? e.email2 : e.email))}</span>
                        </div>
                    </div>
                            
                </div>
                <div className={styles.chatArea}>
                    <div className={styles.chatHeader}> {User.map(e =>(e.email === auth.currentUser.email ? e.email2 : e.email))} </div>
                    <div className={styles.messageSections}>

                    <div className="msgs">
                                    {messages.map(({id,text,uid})=>(
                                        <div>
                                            <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                                            <p>{text}</p>
                                        </div>
                                        </div>  
                                    ))}
                    </div>
                    <div ref={scrollBottom}></div>
                    </div>
                        <form onSubmit={sendMessage} className={styles.chatControls}>
                            <textarea value={msg} onChange={e => setMsg(e.target.value)} />
                            <button type="submit">Send</button>
                        </form>
                    </div>
        
    </section>
    )
};
