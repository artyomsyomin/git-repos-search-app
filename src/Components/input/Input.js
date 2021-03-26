import React from 'react';

const Input = ({inputHandler, searchText}) => {
  return <div className="input-container">
  <h2 className='page-name'>JUST START TYPING...</h2>
  <input
    placeholder="Type repository name"
    type="text"
    id="search"
    onChange={inputHandler}
    value={searchText}
  />
</div>;
};

export default Input;
