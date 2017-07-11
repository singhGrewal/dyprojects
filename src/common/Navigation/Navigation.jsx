import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/posts">Posts</Link></li>
    <li><Link to="/resume">Resume</Link></li>
    <li><Link to="/todoApp">Todo App</Link></li>
  </ul>
);

export default Navigation;
