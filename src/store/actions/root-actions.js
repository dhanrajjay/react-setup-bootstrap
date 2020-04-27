import * as types from './action_types';

export function updateLanguage(payload) {
	return {
		type: types.UPDATE_LANGUAGE,
		payload: payload	
	}
}