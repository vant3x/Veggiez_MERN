import React from 'react';
import {red900, red700, red800, red600, red500,red400,redA400, deepOrange500} from 'material-ui/styles/colors';
import {white,amber400} from 'material-ui/styles/colors';
import {green400, green500,green300,green600,green800,green900,lightGreen500,lightGreen800,lightGreen600} from 'material-ui/styles/colors';

import { Card, CardText, CardMedia, CardTitle, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FadeAndScale from '../animations/FadeAndScale';

export default class PlaceCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: true
    }
  }
    render() {
      return(
        <FadeAndScale className="col-xs-12 col-sm-4"  in={this.props.in}>
          <div>
            <Card className="cards-veg">
              <CardMedia>
                  <img className="veggiez-pictures-favs" src={process.env.PUBLIC_URL + this.props.place.imageUrl} alt=""/>
              </CardMedia>
              <CardTitle title={this.props.place.title}></CardTitle>
              <CardText>{this.props.place.description}</CardText>
              <CardActions style={{'textAlign':'right'}}>
                <FlatButton label="Más información" backgroundColor={red600} style={{'color':'white'}} />
                <FlatButton secondary={true}  onClick={()=> this.props.onRemove(this.props.place)} label="Ocultar" />
              </CardActions>
            </Card>
          </div>
        </FadeAndScale>
    ); 
  }
}
