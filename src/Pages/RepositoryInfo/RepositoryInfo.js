import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { setRepoInfo } from '../../redux/actions/repoAction';

import './repositoryInfo.css';

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
      owner: { avatar_url, login },
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
        <div className="repo-container">
          <h1>REPOSITORY INFO</h1>
          <div className="repo-info">
            {userAvatar ? (
              <img className="info-image" src={userAvatar} alt="user-avatar" />
            ) : (
              <a href={`https://github.com/${userLogin}`}>{userLogin}</a>
            )}
            <h3 className="info-name">{name}</h3>
            <p className="info-stars">
              <i className="fas fa-star" /> {stars}
            </p>
            <p className="info-commit">
              <span className="info-sign">Last update:</span> {lastCommit}
            </p>

            <p className="language-container">
              <span className="info-sign">Languages:</span>
              {languages.map((language) => {
                return (
                  <span className="info-language" key={language}>
                    {' '}
                    {language} /{' '}
                  </span>
                );
              })}
            </p>
            <p className="info-description">
              <span className="info-sign">Description:</span> {description}
            </p>
            <p className="contributors-container">
              <span className="info-sign">Contributors:</span>
              {contributors.map((person) => {
                return (
                  <span className="info-contributors" key={person}>
                     {' '}{person} /{' '}
                  </span>
                );
              })}
            </p>
          </div>
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
