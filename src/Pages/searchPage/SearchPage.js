import React, { useState, useEffect } from 'react';

import Pagination from '../../Components/pagination/Pagination';
import Card from '../../Components/card/Card';

import { connect } from 'react-redux';

import './searchPage.css';

import {
  setReposList,
  setCurrentPage,
  setSearchText,
  removeReposList,
  saveDataToLocalStorage,
  clearDataInLocalStorage,
  loadDataFromLocalStorage,
  setTotalRepos,
} from '../../redux/actions/listAction';

import {
  addFavorites,
  removeFavorites,
  loadFavorites,
} from '../../redux/actions/favorAction';

const urlSearch = 'https://api.github.com/search/repositories?q=';

const SearchPage = ({
  reposInfo,
  totalRepos,
  loading,
  currentPage,
  searchText,
  setReposList,
  setCurrentPage,
  setSearchText,
  saveDataToLocalStorage,
  clearDataInLocalStorage,
  loadDataFromLocalStorage,
  setTotalRepos,
  addFavorites,
  removeFavorites,
  loadFavorites,
}) => {
  const [reposPerPage] = useState(10);

  const fetchRepos = async (inputText) => {
    const res = await fetch(urlSearch + inputText + '&sort=stars');
    const data = await res.json();
    if (data.items) {
      setTotalRepos(data.items.length);
      setCurrentPage(1);
      setReposList(data.items);
    } else {
      setTotalRepos('');
      setCurrentPage(1);
    }
  };

  const inputHandler = (e) => {
    const searchInput = e.target.value;
    setSearchText(searchInput);
    if (searchInput) {
      fetchRepos(searchInput);
    } else {
      setReposList([]);
      setTotalRepos('');
      clearDataInLocalStorage();
    }
  };

  useEffect(() => {
    loadDataFromLocalStorage();
    loadFavorites();
  }, []);

  let currentRepo = [];
  if (reposInfo) {
    if (reposInfo.length && reposInfo.length > reposPerPage) {
      saveDataToLocalStorage(currentPage, reposInfo, searchText, totalRepos);
      const indexOfLastRepo = currentPage * reposPerPage;
      const indexOfFirstRepo = indexOfLastRepo - reposPerPage;

      currentRepo = reposInfo.slice(indexOfFirstRepo, indexOfLastRepo);
    }
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    saveDataToLocalStorage(currentPage, reposInfo, searchText, totalRepos);
  };



  return (
    <div className="search-page">
      <div className="input-container">
        <h2>JUST START TYPING...</h2>
        <input
          placeholder="Type repository name"
          type="text"
          id="search"
          onChange={inputHandler}
          value={searchText}
        />
      </div>

      {/* <p>You search: {searchText}</p> */}
      <Card
        reposInfo={currentRepo}
        loading={loading}
        addFavorites={addFavorites}
        removeFavorites={removeFavorites}
      />
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
    reposInfo: state.listReducer.reposInfo,
    currentPage: state.listReducer.currentPage,
    // loading: state.listReducer.loadingList,
    searchText: state.listReducer.searchText,
    totalRepos: state.listReducer.totalRepos,
  }),
  {
    setReposList,
    setCurrentPage,
    setSearchText,
    removeReposList,
    saveDataToLocalStorage,
    clearDataInLocalStorage,
    loadDataFromLocalStorage,
    setTotalRepos,
    addFavorites,
    removeFavorites,
    loadFavorites,
  }
)(SearchPage);
