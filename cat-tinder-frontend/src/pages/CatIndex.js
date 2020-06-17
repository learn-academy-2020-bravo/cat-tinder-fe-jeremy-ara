import React from 'react'
import { ListGroup, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../App.css'

const CatIndex = props => {
  return(
    <>
      <Link className="link" to="/">Back to Home</Link>
      <div className="cat-index-wrapper">
        <h3>All the single cats in your area</h3><br/>
        <div className="cats-display-wrapper">
        {props.cats.map((cat,index) => {
          return(
            <ListGroup key={index} className="cat-wrapper">
              <img style={{width: "300px"}} src={cat.image} />
              <div className="cat-description-wrapper">
                <h4 className="cat-name"><span style={{fontWeight: "bold"}}>{ cat.name }</span>, { cat.age }</h4>
                <ListGroupItemText>{ cat.enjoys } </ListGroupItemText>
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
