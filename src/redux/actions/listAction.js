import { saveStorage, clearStorage, loadStorage } from '../localStorage';

export const setReposList = (reposInfo) => {
  return {
    type: 'SET_REPOS_LIST',
    reposInfo,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: 'SET_CURRENT_PAGE',
    currentPage,
  };
};

export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText,
  };
};

export const setTotalRepos = (totalRepos) => {
  return {
    type: 'SET_TOTAL_REPOS',
    totalRepos,
  };
};

export const removeReposList = () => {
  return {
    type: 'REMOVE_REPOS_LIST',
  };
};

export const saveDataToLocalStorage = (
  currentPage,
  reposInfo,
  searchText,
  totalRepos
) => {
  const stateToLoad = {
    currentPage,
    reposInfo,
    searchText,
    totalRepos,
  };
  saveStorage(stateToLoad);
  return {
    type: 'SAVE_DATA_TO_LOCALSTORAGE',
  };
};

export const loadDataFromLocalStorage = () => {
  const loadedData = loadStorage();
  return {
    type: 'LOAD_DATA_TO_LOCALSTORAGE',
    loadedData,
  };
};

export const clearDataInLocalStorage = () => {
  clearStorage();
  return {
    type: 'CLEAR_LOCAL_STORAGE',
  };
};
