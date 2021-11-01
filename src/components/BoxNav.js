import React from "react";
import Box from "./Box";
import Name from "./Name";
import { Switch, Route, useRouteMatch } from "react-router-dom";
const BoxNav = () => {
  const match = useRouteMatch();
  const allBoxes = () => {
    return (
      <div>
        <Box name="Maria" title="CEO" age="29" />
        <Box name="Karin" title="Developer" age="29" />
        <Box name="Kati" title="Designer" age="25" />
      </div>
    );
  };
  return (
    <div>
      <Switch>
        <Route exact path={match.path}>
          {allBoxes}
        </Route>
        <Route path={`${match.path}/:personName`}>
          <Name />
        </Route>
      </Switch>
    </div>
  );
};

export default BoxNav;
