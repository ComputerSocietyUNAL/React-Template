import React , { Component } from 'react';
import Navigation from './navigation';


export default class Main extends Component {

    render(){
        return(
            <div className="container"> 
                <div >
                <Navigation />
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <p className="texti">Puntos de Venta</p>
                    </div>
                    <div className="col-md-11 header">
                        
                        <img src="/assets/img/Header_1.png" height="200" 
                            style={{
                                position:"absolute",
                                top:"0%",
                                left:"0%"
                        }} />
                        
                        <img src="/assets/img/Header_2.png" height="400" 
                            style={{
                        }} />
                        <img src="/assets/img/Header_3.png" height="200" 
                            style={{
                                position:"absolute",
                                top:"60%",
                                left:"0%"
                        }} />
                    </div>
                    <div className="col-md-12">
                        <p>aqui deberia funcionar :'v </p>
                    </div>
                </div>
            </div>
        );
    }
}