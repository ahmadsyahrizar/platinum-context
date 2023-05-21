import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./customer/SignIn";
import LandingPage from "./customer/LandingPage"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/sign-in"} component={SignIn} />
        <Route exact path={"/"} component={LandingPage} />
        {/* <Route exact path={"/admin/sign-in"} component={SignIn} /> */}
      </Switch>
    </Router>
  );
};

export default App;
