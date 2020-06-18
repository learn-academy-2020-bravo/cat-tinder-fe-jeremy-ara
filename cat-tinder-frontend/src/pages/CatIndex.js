import React from 'react'
import { ListGroup, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../App.css'

const CatIndex = props => {
  return(
    <>
      <div className="header-buttons">
        <a className="link" href="/"><Button style={{backgroundColor: "#e6410e", border:"0px", fontWeight: "bold"}}>Back to Home</Button></a>
        <a className="link" href="/new"><Button style={{backgroundColor: "#e6410e", border:"0px", fontWeight: "bold"}}>Sign Up</Button></a>
        <Button style={{backgroundColor: "#e6410e", border:"0px", fontWeight: "bold", fontSize: "25px", padding: "5px", display:"flex", alignItems: "center", justifyContent: "center", width:"36px", height:"36px", margin:"0 0 0 20px"}}><span role="img" aria-label="message-cat">💌</span></Button>
      </div>
      <div className="cat-index-wrapper">
        <h3>All the single cats in your area</h3><br/>
        <div className="cats-display-wrapper">

        {props.cats.map((cat,index) => {
          return(
            <ListGroup key={index} className="cat-wrapper">
              <img style={{width: "300px"}} src={cat.image} />
              <div className="cat-description-wrapper">
                <h4 className="cat-name"><span style={{fontWeight: "bold"}}>{ cat.name }</span>, <span style={{fontWeight:"300"}}>{ cat.age }</span></h4>
                <ListGroupItemText>{ cat.enjoys } </ListGroupItemText>
              </div>
              <div className="like-buttons-wrapper">
                <Button style={{backgroundColor: "#E0E0E0", border:"0px", borderRadius: "50%", fontWeight: "bold", fontSize: "30px", padding: "5px", height: "40px", display:"flex", alignItems: "center", justifyContent: "center", width:"40px", height:"40px", margin:"5px"}}><span role="img" aria-label="like-cat">😽</span></Button>

                <Button style={{backgroundColor: "#E0E0E0", border:"0px", borderRadius: "50%", fontWeight: "bold", fontSize: "30px", padding: "5px", height: "40px", display:"flex", alignItems: "center", justifyContent: "center", width:"40px", height:"40px", margin:"5px"}}><span role="img" aria-label="superlike-cat">😻</span></Button>

                <Button style={{backgroundColor: "#E0E0E0", border:"0px", borderRadius: "50%", fontWeight: "bold", fontSize: "20px", padding: "5px", height: "40px", display:"flex", alignItems: "center", justifyContent: "center", width:"40px", height:"40px", margin:"5px"}}><span role="img" aria-label="dislike-cat">❌</span></Button>
              </div>
            </ListGroup>
          )
        })}

        </div>
      </div>
    </>
  )
}

export default CatIndex
