export function fetchPopular() {
  const key = '&api_key=f24a0fd18f52218851075901c5a108a0';
  const popular = 'https://api.themoviedb.org/3/movie/popular?&page=1';
 
  return fetch(`${popular}${key}`)
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