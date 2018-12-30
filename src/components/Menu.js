import React from "react";
import {NavLink} from "react-router-dom";
import FlatButton from 'material-ui/FlatButton';

export const Menu = (props) => (
  <div>
    <ul className={"menu-ul"}>
      <li> <NavLink exact activeClassName="activeLink" to="/">Home</NavLink> </li>
      {props.loggedIn && <li> <NavLink activeClassName="activeLink" to="/profile">Profile</NavLink> </li>}
      {!props.loggedIn && <li> <FlatButton onClick={props.onLogin} label="Log In" /> </li>}

    </ul>

  </div>
);

