import axios from 'axios';

/** base url to make request to the themoviedatabase */

// you will see how you can set up a base instance in which you can define a URL and any other configuration elements.









const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3'
});












// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar

export default instance;