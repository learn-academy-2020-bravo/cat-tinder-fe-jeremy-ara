import React from 'react'
import { Jumbotron, Container } from 'reactstrap'
import Logo from '../images/cat-tinder-logo.png'
import '../App.css'

const Header = props => {
  return(
    <>
      <div>
        <Jumbotron fluid>
          <Container fluid className="container-wrapper">
            <div className="title-wrapper"><img className="title-logo" src={Logo} /><h1
            style={{fontSize:"80px",letterSpacing:"-1px"}} className="display-3">Meowtch Maker</h1></div>
            <p className="lead">Meowtch up with your purrfect love.</p>
          </Container>
        </Jumbotron>
      </div>
    </>
  )
}

export default Header
