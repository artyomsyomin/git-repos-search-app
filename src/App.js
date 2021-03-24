import React, { useState } from 'react';
import './App.css';

import Card from './Components/card/Card';
import SearchPage from './Pages/searchPage/SearchPage';

const urlSearch = 'https://api.github.com/search/repositories?q=';

function App() {
  const [searchText, setSearchText] = useState('');
  // const [fetchedData, setFetchedData] = useState('');
  // const [fullUrl, setFullUrl] = useState('');
  // const [searchResult, setSearchResult] = useState('');

  const [reposInfo, SetReposInfo] = useState('');

  // const [name, setName] = useState(''); // name
  // const [stars, setStars] = useState(''); // stargazers_count
  // const [lastCommit, setLastCommit] = useState(''); // updated_at
  // const [userAvatar, setUserAvatar] = useState(''); // avatar_url or login (with link to profile)
  // const [languages, setLanguages] = useState(''); // languages_url - to get all languages needs to move in repo - https://api.github.com/repos/tvdstaaij/telegram-history-dump/languages
  // const [description, setDescription] = useState(''); // description
  // const [contributors, setContributors] = useState(''); // contributors_url - https://api.github.com/repos/tvdstaaij/telegram-history-dump/contributors

  const inputHandler = (e) => {
    const searchInput = e.target.value;
    setSearchText(searchInput);
    // setFullUrl(urlSearch + searchInput);

    fetch(urlSearch + searchInput + '&sort=stars')
      .then((res) => res.json())
      .then((data) => {
        // fetch(item.languages_url)
        //   .then((res) => res.json())
        //   .then((languagesData) => {
        //     // console.log(Object.keys(languagesData));
        //     setLanguages(Object.keys(languagesData));
        //   });
        SetReposInfo(data);
        // console.log(data);
        // setFetchedData(data.items)
        // setSearchResult(data)
        //   data.items.map((item) => {
        //     // console.log(item.name);
        //     setName(item.name);
        //     setStars(item.stargazers_count);
        //     setLastCommit(item.updated_at);
        //     setUserAvatar(item.avatar_url);
        //     // fetch(item.languages_url)
        //     //   .then((res) => res.json())
        //     //   .then((languagesData) => {
        //     //     // console.log(Object.keys(languagesData));
        //     //     setLanguages(Object.keys(languagesData));
        //     //   });
        //     // console.log(item.languages_url);
        //     setDescription(item.description);
        //     // setContributors(item.contributors_url);
        //     // fetch(item.contributors_url)
        //     //   .then((res) => res.json())
        //     //   .then((contributorsData) => {
        //     //     // console.log(contributorsData);
        //     //     // a.slice(0, n)
        //     //     // const contributorsList = [];
        //     //     // contributorsData.slice(0, 10).map((user) => {
        //     //     //   // console.log(user.login);
        //     //     // contributorsList.push(user.login);
        //     //     //   // console.log(user);
        //     //     // });
        //     //     // console.log(contributorsList);
        //     //     // setContributors(contributorsList);
        //     //     // setLanguages(Object.keys(languagesData));
        //     //   });
        //   });
      });
  };

  return (
    <div className="App">
      <SearchPage inputHandler={inputHandler} searchText={searchText} />
      <Card
        reposInfo={reposInfo}
      />
    </div>
  );
}

export default App;
