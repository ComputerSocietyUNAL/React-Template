import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Main from './components/Main'
import Solhidrex from './components/Solhidrex/index';
import Laxium from './components/Laxium/index';
import Labinpina from './components/Labinpina/index';
import Diarrea from './components/Diarrea/index';
import Dimenol from './components/Dimenol/index';
import ContactUS from './components/Contacto/index';


import JsonData from './data/data.json'; 

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
              {/* <Header data={this.state.landingPageData.Header} /> */}
            <Route path="/solhidrex" >
              <Solhidrex />
            </Route>
            <Route path="/labinpina" >
              <Labinpina />
            </Route>
            <Route path="/laxium" >
              <Laxium />
            </Route>
            <Route path="/dimenol" >
              <Dimenol />
            </Route>
            <Route path="/diarrea" >
              <Diarrea />
            </Route>
            <Route path="/contactus" >
              <ContactUS />
            </Route>
            <Route path="/home" >
              <Main />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
