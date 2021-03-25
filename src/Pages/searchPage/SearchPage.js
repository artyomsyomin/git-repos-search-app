import React, { useState } from 'react';

// import RepositoryInfo from '../../Pages/RepositoryInfo/RepositoryInfo'
import Pagination from '../../Components/pagination/Pagination';
import Card from '../../Components/card/Card';

const urlSearch = 'https://api.github.com/search/repositories?q=';

const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  // const [fetchedData, setFetchedData] = useState('');
  // const [fullUrl, setFullUrl] = useState('');
  // const [searchResult, setSearchResult] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [totalRepos, setTotalRepos] = useState('');

  const [reposInfo, setReposInfo] = useState([]);

  const inputHandler = (e) => {
    const searchInput = e.target.value;
    setSearchText(searchInput);
    // setFullUrl(urlSearch + searchInput);

    const fetchRepos = async () => {
      setLoading(true);
      const res = await fetch(urlSearch + searchInput + '&sort=stars');
      const data = await res.json();
      console.log(111111111111111);
      if (data.items) {
        setTotalRepos(data.items.length);
        setCurrentPage(1);
      } else {
        setTotalRepos('');
        setCurrentPage(1);
      }
      setReposInfo(data.items);
      setLoading(false);
    };

    fetchRepos();
  };

  let currentRepo = [];
  if (reposInfo) {
    if (reposInfo.length && reposInfo.length > reposPerPage) {
      console.log(2222222222);
      console.log(reposInfo);
      const indexOfLastRepo = currentPage * reposPerPage;
      const indexOfFirstRepo = indexOfLastRepo - reposPerPage;

      currentRepo = reposInfo.slice(indexOfFirstRepo, indexOfLastRepo);
      // setReposInfo(currentRepo);
    }
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1>This is a Search Page</h1>
      <input
        type="text"
        name="search"
        placeholder="Repos name"
        onChange={inputHandler}
      />
      <p>You search: {searchText}</p>
      {/* <Route exact path={`${match.path}`} component={RepositoryInfo}/> */}
      <Card reposInfo={currentRepo} loading={loading} />
      <Pagination
        reposPerPage={reposPerPage}
        totalRepos={totalRepos}
        paginate={paginate}
      />
    </div>
  );
};

export default SearchPage;
