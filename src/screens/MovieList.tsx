import React from 'react';
import {useAppContext} from '../AppContext';
import {MovieListComponent} from '../components/MovieListComponent';

const MovieList = () => {
  const {movies} = useAppContext();

  return <MovieListComponent movies={movies} />;
};

export default MovieList;
