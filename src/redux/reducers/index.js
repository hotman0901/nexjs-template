import { combineReducers } from 'redux';
import { game } from '@redux/reducers/game';

// 合併 reducer
const reducer = combineReducers({ game });

export default reducer;
