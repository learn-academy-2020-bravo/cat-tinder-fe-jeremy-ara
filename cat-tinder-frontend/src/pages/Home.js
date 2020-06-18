import React from 'react'
import { Button, ListGroup, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'
import '../App.css'

const Home = props => {
  return(
    <>
      <div className="home-wrapper">
        <div className="home-jumbotron">
          <h2 className="home-title">Looking for Mr. Right?<br/>Or just Mr. Right <span style={{fontStyle:"italic"}}>Meow</span>?</h2>
          <p className="home-subtitle">Our <span style={{fontStyle:"italic"}}>fe</span>line-up of cats will <span style={{fontStyle:"italic"}}>cat</span>er to everyone.</p>
          <p className="quote">"It's like digital catnip!" - CQ Magazine<br/>"Make sure to buy a screen protector." - Cat and Driver</p>
          <a href="/new"><Button style={{backgroundColor: "white", color:"#e6410e", border:"0px", fontWeight: "bold", fontSize: "20px"}}>Sign Up</Button></a>
        </div>
        <div className="cat-spotlight-wrapper">
        <h4>Hot Cat Spotlight <span role="img" aria-label="hot-cat">😻</span></h4>
        {props.cats.map((cat,index) => {
          if (cat.id === 1) {
            return(
              <ListGroup key={index} className="cat-wrapper-spotlight">
              <a href={`/${cat.id}`}><img style={{width: "300px"}} src={cat.image} /></a>
              <div className="cat-description-wrapper">
              <h4 className="cat-name"><span style={{fontWeight: "bold"}}>{ cat.name }</span>, <span style={{fontWeight:"300"}}>{ cat.age }</span></h4>
              <ListGroupItemText>{ cat.enjoys } </ListGroupItemText>
              </div>
              </ListGroup>
            )
          }
        })}
        <a href="/cats"><Button style={{background: "rgb(237,53,53)",
background: "linear-gradient(90deg, rgba(237,53,53,1) 0%, rgba(255,96,47,1) 100%)", border:"0px", fontWeight: "bold", fontSize: "20px"}}>See More Hotties</Button></a>
        </div>
      </div>
    </>
  )
}

export default Home
