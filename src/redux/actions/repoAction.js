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
