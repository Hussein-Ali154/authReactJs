import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import SignupPage from './Components/SignupPage/SignupPage';
import LoginPage from './Components/LoginPage/LoginPage';
import FlightReservationForm from "./Components/reserve-page/FlightReservationForm";
// import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';


function Router() {
  return (
    <div>
    <HashRouter>
    <Switch> 
      <Route exact path="/flightreservation" component={FlightReservationForm}/>
      <Route exact path="/signup" component={SignupPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route path="/" component={SignupPage} />
    </Switch>
    </HashRouter>
    </div>
    );
}

export default Router;