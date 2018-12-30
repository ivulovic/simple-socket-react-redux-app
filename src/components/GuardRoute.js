import React from "react";
import {Route} from "react-router-dom";
import {NotFound} from "./NotFound";

const renderComponent = (component, ...rest) => {
  const props = Object.assign({}, ...rest);
  return React.createElement(component, props);
};

export const GuardRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return rest.guard ? renderComponent(component, routeProps, rest) : <NotFound/>;
    }}/>
  );
};