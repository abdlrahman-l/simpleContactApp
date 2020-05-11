import { createStore, combineReducers } from 'redux';
import editReducer from '../reducers/editReducer';

const rootReducer = combineReducers(
    {profile : editReducer}
);

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;