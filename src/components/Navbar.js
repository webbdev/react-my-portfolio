import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {

  state = {};

  getNavLinkClass = path => {
    return this.props.location.pathname === path
      ? "nav-item active"
      : "nav-item";
  };
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Tanya
        </Link>

        <div>
          <ul className="navbar-nav">
            <li className={this.getNavLinkClass("/")}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className={this.getNavLinkClass("/about")}>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);