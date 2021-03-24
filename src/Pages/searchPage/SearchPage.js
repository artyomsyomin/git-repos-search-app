import React from 'react';

const SeactPage = ({inputHandler, searchText}) => {


  
  return (
    <div>
      <h1>This is a Search Page</h1>
      <input type="text" name="search" placeholder="Repos name" onChange={inputHandler}/>
      <p>You search: {searchText}</p>
    </div>
  );
};

export default SeactPage;
