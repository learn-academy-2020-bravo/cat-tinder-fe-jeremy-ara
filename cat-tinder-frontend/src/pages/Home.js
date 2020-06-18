import React from 'react'
import { Jumbotron, Button, ListGroup, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'
import '../App.css'

const Home = props => {
  return(
    <>
      <div>
        <Jumbotron>
          <h1 className="display-3">Meow!</h1>
          <p className="lead">Meoww meow meow meoww meow meoww. Meow, meowww meow meow meoww meow.</p>
          <p className="lead">
            <a href="/new"><Button style={{backgroundColor: "#e6410e", border:"0px", fontWeight: "bold"}}>Sign Up</Button></a>
          </p>
        </Jumbotron>
      </div>
      <div className="cat-spotlight-wrapper">
      <h4><span role="img" aria-label="flame">🔥</span> Hottest Cat Right Now</h4>
      {props.cats.map((cat,index) => {
        if (cat.id === 1) {
          return(
            <ListGroup key={index} className="cat-wrapper-spotlight">
            <img style={{width: "300px"}} src={cat.image} />
            <div className="cat-description-wrapper">
            <h4 className="cat-name"><span style={{fontWeight: "bold"}}>{ cat.name }</span>, <span style={{fontWeight:"300"}}>{ cat.age }</span></h4>
            <ListGroupItemText>{ cat.enjoys } </ListGroupItemText>
            </div>
            </ListGroup>
          )
        }
      })}
      <a href="/cats"><Button style={{backgroundColor: "#e6410e", border:"0px", fontWeight: "bold"}}>See More Hotties</Button></a>
      </div>
    </>
  )
}

export default Home
