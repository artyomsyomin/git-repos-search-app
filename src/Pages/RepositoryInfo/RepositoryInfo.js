import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { setRepoInfo } from '../../redux/actions/repoAction';

const RepositoryInfo = ({
  match,
  name,
  stars,
  lastCommit,
  userAvatar,
  userLogin,
  languages,
  description,
  contributors,
  setRepoInfo,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchRepoData = async () => {
      const resAll = await fetch('https://api.github.com/repos' + match.url);
      const resLanguages = await fetch(
        'https://api.github.com/repos' + match.url + '/languages'
      );
      const resContributors = await fetch(
        'https://api.github.com/repos' + match.url + '/contributors'
      );

      const dataAll = await resAll.json();
      const dataLanguages = await resLanguages.json();
      const dataContributors = await resContributors.json();

      setData(dataAll, dataLanguages, dataContributors);

      setLoading(false);
    };
    fetchRepoData();
  }, []);

  const setData = (
    {
      name,
      stargazers_count,
      updated_at,
      description,
      owner: { avatar_url, login, html_url },
    },
    dataLanguages,
    dataContributors
  ) => {
    const languagesList = Object.keys(dataLanguages);
    const contributorsList = [];
    dataContributors.slice(0, 10).map((user) => {
      contributorsList.push(user.login);
    });
    setRepoInfo(
      name,
      stargazers_count,
      updated_at,
      avatar_url,
      login,
      languagesList,
      description,
      contributorsList
    );
  };

  let RepoFullInfo = '';

  loading
    ? (RepoFullInfo = <h1>Loading...</h1>)
    : (RepoFullInfo = (
        <div>
          <h1>This is a repository info</h1>
          <p>Name: {name}</p>
          <p>Stars: {stars}</p>
          <p>Last Commit: {lastCommit}</p>
          <p>Avatar:</p>
          {userAvatar ? (
            <img src={userAvatar} alt="user-avatar" />
          ) : (
            <a href={`https://github.com/${userLogin}`}>{userLogin}</a>
          )}

          <p>
            Languages:{' '}
            {languages.map((language) => {
              return <span key={language}>{language} </span>;
            })}
          </p>
          <p>Description: {description}</p>
          <p>
            Contributors:{' '}
            {contributors.map((person) => {
              return <span key={person}>{person} </span>;
            })}
          </p>
        </div>
      ));

  return <>{RepoFullInfo}</>;
};

export default connect(
  (state) => ({
    name: state.repoReducer.name,
    stars: state.repoReducer.stars,
    lastCommit: state.repoReducer.lastCommit,
    userAvatar: state.repoReducer.userAvatar,
    userLogin: state.repoReducer.userLogin,
    languages: state.repoReducer.languages,
    description: state.repoReducer.description,
    contributors: state.repoReducer.contributors,
  }),
  { setRepoInfo }
)(RepositoryInfo);
