import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import NewCat from './pages/NewCat'
import UpdateCat from './pages/UpdateCat'
import CatProfile from './pages/CatProfile'
import Messages from './pages/Messages'
import catsArray from './cats'

const App = props => {
  const [cats, setCats] = useState(catsArray)

  return(
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Home cats={ cats } /> } />
        <Route path="/cats" render={(props) => <CatIndex cats={ cats } /> } />
        {
          cats.map((cat,index) => {
            return(
              <Route exact path={`/${cat.id}`} render={(props) => <CatProfile name={cat.name} enjoys={cat.enjoys} age={cat.age} image={cat.image} index={cat.index} id={cat.id}/> } />
            )
          })
        }
        {
          cats.map((cat,index) => {
            return(
              <Route path={`/${cat.id}/edit`} render={(props) => <UpdateCat name={cat.name} enjoys={cat.enjoys} age={cat.age} image={cat.image} index={cat.index} id={cat.id}/> } />
            )
          })
        }
        <Route path="/messages" render={(props) => <Messages cats={ cats } /> } />
        <Route path="/new" render={(props) => <NewCat /> } />
      </Switch>
      <footer>Meowtch Maker by Ara and Jeremy. Meow'd with love.</footer>
    </Router>
  )
}
export default App
