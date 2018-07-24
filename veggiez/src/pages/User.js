import React from 'react';
import Container from '../components/Container';

export default class User extends React.Component{ 
  constructor(props){
    super(props);

  }
  getName(){

  }

 
  render(){

    return(
      <div style={{"textAlign":"center"}}>
        <h2>Mi cuenta <span> <i class="fas fa-user-circle"></i></span></h2>
          <span>
            {'Bienvenido ' + this.getName()}
          </span>
      </div>
    );
  }
}