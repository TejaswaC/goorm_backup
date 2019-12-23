import axios from 'axios';


const KEY = 'AIzaSyA4W3iUAGfcL5YP2yZIgSmLNqXuKFljQyc';

export default axios.create({
	baseURL : 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 8,
		key: KEY,
		type: 'video'
	}
	
	
	
});