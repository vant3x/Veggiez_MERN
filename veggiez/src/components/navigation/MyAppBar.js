import React from 'react';
import AppBar from 'material-ui/AppBar';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import {red900, red700, red800, red600, red500,red400,redA400} from 'material-ui/styles/colors';
import {white,amber400} from 'material-ui/styles/colors';
import {green400, green500,green300,green600,green800,green900,lightGreen500,lightGreen800,lightGreen600} from 'material-ui/styles/colors';
import { spawn } from 'child_process';
import Login from '../../pages/Login';

export default class MyAppBar extends React.Component{ 

    getName(){
        if (this.props.user.name)
            return this.props.user.name;
        else if(this.props.user.email)
            return this.props.user.email.split("@")[0];
        else
            return "";
    }
    title(){
     return   (
     <span style={{'cursor':'pointer', 'textTransform':'capitalize'}}>
        {this.props.user.jwt ? 'Bienvenido ' + this.getName() : 'Veggiez'}
     </span>
     );
    }
    render(){
        return(
            <AppBar
                title={this.title()}
                style={{'backgroundColor':lightGreen800}}
                onTitleTouchTap={this.props.goHome}
                showMenuIconButton={false}
                iconElementRight={this.props.user.jwt ? <LogoutButton logout={this.props.logout} /> : <LoginButton/>}
            />
        );
    }
}