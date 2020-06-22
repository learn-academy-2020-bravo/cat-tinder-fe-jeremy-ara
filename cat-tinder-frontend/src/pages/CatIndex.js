import React, { useState, useEffect } from 'react'
import CatProfile from './CatProfile'
import { ListGroup, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import '../App.css'

const CatIndex = props => {
    //Create an empty array to hold all the cats
  const [newCats, setNewCats] = useState([])

  useEffect(() =>{
    grabCats()
    },[])

  async function grabCats () {
    try {
      let response = await fetch("http://localhost:3000/cats")
      let data = await response.json()
      // Sort the data numerically by id number
      let sortedData = data.sort((a,b) => {
        if (a.id === b.id) return 0
        else if (a.id > b.id) return 1
        else return -1
      })
      if(response.status === 200) {
        console.log("sortedData", sortedData)
        setNewCats(sortedData)
      }
    } catch (err) {
        console.log(err)
    }
  }

  return(
    <>
      <div className="header-buttons">
        <a className="link" href="/"><Button style={{background: "rgb(237,53,53)", border:"0px", fontWeight: "500"}}>Back to Home</Button></a>
        <a className="link" href="/new"><Button style={{background: "rgb(237,53,53)", border:"0px", fontWeight: "500"}}>Sign Up</Button></a>
        <a style={{textDecoration:"none"}} href="/messages"><Button style={{background: "rgb(237,53,53)", border:"0px", fontWeight: "500", fontSize: "25px", padding: "5px", display:"flex", alignItems: "center", justifyContent: "center", width:"36px", height:"36px", margin:"0 0 0 20px"}}><span role="img" aria-label="message-cat">💌</span></Button></a>
      </div>
      <div className="cat-index-wrapper">
        <h3 className="cat-index-title">All the single cats in your area</h3><br/>
        <div className="cats-display-wrapper">


        {newCats.map((cat,index) => {
          return(
            <ListGroup key={index} className="cat-wrapper">
              <a href={`/cats/${cat.id}`}><img style={{width: "300px"}} src={cat.image_path} /></a>
              <div className="cat-description-wrapper">
                <h4 className="cat-name"><span style={{fontWeight: "bold"}}>{ cat.name }</span>, <span style={{fontWeight:"300"}}>{ cat.age }</span></h4>
                <ListGroupItemText>{ cat.enjoys } </ListGroupItemText>
              </div>

              <div className="like-buttons-wrapper">
                <div className="like-button" id={`like-button-${cat.id}`}><span role="img" aria-label="like-cat">😽</span></div>

                <div className="like-button" id={`superlike-button-${cat.id}`}><span role="img" aria-label="superlike-cat">😻</span></div>

                <div className="dislike-button" id={`dislike-button-${cat.id}`}><span role="img" aria-label="dislike-cat">❌</span></div>
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
