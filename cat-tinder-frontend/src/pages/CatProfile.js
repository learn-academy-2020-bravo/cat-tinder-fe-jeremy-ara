import React from 'react'
import { ListGroup, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap'
import '../App.css'

const CatProfile = props => {
  const handleDelete = e => {

  }

  return(
    <>
    <div className="header-buttons">
      <a className="link" href="/cats"><Button style={{background: "rgb(237,53,53)", border:"0px", fontWeight: "500"}}>See Other Cats</Button></a>
      <a className="link" href="/"><Button style={{background: "rgb(237,53,53)", border:"0px", fontWeight: "500"}}>Home</Button></a>
      <a style={{textDecoration:"none"}} href="/messages"><Button style={{backgroundColor: "rgb(237,53,53)", border:"0px", fontWeight: "500", fontSize: "25px", padding: "5px", display:"flex", alignItems: "center", justifyContent: "center", width:"36px", height:"36px", margin:"0 0 0 20px"}}><span role="img" aria-label="message-cat">💌</span></Button></a>
    </div>
      <div className="cat-profile-wrapper">
        <ListGroup key={props.index} className="cat-profile-wrapper">
          <img style={{width: "300px"}} src={props.image} />
          <div className="cat-description-wrapper">
            <h4 className="cat-name"><span style={{fontWeight: "bold"}}>{ props.name }</span>, <span style={{fontWeight:"300"}}>{ props.age }</span></h4>
            <ListGroupItemText>{ props.enjoys } </ListGroupItemText>
          </div>
          <div className="like-buttons-wrapper">
            <a href={`/${props.id}/edit`}><Button style={{margin:"0px 10px",backgroundColor:"white",border:"1px solid rgb(237,53,53)", color:"rgb(237,53,53)",fontWeight: "500"}}>Edit Profile</Button>
            <Button style={{backgroundColor:"white",border:"1px solid rgb(237,53,53)", color:"rgb(237,53,53)",fontWeight: "500"}} onClick={handleDelete}>Delete Cat</Button></a>
          </div>
        </ListGroup>
      </div>
    </>
  )
}

export default CatProfile
