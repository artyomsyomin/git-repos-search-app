export const setRepoInfo = (
  name,
  stars,
  lastCommit,
  userAvatar,
  userLogin,
  languages,
  description,
  contributors
) => {
  return {
    type: 'SET_REPO_INFO',
    name,
    stars,
    lastCommit,
    userAvatar,
    userLogin,
    languages,
    description,
    contributors,
  };
};

// export const startFetching = () => {
//   return {
//     type: 'START_FETCHING',
//   };
// };
// export const successFetching = () => {
//   return {
//     type: 'SUCCESS_FETCHING',
//   };
// };
// export const failFetching = () => {
//   return {
//     type: 'FAIL_FETCHING',
//   };
// };
