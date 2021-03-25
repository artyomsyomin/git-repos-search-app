import React, { useEffect, useState } from 'react';

const RepositoryInfo = (props) => {
  const [name, setName] = useState(''); // name
  const [stars, setStars] = useState(''); // stargazers_count
  const [lastCommit, setLastCommit] = useState(''); // updated_at
  const [userAvatar, setUserAvatar] = useState(''); // avatar_url or login (with link to profile)
  const [userLogin, setUserLogin] = useState('');
  const [languages, setLanguages] = useState([]); // languages_url - to get all languages needs to move in repo - https://api.github.com/repos/tvdstaaij/telegram-history-dump/languages
  const [description, setDescription] = useState(''); // description
  const [contributors, setContributors] = useState([]); // contributors_url - https://api.github.com/repos/tvdstaaij/telegram-history-dump/contributors

  const [loading, setLoading] = useState(true);

  console.log(props.match.url);
  useEffect(() => {
    setLoading(true);
    const fetchRepoData = async () => {
      // setLoading(true);
      const resAll = await fetch(
        'https://api.github.com/repos' + props.match.url
      );
      const resLanguages = await fetch(
        'https://api.github.com/repos' + props.match.url + '/languages'
      );
      const resContributors = await fetch(
        'https://api.github.com/repos' + props.match.url + '/contributors'
      );

      const dataAll = await resAll.json();
      const dataLanguages = await resLanguages.json();
      const dataContributors = await resContributors.json();

      setData(dataAll, dataLanguages, dataContributors);
      console.log(111111111111111);
      //   console.log(dataAll);
      //   console.log(dataLanguages);
      //   console.log(dataContributors);
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
    setName(name);
    setStars(stargazers_count);
    setLastCommit(updated_at);

    setUserAvatar(avatar_url);
    setUserLogin(login);

    setLanguages(Object.keys(dataLanguages));
    setDescription(description);
    const contributorsList = [];
    dataContributors.slice(0, 10).map((user) => {
      contributorsList.push(user.login);
      setContributors(contributorsList);
    });
    console.log(languages);
    console.log(contributorsList);
  };

  //   console.log(props);
  console.log(contributors);

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
          {/* <p>Contributors: {contributors}</p> */}
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

export default RepositoryInfo;
