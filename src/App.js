import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import SearchPage from './Pages/searchPage/SearchPage';

import RepositoryInfo from './Pages/RepositoryInfo/RepositoryInfo';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path={`/:author/:repName`} component={RepositoryInfo} />
      </Switch>
    </div>
  );
}

export default App;
