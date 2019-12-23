import axios from 'axios';

export default axios.create(
{
	baseURL : 'https://api.unsplash.com',
	headers : {
					Authorization : 'Client-ID 232e2483894bef5e46d55c88508a956a48f9f4b82eaff27411bee9f8b1491939'}
}
);