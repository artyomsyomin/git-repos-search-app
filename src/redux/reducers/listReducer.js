const INITIAL_STATE = {
  currentPage: 1,
  //   reposPerPage: 10,
  loadingList: false,
  //   totalRepos: '',
  reposInfo: [],
  searchText: '',
};

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_REPOS_LIST':
      return {
        ...state,
        // totalRepos: action.totalLength,
        // currentPage: action.currentPage,
        reposInfo: action.reposInfo,
      };
    case 'REMOVE_REPOS_LIST':
      return {
        ...state,
        // totalRepos: '',
        // currentPage: 1,
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
    default:
      return state;
  }
};

export default listReducer;
