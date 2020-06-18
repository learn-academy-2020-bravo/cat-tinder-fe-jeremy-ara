import React from 'react'
import { Button } from 'reactstrap'
import '../App.css'

const Messages = props => {
  return(
    <>
      <div className="header-buttons">
        <a className="link" href="/"><Button style={{background: "rgb(237,53,53)", border:"0px", fontWeight: "500"}}>Back to Home</Button></a>
      </div>
      <h3 className="messages-title">Sign up to message other cats!</h3>
    </>
  )
}

export default Messages
