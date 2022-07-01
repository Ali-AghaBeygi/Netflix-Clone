const key = "4a0842789d20600d39ec8a98b7b2a06f";

const requests = {
	requestsPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US%page=1`,
	requestsTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US%page=1`,
	requestsTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
	requestsUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US%page=1`,
};

export default requests;
