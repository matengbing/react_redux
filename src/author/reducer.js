//合并所有reducer并返回
import { combineReducers } from 'redux';

import {count} from '../index.redux';
import {auth} from './Author.redux';
import {user} from '../redux/User.redux';

export default combineReducers(
    { count,auth,user}
)



