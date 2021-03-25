import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import RepositoryInfo from '../../Pages/RepositoryInfo/RepositoryInfo';

import './card.css';

const Card = ({ reposInfo, loading }) => {
  console.log(reposInfo);
  let cardInfo = '';

  !reposInfo.length
    ? (cardInfo = <h1>Type Something</h1>)
    : (cardInfo = reposInfo.map((item) => {
        console.log('IN MAAAAAAAP');
        return (
          <Link key={item.id} className="repo-item" to={`/${item.full_name}`}>
            <div className="card">
              <h3>Repo name: {item.name}</h3>
              <h3>Stars: {item.stargazers_count}</h3>
              <p>Last Commit: {item.updated_at}</p>
              <p>Description: {item.description}</p>
              <a href={item.html_url}>Go to GitHub</a>
              {/* <p>Contributors: {item.contributors}</p> */}
            </div>
          </Link>
        );
      }));
  return <>{cardInfo}</>;
};

export default Card;
