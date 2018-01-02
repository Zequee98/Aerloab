import { combineReducers } from 'redux';

import productos from './productos';
import user from './user';

const rootReducer = combineReducers({productos});

export default rootReducer;
