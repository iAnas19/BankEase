import React from 'react'
import './App.css'
import { HashRouter as Router,Switch,Route } from 'react-router-dom'
import Home from './pages'
import SignInPage from './pages/SignIn'
import SignUpPage from './pages/Signup'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component = {SignInPage} exact />
        <Route path='/signup' component = {SignUpPage} exact />
      
      </Switch>
    </Router>
  )
}

export default App
