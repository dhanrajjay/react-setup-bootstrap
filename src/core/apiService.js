import axios from 'axios';

export let APIService = {

	getUserList: () => {
		return axios.get(__API_HOST__.host + '/users/mapbox');
	},

	postUserList: (data) => {
		return axios.post('http://www.gooogle.com', data);
	}
}