import React, {  } from 'react';

import './card.css';

const Card = ({ reposInfo }) => {
    // const [languages, setLanguages] = useState('')
  // console.log(props.repName)
  console.log(reposInfo);
  let cardInfo = '';
  !reposInfo
    ? (cardInfo = <h1>Type Something</h1>)
    : (cardInfo = reposInfo.items.map((item) => {
        console.log(item.avatar_url)
        
        return (
          <div key={item.id} className="card">
            <h3>Repo name: {item.name}</h3>
            <h3>Stars: {item.stargazers_count}</h3>
            <p>Last Commit: {item.updated_at}</p>
            {/* <p>User Avatar:</p> */}
            {/* <img src={item.owner.avatar_url} alt='user-avatar'/> */}
            
            {/* <p>Languages: {languages}</p> */}
            <p>Description: {item.description}</p>
            {/* <p>Contributors: {item.contributors}</p> */}
          </div>
        );
      }));
  return (
    <>{cardInfo}</>
    // <div className='card'>
    // <h3>Repo name: {name}</h3>
    //     {/* <p>Last Commit: {lastCommit}</p>
    //     <p>User Avatar: {userAvatar}</p>
    //     <p>Languages: {languages}</p>
    //     <p>Description: {description}</p>
    //     <p>Contributors: {contributors}</p> */}
    // </div>
  );
};

export default Card;
