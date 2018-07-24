import React from 'react';
import {
   BrowserRouter as ReactRouter,
   Route,
   Link,
   Switch }
from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login'; 
import Dashboard from './pages/Dashboard';
import Place from './pages/Place';
import User from './pages/User';
import NewPlace from './pages/places/NewPlace';
import App from './App'; 
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

const userSignedIn = false;
class Router extends React.Component{
  signedInRoutes(){
    if(this.props.user.jwt){
      return(
        <Route path="/new" component={NewPlace} />
      );
    }
  }
  home(){
    if(this.props.user.jwt) return Dashboard;

    return Home;
  }
  render(){
      return( 
        <ConnectedRouter history={this.props.history}>
          <App>
          <Switch>  
            <Route exact path="/" component={this.home()}></Route>
            <Route path="/lugares/:slug" component={Place}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Login}></Route>
            <Route path="/user" component={User}></Route>
            {this.signedInRoutes()}
          </Switch>
          </App>
        </ConnectedRouter>
      );
    }
}

function mapStateProps(state,ownProps){
  return{
    user: state.user
  }
}

export default connect(mapStateProps)(Router);