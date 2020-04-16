import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondComponent';
import CookiePage from './components/CookiePage';
import FortunePage from './components/FortunePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={FirstPage} />
          <Route path="/detail" exact component={SecondPage} />
          <Route path="/fortune" exact component={CookiePage} />
          <Route path="/fortune/user" exact component={FortunePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
