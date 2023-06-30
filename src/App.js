import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import SignupPage from './Components/SignupPage/SignupPage';
import LoginPage from './Components/LoginPage/LoginPage';
import FlightReservationForm from "./Components/reserve-page/FlightReservationForm";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import NewPassword from './Components/NewPassword/NewPassword';


function Router() {
  return (
    <div>
    <HashRouter>
    <Switch> 
          <Route exact path="/flightreservation" component={FlightReservationForm}/>
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/forgot" component={ForgotPassword}/>
          <Route exact path="/NewPass" component={NewPassword}/>
          <Route path="/" component={SignupPage} />
    </Switch>
    </HashRouter>
    </div>
    );
}

export default Router;