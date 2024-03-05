import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './MovieList.css';

function MovieList() {

  const history = useHistory();        //Enables navigation
  const dispatch = useDispatch();      //Enables dispatching requests to our server store
  const movies = useSelector(store => store.movies); //Accesses data from server store

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' }); //Gets our movies from database
  }, []);

  const handleClick = (movie) => {
    history.push({ pathname: '/details', state: movie}); //Navigates to details for the clicked movie
  }
                       //Loop through movies, supply movie objects to Details for rendering
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
