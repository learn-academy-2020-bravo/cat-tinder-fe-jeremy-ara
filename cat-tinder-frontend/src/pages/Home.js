import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Home = props => {
  return(
    <>
      <Link to="/new">Create Cat Profile</Link><br/><br/>
      <Link to="/cats">See All Single Cats</Link>
    </>
  )
}

export default Home
