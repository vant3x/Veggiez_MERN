import React from 'react';
import Container from '../components/Container';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import PlaceHorizontal from '../components/places/PlaceHorizontal';

import Button from 'material-ui/IconButton';
/* colores */
import {red800, red600, red500,red400} from 'material-ui/styles/colors';
import {white} from 'material-ui/styles/colors';
import {green500,green600,lightGreen800,lightGreen600} from 'material-ui/styles/colors';

import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import './dashboard.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getPlaces} from '../request/places';

import * as actions from '../actions/placesActions.js';

 class Dashboard extends React.Component{ 
  constructor(props){
    super(props);

    // this.state = {
    //   places: []
    // }
    this.loadPlaces()
  }

  loadPlaces(){
    this.props.dispatch(actions.loadAll())
  }

  places(){
    return this.props.places.map((place,index)=>{
      return <PlaceHorizontal place={place} />
    })
  }
  render(){

    return(
      <div>
        <Link to='/new'>    
            {/* <RaisedButton  backgroundColor={red600} labelColor={white} label="Nuevo restaurante" className="FAB" style={{'backgroundColor':red600}}>
            </RaisedButton> */}
            <FloatingActionButton
            backgroundColor={lightGreen800} 
              className="FAB"  
            >
              <ContentAdd/>
            </FloatingActionButton>

        </Link>
        <Container>
          <div className="row">
            <div className="col-xs-12 col-md-2 block" style={{'textAlign':'left'}}>
              <FlatButton  label="Explorar"/>
              <br/>
              <FlatButton label="Favoritos"/>
              <FlatButton  label="Visitas recientes"/>
            </div>
            <div className="col-xs-12 col-md-10">
              {this.places()}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

function mapStateProps(state,OwnProps){
  return{
    places: state.places
  }
}

export default connect(mapStateProps)(Dashboard);