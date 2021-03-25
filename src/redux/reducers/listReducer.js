import { loadStorage } from '../localStorage';

const loadedData = loadStorage();
let INITIAL_STATE = {};
if (!loadedData || !loadedData.length) {
  INITIAL_STATE = {
    currentPage: 1,
    // loadingList: false,

    reposInfo: [],
    searchText: '',
    totalRepos: '',
  };
} else {
  INITIAL_STATE = { ...loadedData };
}

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_REPOS_LIST':
      return {
        ...state,
        reposInfo: action.reposInfo,
      };
    case 'REMOVE_REPOS_LIST':
      return {
        ...state,
        reposInfo: [],
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case 'SET_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText,
      };
    case 'LOAD_DATA_TO_LOCALSTORAGE':
      return {
        ...state,
        ...action.loadedData,
      };
    case 'SET_TOTAL_REPOS':
      return {
        ...state,
        totalRepos: action.totalRepos,
      };
    default:
      return state;
  }
};

export default listReducer;
