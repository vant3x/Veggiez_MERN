import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import './LogoutButton.css';


export default class LogoutButton extends React.Component{
  render(){
    return(
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
        targetOrigin={{horizontal: 'right', vertical:'top'}}
        anchorOrigin={{horizontal: 'right', vertical:'top'}}
        iconStyle={{'fill':'white'}}
      >
        <Link to="/user" style={{'textDecoration':'none'}}><MenuItem>Mi cuenta <i class="fas fa-user-circle"></i> </MenuItem></Link>
        <MenuItem onClick={this.props.logout}>Nuevo restaurante</MenuItem>
        <MenuItem  onClick={this.props.logout}>Cerrar sesión <i class="fas fa-sign-out-alt"></i></MenuItem>

      </IconMenu>  

    )
  }
}