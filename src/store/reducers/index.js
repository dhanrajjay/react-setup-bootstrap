import { combineReducers } from 'redux';

// Reducers
import rootReducer from './root-reducer';

const reducers = combineReducers({
	rootState : rootReducer
});

export default reducers;