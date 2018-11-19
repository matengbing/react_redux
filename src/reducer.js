//合并所有reducer并返回
import { combineReducers } from 'redux';
import {user} from './redux/User.redux';

export default combineReducers(
    {user}
)



