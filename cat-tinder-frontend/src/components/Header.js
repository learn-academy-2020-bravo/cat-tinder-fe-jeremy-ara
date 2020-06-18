import React from 'react'
import Logo from '../images/cat-tinder-logo.png'
import LogoThick from '../images/cat-tinder-logo-thick.png'
import '../App.css'

const Header = props => {
  return(
    <>
      <div>
        <header>
          <div className="header-container">
            <a style={{textDecoration: "none"}} href="/"><div className="title-wrapper"><img className="title-logo" src={LogoThick} /><h1
            style={{fontSize:"80px",letterSpacing:"-1px", color:"black"}} className="app-title">Meowtch Maker</h1></div></a>
            <p className="header-subtitle">Meowtch up with your <span style={{fontStyle:"italic"}}>purr</span>fect flame.</p>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
