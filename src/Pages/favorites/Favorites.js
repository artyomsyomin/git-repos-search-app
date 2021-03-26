import React, { useEffect } from 'react';

import Card from '../../Components/card/Card';

import { connect } from 'react-redux';

import './favorites.css';

import {
  addFavorites,
  removeFavorites,
  loadFavorites,
} from '../../redux/actions/favorAction';

const Favorites = ({
  addFavorites,
  removeFavorites,
  favorites,
  loadFavorites,
}) => {
  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <div className="favor-page">
      <h1>Your Favorites</h1>
      <Card
      favorites={favorites}
        reposInfo={favorites}
        removeFavorites={removeFavorites}
        addFavorites={addFavorites}
      />
    </div>
  );
};

export default connect((state) => ({ favorites: state.favorReducer }), {
  addFavorites,
  removeFavorites,
  loadFavorites,
})(Favorites);

