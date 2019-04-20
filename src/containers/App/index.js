import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../../containers/Home';
//import NotFound from '../../containers/NotFoundPage/Loadable';

import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <Router>
          <Route exact path={ROUTES.HOME} component={Home} />
      </Router>
    </div>
  </Router>
);

export default App;