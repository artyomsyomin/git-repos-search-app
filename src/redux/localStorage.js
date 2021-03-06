export const loadStorage = () => {
  try {
    const gotLocalData = localStorage.getItem('state');
    if (gotLocalData === null) {
      return undefined;
    }
    return JSON.parse(gotLocalData);
  } catch (err) {
    return undefined;
  }
};

export const saveStorage = (state) => {
  try {
    const givenLocalData = JSON.stringify(state);
    localStorage.setItem('state', givenLocalData);
  } catch (err) {}
};

export const clearStorage = () => {
  try {
    localStorage.removeItem('state');
  } catch (err) {}
};

export const saveFavorToStorage = (state) => {
  try {
    const givenLocalData = JSON.stringify(state);
    localStorage.setItem('favorites', givenLocalData);
  } catch (err) {}
};

export const laodFavorFromStorage = () => {
  try {
    const gotLocalData = localStorage.getItem('favorites');
    if (gotLocalData === null) {
      return undefined;
    }
    return JSON.parse(gotLocalData);
  } catch (err) {
    return undefined;
  }
};
