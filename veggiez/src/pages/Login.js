import React from 'react'; 

import Title from '../components/Title';
import Container from '../components/Container';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {red600, red500,red400,redA400} from 'material-ui/styles/colors';
import {white,amber400} from 'material-ui/styles/colors';
import {green500,green600,green800,lightGreen500,lightGreen800,lightGreen600} from 'material-ui/styles/colors';
import { BrowserRouter as ReactRouter, Route, Link } from 'react-router-dom';
import { login, signUp } from '../request/auth';

import { push } from 'react-router-redux';

import { connect } from 'react-redux';

import * as actions from '../actions/userActions';

import './Login.css';

const NameField = (props)=> (
  <TextField
    floatingLabelText="Nombre"
    type="text"
    className="textfield"
    ref={props.nameRef}
  />
);

const LoginActions = (props) => (

  <div>
    <Link to="/signup" style={{marginRight:"1em"}}>Crear nueva cuenta</Link>
    <RaisedButton onClick={props.requestAuth} label="Iniciar sesión" backgroundColor={red600} labelColor={white} />
  </div>
);

const SignUpActions = (props) => (
  <div>
    <Link to="/login" style={{marginRight:"1em"}}>Ya tengo una cuenta</Link>
    <RaisedButton onClick={props.createAccount}
      label="Crear cuenta" backgroundColor={red600}
      labelColor={white}
    />
  </div>
)
class Login extends React.Component{

  constructor(props){
    super(props);

    this.createAccount = this.createAccount.bind(this);
    this.requestAuth = this.requestAuth.bind(this);
    this.auth = this.auth.bind(this);
  }

  requestAuth(){
    const credentials = {
      email: this.refs.emailField.getValue(),
      password: this.refs.passwordField.getValue(),
    }

    login(credentials).then(this.auth).catch(console.log);
  }
  auth(data){
    this.props.dispatch(actions.login(data.jwt));
    this.props.dispatch(actions.loadUser(data.user));
    this.props.dispatch(push('/'));
  }

  createAccount(){
    console.log(this.nameElement);
    const credentials = {
      email: this.refs.emailField.getValue(),
      password: this.refs.passwordField.getValue(),
      name: this.nameElement.getValue()
    }

    console.log(credentials);
    signUp(credentials).then(this.auth).catch(console.log);
  }
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
                  ref="emailField"
                />
                <TextField
                    floatingLabelText="Contraseña"
                    type="password"
                    className="textfield"
                    ref="passwordField"
                />
                <Route path="/signup" exact render={()=> ( <NameField   nameRef={(el) => this.nameElement = el } /> )}></Route>

                <div className="Login-actions">
                    <Route path="/login"
                       exact
                       render={()=>(<LoginActions requestAuth={this.requestAuth} /> ) }>   
                    </Route>
                    <Route path="/signup"
                       exact
                       render={()=>(<SignUpActions createAccount={this.createAccount} /> ) }>   
                    </Route>
                </div>
              </div>
            </Container>
          </div>
          <div className="col-xs-12 col-sm-6">		
              <div>
                <Route path="/login" exact render={()=>	  
                    <div className="Login-background img-cover"
                      style={{'backgroundImage': 
                      "url("+process.env.PUBLIC_URL + '/images/sign-up6.jpg'+")"}}></div>           
                }></Route>
                        
                <Route path="/signup" exact render={()=>
                    <div className="Login-background img-cover"
                      style={{'backgroundImage': 
                      "url("+process.env.PUBLIC_URL + '/images/sign-up4.jpg'+")"}}></div>
                    }></Route>   
              </div>
          </div>
        </div>
    )
  }
}

function mapStateProps(state,ownProps){
  return{
    user: state.user
  }
}

export default connect(mapStateProps)(Login);