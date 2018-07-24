import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import {red700, red800, red600, red500,red400,redA400} from 'material-ui/styles/colors';
import {white} from 'material-ui/styles/colors';
import {green400, green500,green600,green800,green900,lightGreen500,lightGreen800,lightGreen600} from 'material-ui/styles/colors';

import Title from '../components/Title';
import Container from '../components/Container';
import Benefits from '../components/Benefits';
import PlaceCard from '../components/places/PlaceCard';

import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/* DATOS | API  */
import data from '../request/places';
import {getPlaces} from '../request/places';
import Dashboard from './Dashboard';


class Home extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      places: data.places
    }

  // setTimeout(()=> this.setState({places: data.places}),950)
    console.log(this.props.places);

    this.hidePlace = this.hidePlace.bind(this);
  }
  
  loadPlaces(){
    getPlaces().then(jsonR=>{
      const places = jsonR.docs;

    })
  }

    places() {
        return  this.state.places.map((place,index) => {
          return (
            <PlaceCard onRemove={this.hidePlace} place={place} index={index} />
          );
        })
    }

    hidePlace(place){
      this.setState({
        places: this.state.places.filter(el => el != place)
      })
    }
    render() {
        return(
        <section>   
          <div className="Header-background">
            <Container>
              <div className="Header-main">
                  <Title></Title>
                  <Link to="/signup">
                    <RaisedButton label="Crear cuenta gratuita" backgroundColor={red600} labelColor={white} className="padding-right"/>
                  </Link>
                  
                  <img className="Header-ilustration" src={process.env.PUBLIC_URL + '/images/rest.png'}  alt=""/>
                </div>
                <div>
                  <Benefits/>
                </div>
            </Container>
          </div>
          <div style={{'backgroundColor':lightGreen800, 'padding':'50px', color:'white'}}>
            <h3 style={{'fontSize':'1.6em'}}>Sitios Populares</h3>
            <TransitionGroup className="row">
              {this.places()}
            </TransitionGroup>
          </div>
        </section>
        );
    }
}

function mapStateProps(state,ownProps){
  return{
    places: state.places
  }
}

export default connect(mapStateProps)(Home);