import React, { useState } from 'react';

import Pagination from '../../Components/pagination/Pagination';
import Card from '../../Components/card/Card';

import { connect } from 'react-redux';

import {
  setReposList,
  setCurrentPage,
  setSearchText,
  removeReposList
} from '../../redux/actions/listAction';

const urlSearch = 'https://api.github.com/search/repositories?q=';

const SearchPage = ({
  reposInfo,
  loading,
  currentPage,
  searchText,
  setReposList,
  setCurrentPage,
  setSearchText,
  removeReposList
}) => {
  // const [searchText, setSearchText] = useState('');
  // const [fetchedData, setFetchedData] = useState('');
  // const [fullUrl, setFullUrl] = useState('');
  // const [searchResult, setSearchResult] = useState('');

  // const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(10);
  const [totalRepos, setTotalRepos] = useState('');
  // const [loading, setLoading] = useState(false);

  // const [reposInfo, setReposInfo] = useState([]);

  const inputHandler = (e) => {
    const searchInput = e.target.value;
    setSearchText(searchInput);
    // setFullUrl(urlSearch + searchInput);

    const fetchRepos = async () => {
      // setLoading(true);
      const res = await fetch(urlSearch + searchInput + '&sort=stars');
      const data = await res.json();
      if (data.items) {
        setTotalRepos(data.items.length);
        setCurrentPage(1);
        setReposList(data.items);
      } else {
        setTotalRepos('');
        setCurrentPage(1);
        // setReposList(data.items);
        // removeReposList()
      }
      // setLoading(false);
    };

    fetchRepos();
  };


  let currentRepo = [];
  if (reposInfo) {
    if (reposInfo.length && reposInfo.length > reposPerPage) {
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
        value={searchText}
      />
      <p>You search: {searchText}</p>
      {/* <Route exact path={`${match.path}`} component={RepositoryInfo}/> */}
      <Card reposInfo={currentRepo} loading={loading}/>
      <Pagination
        reposPerPage={reposPerPage}
        totalRepos={totalRepos}
        paginate={paginate}
      />
    </div>
  );
};

export default connect(
  (state) => ({
    // totalRepos: state.listReducer.totalRepos,
    reposInfo: state.listReducer.reposInfo,
    currentPage: state.listReducer.currentPage,
    // reposPerPage: state.listReducer.reposPerPage,
    loading: state.listReducer.loadingList,
    searchText: state.listReducer.searchText,
  }),
  { setReposList, setCurrentPage, setSearchText,removeReposList }
)(SearchPage);
