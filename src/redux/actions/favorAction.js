import { laodFavorFromStorage } from '../localStorage';

export const addFavorites = (id, reposInfo) => {
  const foundRepo = reposInfo.find((item) => item.id === id);

  return {
    type: 'ADD_FAVORITES',
    id,
    foundRepo,
  };
};

export const removeFavorites = (id) => {
  return {
    type: 'REMOVE_FAVORITES',
    id,
  };
};

export const loadFavorites = () => {
  const loadedFavor = laodFavorFromStorage();
  return {
    type: 'LOAD_FAVORITES_TO_STORAGE',
    loadedFavor,
  };
};
