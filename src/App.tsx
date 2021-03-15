import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Rovers } from './pages/Rovers/Rovers';
import 'react-toastify/dist/ReactToastify.css';

export const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Rovers />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
