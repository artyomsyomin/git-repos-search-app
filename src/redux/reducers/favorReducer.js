import { saveFavorToStorage } from '../localStorage';

const INITIAL_STATE = {
  favorites: [],
};

const favorReducer = (state = INITIAL_STATE.favorites, action) => {
  switch (action.type) {
    case 'ADD_FAVORITES':
      if (state && state.length) {
        if (state.find((item) => item.id === action.id)) {
          saveFavorToStorage([...state]);
          return [...state];
        } else {
          saveFavorToStorage([...state, action.foundRepo]);
          return [...state, action.foundRepo];
        }
      }
      saveFavorToStorage([...state, action.foundRepo]);
      return [...state, action.foundRepo];
    case 'LOAD_FAVORITES_TO_STORAGE':
      if (action.loadedFavor) {
        return [
            ...state,
            ...action.loadedFavor
        ];
      } else return [...state];
    case 'REMOVE_FAVORITES':
      const updatedFavor = [...state].filter((item) => item.id !== action.id);
      saveFavorToStorage(updatedFavor);
      return updatedFavor;
    default:
      return state;
  }
};

export default favorReducer;
