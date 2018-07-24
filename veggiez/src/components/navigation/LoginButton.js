import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';


export default class LoginButton extends React.Component{
  render(){
    return(
      <Link to="/login"><FlatButton label="Iniciar sesión"  style={{'color':'white', 'marginTop':'5px'}}/></Link>
    )
  }
}