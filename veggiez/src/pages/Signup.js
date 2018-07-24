import React from 'react'; 
import Title from '../components/Title';
import Container from '../components/Container';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {red900, red700, red800, red600, red500,red400,redA400, deepOrange500} from 'material-ui/styles/colors';
import {white,amber400} from 'material-ui/styles/colors';
import {green400, green500,green300,green600,green800,green900,lightGreen500,lightGreen800,lightGreen600} from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';
export default class Signup extends React.Component{
    render(){
        return(
            <div className="row middle-xs">
                <div className="col-xs-12 col-sm-6">
                    <Container>
                        <div style={{'textAlign':'left'}}>
                            <Title/>
                            <TextField
                                floatingLabelText="Correo electrónico"
                                type="email"
                                className="textfield"
                            />
                            <TextField
                                floatingLabelText="Contraseña"
                                type="password"
                                className="textfield"
                            />
                            <div className="Login-actions">
                                <Link to="login" style={{marginRight:"1em"}}>Ya tengo una cuenta</Link>
                                <RaisedButton label="Crear cuenta" backgroundColor={red600} labelColor={white} />
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <div className="Login-background" style={{'backgroundImage': 
                    "url("+process.env.PUBLIC_URL + '/images/signup-bg.jpg'+")"}}></div>
                </div>
            </div>
        )
    }
}