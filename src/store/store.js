import { createStore } from 'redux';
import MenuVerticalReducer from './reducers/menu-vertical';

const store = createStore(MenuVerticalReducer);
export default store;