import React from 'react';
import { Link } from 'react-router-dom';

import './card.css';

const Card = ({ reposInfo, loading }) => {
  //   const visitPage = (url) => {
  //     window.location.href = url;
  //   };

  let cardInfo = '';
  !reposInfo.length
    ? (cardInfo = <h1>Type Something</h1>)
    : (cardInfo = reposInfo.map((item) => {
        return (
          <div key={item.id} className="card">
            <Link className="repo-item" to={`/${item.full_name}`}>
              <h3>Repo name: {item.name}</h3>
              <h3>Stars: {item.stargazers_count}</h3>
              <p>Last Commit: {item.updated_at}</p>
              <p>Description: {item.description}</p>
              {/* <button onClick={visitPage(item.html_url)}>Visit Page Now</button> */}
              {/* <p onClick={() => visitPage(item.html_url)}>Visit Page Now</p> */}
              {/* <p onClick={() => onclick="window.location.href='otherlink'"}>Visit Page Now</p> */}
            </Link>
            <a className="git-link" href={item.html_url}>
              Go to GitHub
            </a>
          </div>
        );
      }));
  return <>{cardInfo}</>;
};

export default Card;
