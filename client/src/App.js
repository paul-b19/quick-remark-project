import React from "react"
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Application from "./containers/Application"
import Login from "./containers/Login"
import Signup from "./containers/Signup"



const App = () => {

  return (
    <Router>
      <Switch>
        <Route path= "/" exact render = { (routerProps) => 
          <Application
          />
        }/>
        <Route path= "/login" exact render = { (routerProps) => 
          <Login
          />
        }/>
        <Route path= "/signup" exact render = { (routerProps) => 
          <Signup
          />
        }/>
        <Route render={() => <h3>There's no such route...</h3>} />
        
        {/* <Route exact path="/account" render={(routerProps) => 
          this.state.userId ? 
          <Application userId={this.state.userId} logOut={this.logOut} {...routerProps}/>
          :
          <Redirect to="/" />}/> */}

      </Switch>
    </Router>
  )
}

export default App
