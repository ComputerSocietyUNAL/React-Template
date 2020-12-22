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
                        <p>Puntos de Venta</p>
                    </div>
                    <div className="col-md-11 header">
                        
                        <img src="/assets/img/Header_1.png" height="200"  className="headerMsg" />
                        
                        <img src="/assets/img/Header_2.png" height="400" className="headerImg" />
                        
                        <img src="/assets/img/Header_3.png" height="200" className="headerPro" />
                        
                        
                    </div>
                </div>
            </div>
        );
    }
}