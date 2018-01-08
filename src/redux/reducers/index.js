import { combineReducers } from 'redux';

import productos from './productos.js';
import user from './user';
import pageChange from './pageChange';

const rootReducer = combineReducers({productos, user, pageChange});

export default rootReducer;
