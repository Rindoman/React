export function fetchData(query) {
  const key = '&api_key=f24a0fd18f52218851075901c5a108a0';
  const startUrl = 'https://api.themoviedb.org/3/search/movie?&page=1&include_adult=false';
  // const popular = 'https://api.themoviedb.org/3/movie/popular?&page=1';
  // const upcoming = 'https://api.themoviedb.org/3/movie/upcoming?&language=en-US&page=1';
  // const top = 'https://api.themoviedb.org/3/movie/top_rated?&page=1';
  return fetch(`${startUrl}${key}&query=${query}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Error while fetching ' + response.statusText);
    })
    .then (data => {
      const movies = data.results.map(films => ({
        id: films.id,
        poster: films.poster_path,
        title: films.title,
        overview: films.overview,
        release: films.release_date,
        rating: films.vote_average
      }));

      return movies;
    })
    .catch(err => console.error(err));
}