import { combineReducers } from 'redux';

import productos from './productos.js';
import user from './user';

const rootReducer = combineReducers({productos, user});

export default rootReducer;
