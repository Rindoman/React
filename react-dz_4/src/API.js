export function fetchData(query) {
  const key = '&api_key=f24a0fd18f52218851075901c5a108a0';
  const startUrl = 'https://api.themoviedb.org/3/search/movie?&page=1&include_adult=false';
 
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
        poster: `https://image.tmdb.org/t/p/w500${films.poster_path}`,
        title: films.title,
        overview: `${films.overview.slice(0, 250)}...`,
        release: films.release_date,
        rating: films.vote_average
      }));

      return movies;
    })
    .catch(err => console.error(err));
}