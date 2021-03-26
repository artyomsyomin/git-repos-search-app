import { combineReducers } from 'redux';

import listReducer from './listReducer';
import repoReducer from './repoReducer';
import favorReducer from './favorReducer';

export default combineReducers({ listReducer, repoReducer, favorReducer });
