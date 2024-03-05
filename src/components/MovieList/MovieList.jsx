import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './MovieList.css';

function MovieList() {

  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const handleClick = (movie) => {
    history.push({ pathname: '/details', state: movie});
  }

  return (
    <main>
      <h2>Check Out Our Current Titles!</h2>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' className='movieElement' key={movie.id}>
              <h3>{movie.title}</h3>
              <img data-testid='toDetails' src={movie.poster} alt={movie.title} onClick={(event) => handleClick(movie)}/>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
