import React, { Component } from "react";
import { Link } from "react-router-dom";


export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand ">
              React Landing Page
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/solhidrex">
                  Solhidrex
                </Link>
              </li>
              <li>
                <Link to="/labinpina">
                  Labinpina
                </Link>
              </li>
              <li>
                <Link to="/laxium">
                  Laxium
                </Link>
              </li>
              <li>
                <Link to="/dimenol">
                  Dimenol
                </Link>
              </li>
              <li>
                <Link to="/diarrea">
                  Diarrea
                </Link>
              </li>
              <li>
                <Link to="/contactus" >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
