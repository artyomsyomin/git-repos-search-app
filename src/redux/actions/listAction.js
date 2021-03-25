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

export const removeReposList = () => {
  return {
    type: 'REMOVE_REPOS_LIST',
  };
};
