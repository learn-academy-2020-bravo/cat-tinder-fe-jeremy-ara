import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import NewCat from './pages/NewCat'
import UpdateCat from './pages/UpdateCat'
import CatProfile from './pages/CatProfile'
import Messages from './pages/Messages'

const App = props => {
    //Create an empty array to hold all the cats
  const [newCats, setNewCats] = useState([])
  //useEffect hook lets us GET all cats from the database when the component loads
  //the empty array after the comma means that it will get triggered automatically only once
  useEffect(() =>{
    grabCats()},[])

  async function grabCats () {
    try {
      //GET data from the backend
      let response = await fetch("http://localhost:3000/cats")
      let data = await response.json()
      let sortedData = data.sort((a,b) => {
        if (a.id === b.id) return 0
        else if (a.id > b.id) return 1
        else return -1
      })
      //all good?
      if(response.status === 200) {
        //check the console to make sure we have all the cats
        console.log("sortedData", sortedData)
        //populate the newCats state array with data
        setNewCats(sortedData)
      }
    } catch (err) {
        console.log(err)
    }
  }

  return(
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Home cats={ newCats } /> } />
        <Route exact path="/cats" render={(props) => <CatIndex /> } />
        {
          newCats.map(cat => {
            return(
              <Route exact path={`/cats/${cat.id}`} render={(props) => <CatProfile id={cat.id} /> } />
            )
          })
        }
        {
          newCats.map(cat => {
            return(
              <Route exact path={`/cats/${cat.id}/edit`} render={(props) => <UpdateCat cat={cat}/> } />
            )
          })
        }
        <Route exact path="/messages" render={(props) => <Messages cats={ newCats } /> } />
        <Route exact path="/new" render={(props) => <NewCat /> } />
      </Switch>
      <footer>Meowtch Maker by Ara and Jeremy. Meow'd with love.</footer>
    </Router>
  )
}
export default App
