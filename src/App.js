import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import SearchPage from './Pages/searchPage/SearchPage';

import RepositoryInfo from './Pages/repositoryInfo/RepositoryInfo';
import Favorites from './Pages/favorites/Favorites'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path={`/:author/:repName`} component={RepositoryInfo} />
        <Route exact path='/favorites' component={Favorites} />
      </Switch>
    </div>
  );
}

export default App;
