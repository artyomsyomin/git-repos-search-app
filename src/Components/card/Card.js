import React from 'react';
import { Link } from 'react-router-dom';

import './card.css';

const Card = ({ reposInfo, loading, addFavorites, removeFavorites }) => {
  // console.log("CARD=======" + favorites)
  let cardInfo = '';
  !reposInfo.length
    ? (cardInfo = '')
    : (cardInfo = reposInfo.map((item) => {
        return (
          <div key={item.id} className="card-container">
            <div className="card">
              <Link className="repo-item" to={`/${item.full_name}`}>
                <h3 className="repo-name">{item.name}</h3>
                <p className="repo-stars">
                  <i className="fas fa-star" /> {item.stargazers_count}
                </p>
                <p className="repo-commit">Last update: {item.updated_at}</p>
                <p className="repo-description">{item.description}</p>
              </Link>
              <a className="git-link" href={item.html_url}>
                Go to GitHub
              </a>
            </div>
            <button onClick={() => addFavorites(item.id, reposInfo)}>
              Add to Favorites
            </button>
            <button onClick={() => removeFavorites(item.id)}>
              Remove from Favorites
            </button>
          </div>
        );
      }));
  return <>{cardInfo}</>;
};

export default Card;
