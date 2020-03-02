import axios from 'axios';

export let APIService = {

	getUserList: () => {
		return axios.get('https://api.github.com/users/mapbox');
	},

	postUserList: (data) => {
		return axios.post('http://www.gooogle.com', data);
	}
}