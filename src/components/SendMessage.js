import React, { useState } from 'react';
import {db,auth} from "../firebase.js";
import firebase from "firebase/compat/app";

function SendMessage() {
    const [message,setMessages] = useState("");
    function SendMessage(e){
        e.preventDefault();

        const {uid,photoURL}=auth.currentUser;

        db.collection("messages").add({
            text:message,
            photoURL,
            uid,
            createdAt:firebase.firestore.FieldValue.serverTimestamp(),
        })
    }
  return (
    <div>
        <form onSubmit={SendMessage}>
            <div className="sendMsg">
            <input placeholder='メッセージを入力してください' type="text" onChange={(e)=>setMessages(e.target.value)}/>
            </div>
        </form>
    </div>
  )
}

export default SendMessage;