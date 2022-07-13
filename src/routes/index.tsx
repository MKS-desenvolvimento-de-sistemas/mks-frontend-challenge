import { Route, Switch } from "react-router-dom";
import { Store } from "../pages/Store";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Store} />
    </Switch>
  );
};
