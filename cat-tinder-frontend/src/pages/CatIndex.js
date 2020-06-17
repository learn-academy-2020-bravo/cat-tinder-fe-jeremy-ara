import React from 'react'
import { ListGroup, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../App.css'

const CatIndex = props => {
  return(
    <>
      <Link to="/">Back to Home</Link>
      <h3>All the single cats in your area</h3><br/>
      {props.cats.map((cat,index) => {
        return(
          <ListGroup key={index}>
            <h4>{ cat.name } </h4>
            <img style={{width: "300px"}} src={cat.image} />
            <ListGroupItemText>{ cat.age }</ListGroupItemText>
            <ListGroupItemText>{ cat.enjoys } </ListGroupItemText>
          </ListGroup>
        )
      })}
    </>
  )
}

export default CatIndex
