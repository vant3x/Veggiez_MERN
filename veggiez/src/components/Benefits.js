import React from 'react';

import {red900, red700, red800, red600, red500,red400,redA400, deepOrange500} from 'material-ui/styles/colors';
import {white,amber400} from 'material-ui/styles/colors';
import {green400, green500,green300,green600,green800,green900,lightGreen500,lightGreen800,lightGreen600} from 'material-ui/styles/colors';

import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card';
export default class Benefit extends React.Component{
    render() {
        return (
            <ul>
            <Card className="Header-Benefit">
                <CardText>
                <div className="row">
                    <div className="Header-Benefit-image"  style={{'backgroundColor':redA400}}>
                    <img className="cards-img" src={process.env.PUBLIC_URL +'./images/benefits/heartw.png'} alt=""/>
                    </div>
                    <div className="Header-Benefit-content">
                    <h3>Califica los lugares con emociones</h3>
                    <p>Tus experiencias en cada restaurante cuentan, así que puedes calificarlas con sabores</p>
                    </div>
                </div>
                </CardText>
            </Card>

            <Card className="Header-Benefit">
                <CardText>
                <div className="row">
                    <div className="Header-Benefit-image"  style={{'backgroundColor':red500}}>
                    <img className="cards-img" src={process.env.PUBLIC_URL +'./images/benefits/search.png'} alt=""/>
                    </div>
                    <div className="Header-Benefit-content">
                    <h3>Búsqueda inteligente</h3>
                    <p>Nuestro sistema de búsqueda inteligente permite  buscar los restaurantes más cercanos</p>
                    </div>
                </div>
                </CardText>
            </Card>
            
            <Card className="Header-Benefit">
                <CardText>
                <div className="row">
                    <div className="Header-Benefit-image"  style={{'backgroundColor':green800}}>
                    <img className="cards-img" src={process.env.PUBLIC_URL +'./images/benefits/mapf.png'} alt="" />
                    </div>
                    <div className="Header-Benefit-content">
                    <h3>Tus lugares favoritos</h3>
                    <p>Selecciona y comparte tus sitios cercanos favoritos con los demás</p>
                    </div>
                </div>
                </CardText>
            </Card>
            </ul>
        )
    }
}