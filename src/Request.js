
// const API_KEY = 'de9606eef643c57e7da0189a1cdbebdb';


// const Request = {
// 	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
// 	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
// 	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
// 	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
// 	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
// 	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
// 	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
// 	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
// }


// export default Request;




// const API_KEY = 'de9606eef643c57e7da0189a1cdbebdb';
const API_KEY = '35c02ab5f759077608357958de726642';

const Request = {

fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=123`,
fetchTopRated: `https://api.themoviedb.org/3/movie/tapi_keyop_rated?=${API_KEY}&language=en-US`,
fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
fetchAdventure:  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`,
fetchAnimation:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
fetchCrime :`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`,
fetchDrama: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`,
fetchFamily:  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`,
fetchFantasy:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=14`,
fetchHistory:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36`,
fetchHorror:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchMystery:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`,
fetchScienceFiction: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
}


export default Request;

 export const RequestTvShows = {

	fetchHorrorMovies :`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`,
    fetchActionAndAdventure :`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10759`,
    // fetchAnimation :`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchComedy:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    // fetchDrama :`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`,
    // fetchMystery :`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    // fetchFamilyhttps://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchKids : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10762`,
    fetchSciFiFantasy :`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10765`,
	fetchWarAndPolitics:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10768`,

    fetchTVShows :`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`,
    
}











// 	const requests = [
//     {name:"Trending TV Shows",url:`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`},
//     {name:"Trending movies",url:`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`},
//     {name:"Action movies",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`},
// ]

// const requestsMovies = [
//     {name:"Trending",url:`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`},
//     {name:"Action",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`},
//     {name:"Adventure",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`},
//     {name:"Comedy",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`},
//     {name:"Animation",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`},
//     {name:"Crime",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`},
//     {name:"Drama",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`},
//     {name:"Family",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`},
//     {name:"Fantasy",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=14`},
//     {name:"History",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36`},
//     {name:"Horror",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`},
//     {name:"Mystery",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`},
//     {name:"ScienceFiction",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`},
//     {name:"Documentary",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`},
// ]

// const requestsTVShows = [
//     {name:"Trending",url:`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`},
//     {name:"Action & Adventure",url:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10759`},
//     {name:"Animation",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`},
//     {name:"Comedy",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`},
//     {name:"Drama",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`},
//     {name:"Mystery",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`},
//     {name:"Family",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`},
//     {name:"Kids",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10762`},
//     {name:"Sci-Fi & Fantasy",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10765`},
//     {name:"Documentary",url:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`},
// ]
