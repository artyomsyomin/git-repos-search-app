import React from 'react';

import "./pagination.css";

const Pagination = ({ reposPerPage, totalRepos, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRepos/reposPerPage); i++ ) {
        pageNumbers.push(i)
    }

  return <div>
      <ul className="pagination-items">
          {pageNumbers.map((number)=>(
              <li className='pagination-item' key={number} >
                   <a onClick={()=>paginate(number)} href="!#">
                       {number}
                   </a>
              </li>
          ))}
      </ul>
  </div>;
};

export default Pagination;
