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
      let data = await response.json();
      //all good?
      if(response.status === 200) {
        //check the console to make sure we have all the cats
        console.log("data", data)
        //populate the newCats state array with data
        setNewCats(data)
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
        <Route path="/cats" render={(props) => <CatIndex /> } />
        {
          newCats.map((cat,index) => {
            return(
              <Route exact path={`/${cat.id}`} render={(props) => <CatProfile newCats={newCats} name={cat.name} enjoys={cat.enjoys} age={cat.age} image={cat.image_path} index={cat.index} id={cat.id} /> } />
            )
          })
        }
        {
          newCats.map((cat,index) => {
            return(
              <Route path={`/${cat.id}/edit`} render={(props) => <UpdateCat name={cat.name} enjoys={cat.enjoys} age={cat.age} image={cat.image_path} index={cat.index} id={cat.id}/> } />
            )
          })
        }
        <Route path="/messages" render={(props) => <Messages cats={ newCats } /> } />
        <Route path="/new" render={(props) => <NewCat /> } />
      </Switch>
      <footer>Meowtch Maker by Ara and Jeremy. Meow'd with love.</footer>
    </Router>
  )
}
export default App
