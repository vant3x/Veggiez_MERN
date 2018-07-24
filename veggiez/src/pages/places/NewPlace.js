import React from 'react';
import { connect } from 'react-redux';
import Title from '../../components/Title';
import Container from '../../components/Container';
import Validation from './Validation';
import Uploader from '../../components/uploader/Uploader';
import './Validation.css';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card } from 'material-ui/Card';
import {white,green600,green800,green900,lightGreen500,lightGreen800,lightGreen600} from 'material-ui/styles/colors';
import './NewPlace.css';
import { push } from 'react-router-redux';
import * as request from '../../request/places';

const textStyles = {
  'width': '100%'
}

class NewPlace extends React.Component {

  constructor(props){
    super(props);
    
    this.state = {uploading: false};

    this.validation = React.createRef()
    this.createPlace = this.createPlace.bind(this);
    this.getFile = this.getFile.bind(this);
  }
  createPlace(){
    const data = {
      title: this.refs.titleField.getValue(),
      address: this.refs.addressField.getValue(),
      description: this.refs.descriptionField.getValue()
    }

    if(data['title'] == "" || data["address"] == "" || data["description"] == ""){
      this.validation.current.style.display = 'grid'
      return "";
    }else{
      this.validation.current.style.display = 'none'
    }

    if(this.state.avatar) data.avatar = this.state.avatar;
    if(this.state.cover) data.cover = this.state.cover;

    this.setState({uploading: true})

    request.createPlace(data,this.props.user.jwt).then(data => {
      console.log(data);
      this.setState({uploading: false})
      this.props.dispatch(push('/lugares/'+data.slug));
    }).catch(console.log);
  }

  getFile(type,file){
    let state = {};
    state[type] = file;

    this.setState(state);
  }
  render(){
    
    return(
      <div>
        <Container>
          <Card className="Card-newPlace">
            <header className="header-newp">
              <Title />
            </header>
            <div>
              <TextField
                floatingLabelText="Nombre del restaurante"
                ref="titleField"
                style={textStyles}
              />
              <TextField
                floatingLabelText="Dirección"
                ref="addressField"
                style={textStyles}
              />
              <div style={{'marginTop':'1em'}}>
                <Uploader label="Subir Avatar" type='avatar' getFile={this.getFile} />
              </div>
              <div style={{'marginTop':'1em'}}>
                <Uploader label="Subir Cover" type='cover' getFile={this.getFile} />
              </div>
              <TextField
                floatingLabelText="Descripción del negocio"
                ref="descriptionField"
                style={textStyles}
                multiLine={true}
              />
              <div className="Validation-container" ref = {this.validation}>
                Toda la información debe ser llenada
              </div>

              <div className="align-right m-top">
                <RaisedButton label="Crear restaurante"
                  onClick={this.createPlace}
                  backgroundColor={lightGreen800}
                  labelColor={white}
                  className="save-btn"
                  disabled={this.state.uploading}
                />
              </div>
            </div>
          </Card>
        </Container>
      </div>
    )
  }
}


export default connect(function(state,ownPlace){  
  return {
    user: state.user
  }
})(NewPlace);
