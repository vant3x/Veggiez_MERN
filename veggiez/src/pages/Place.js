import React from 'react';
import Container from '../components/Container';
import VisitModal from '../components/visits/VisitModal';
import {Card} from 'material-ui/Card';
import { getPlace } from '../request/places';
import { withRouter } from 'react-router-dom';
import './Place.css';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import {green400, green500,green600,green800,green900,lightGreen500,lightGreen800,lightGreen600} from 'material-ui/styles/colors';
import { white } from 'material-ui/styles/colors';
 class Place extends React.Component{
  constructor(props){
    super(props);
    const slug = props.match.params.slug;
    this.loadPlace(slug);

    this.state = {
      place: {}
    }
  }

  loadPlace(slug){
    getPlace(slug).then(json=>{
      console.log(json);

      this.setState({
        place: json
      })
    })
  }

  render(){
    const {place} = this.state;
    return(
      <div className="Place-container">
        <VisitModal place={place} />
        <header 
          className="Place-cover" 
          style={{'backgroundImage': 'url('+place.coverImage+')'}}>
        </header>
        <Container>
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <Card className="Place-card">
                <div className="row">
                  <div className="col-xs-12 col-sm-3 col-lg-2">
                    <img src={place.avatarImage} style={{'maxWidth':'100%'}} alt=""/>
                  </div>
                  <div className="col-xs">
                    <h1>{place.title}</h1>
                    <address>{place.address}</address>
                    <p>{place.description}</p>
                  </div>
                </div>
                <div style={{'marginTop':'1em'}}>
                  <FlatButton label="Agregar un comentario"  style={{'color':lightGreen800}} />
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    );
  }
} 

export default withRouter(Place);