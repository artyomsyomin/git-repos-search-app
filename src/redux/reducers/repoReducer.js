const INITIAL_STATE = {
  name: '',
  stars: '',
  lastCommit: '',
  userAvatar: '',
  userLogin: '',
  languages: [],
  description: '',
  contributors: [],
  loadingRepo: true,
};

const repoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_REPO_INFO':
      return {
        ...state,
        name: action.name,
        stars: action.stars,
        lastCommit: action.lastCommit,
        userAvatar: action.userAvatar,
        userLogin: action.userLogin,
        languages: action.languages,
        description: action.description,
        contributors: action.contributors,
      };
    case 'REMOVE_REPO_INFO':
      return {
        ...state,
        name: '',
        stars: '',
        lastCommit: '',
        userAvatar: '',
        userLogin: '',
        languages: [],
        description: '',
        contributors: [],
      };
    //   case 'START_FETCHING':

    default:
      return state;
  }
};

export default repoReducer;
