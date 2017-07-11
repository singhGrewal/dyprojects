import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => (
    <nav className="navbar navbar-default navbar-inverse" role="navigation">
      <div className="col-xs-12 col-sm-offset-4" id="navfluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigationbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </button>
          <a className="navbar-brand"><Link to="/">Grewal</Link></a>
        </div>
        <div className="collapse navbar-collapse" id="navigationbar">
          <ul className="nav navbar-nav">
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/todoApp">Todo App</Link></li>
          </ul>
        </div>
      </div>
    </nav>
);

export default Navigation;
