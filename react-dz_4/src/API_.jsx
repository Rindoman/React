export function fetchDataFilms(url) {
    return fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        }

        throw new Error('Error while fetching: ' + response.statusText);
    })
    .then(data => {
        const movies = data.results.map(movie =>({
            id: movie.id,
            title: movie.title,
            poster: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
            overview: `${movie.overview.slice(0, 250)}...`,
            rating: movie.vote_average,
            release: movie.release_date
        }));

        return movies;
    })
    .catch(err => console.error(err));
};