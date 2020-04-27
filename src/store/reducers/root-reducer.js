import * as types from '../actions/action_types';

const initialState = {
	lang: ''
}

function rootReducer(state = initialState, action) {
	switch(action.type) {
		case types.UPDATE_LANGUAGE:
			return {...state, lang: action.payload};		
		default:
			return state;	
	}	
}

export default rootReducer;