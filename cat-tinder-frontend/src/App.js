import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import NewCat from './pages/NewCat'
import catsArray from './cats'

const App = props => {
  const [cats, setCats] = useState(catsArray)

  return(
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Home cats={ cats } /> } />
        <Route path="/cats" render={(props) => <CatIndex cats={ cats } /> } />
        <Route path="/new" render={(props) => <NewCat /> } />
      </Switch>
      <footer>Meowtch Maker by Ara and Jeremy. Meow'd with love.</footer>
    </Router>
  )
}
export default App
