const ApiKey = "527f1cbb64f5e4089409361381283f25";

const url = {
  trending: `https://api.themoviedb.org/3/trending/all/week?api_key=${ApiKey}&language=en-US`,
  netflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${ApiKey}&language=en-US&with_networks=213`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US`,
  ActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=28`,
  comedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=35`,
  horrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=27`,
  romanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=10749`,
  documentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=99`,
};
export default url;
