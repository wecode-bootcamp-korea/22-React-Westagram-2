import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// cw
import LoginCw from './pages/cw/Login/LoginCw';
import MainCw from './pages/cw/Main/MainCw';

// jj
import LoginJj from './pages/jj/Login/LoginJj';
import MainJj from './pages/jj/Main/MainJj';

// somi
import LoginSomi from './pages/somi/Login/LoginSomi';
import MainSomi from './pages/somi/Main/MainSomi';

// summer
import LoginSummer from './pages/summer/Login/LoginSummer';
import MainSummer from './pages/summer/Main/MainSummer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* cw */}
          <Route exact path="/cw" component={LoginCw} />
          <Route exact path="/cw/main" component={MainCw} />

          {/* jj */}
          <Route exact path="/jj" component={LoginJj} />
          <Route exact path="/jj/main" component={MainJj} />

          {/* somi */}
          <Route exact path="/somi" component={LoginSomi} />
          <Route exact path="/somi/main" component={MainSomi} />

          {/* summer */}
          <Route exact path="/summer" component={LoginSummer} />
          <Route exact path="/summer/main" component={MainSummer} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
