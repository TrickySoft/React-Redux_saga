import { combineReducers } from '@reduxjs/toolkit';
import Reducer from './Reducer';

const RootReducer = combineReducers({ data: Reducer });

export default RootReducer;
