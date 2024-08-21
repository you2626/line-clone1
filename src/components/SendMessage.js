import React, { useState } from 'react'

function SendMessage() {
    const [message,setMessages] = useState("");
    function SendMessage(e){
        e.preventDefault();
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