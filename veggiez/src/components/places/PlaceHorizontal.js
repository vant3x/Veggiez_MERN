import React from 'react';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {red800, red600, red500,red400,redA400,white} from 'material-ui/styles/colors';
import {green400, green500,green600,lightGreen500,lightGreen800,lightGreen600} from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';

import './PlaceHorizontal.css';
export default class PlaceHorizontal extends React.Component{
  render(){
    return(
      <Card className="Card-h">
        <div className="row">
          <div className="PlaceH-avatar">
            <img className="place-img" src={this.props.place.avatarImage}  />
          </div>
          <div className="col-xs" style={{'textAlign':'left'}}>
            <CardHeader 
              title={<h2>{this.props.place.title}</h2>}
              subtitle={this.props.place.address}
            />
            <div className="row middle-xs">
              <div className="col-xs-6 col-sm-8 col-md-8 col-lg-9" >
                <CardText>{this.props.place.description}</CardText>
              </div>
              <div className="col-xs">
                <CardActions>
                  <Link to={"/lugares/"+this.props.place.slug}>
                    <FlatButton backgroundColor={lightGreen800} className="btn-more" style={{'color':white}}  label="Ver más" />
                  </Link>
                </CardActions>
              </div>
            </div> 
          </div>
        </div>
      </Card>
    );
  }
}
