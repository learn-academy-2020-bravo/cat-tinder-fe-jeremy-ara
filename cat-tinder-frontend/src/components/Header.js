import React from 'react'
import { Jumbotron, Container } from 'reactstrap'
import '../App.css'

const Header = props => {
  return(
    <>
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Cat Meowtch</h1>
            <p className="lead">Claw left or right to meowtch with your purrfect lover</p>
          </Container>
        </Jumbotron>
      </div>
    </>
  )
}

export default Header
