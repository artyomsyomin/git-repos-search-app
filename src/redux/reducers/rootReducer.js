import { combineReducers } from 'redux';

import listReducer from './listReducer';
import repoReducer from './repoReducer';

export default combineReducers({ listReducer, repoReducer });
