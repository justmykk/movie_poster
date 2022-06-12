import React from 'react';
import {useAppContext} from '../AppContext';
import {MovieListComponent} from '../components/MovieListComponent';

const LikedMovies = () => {
  const {likedMovies} = useAppContext();

  return <MovieListComponent movies={likedMovies} />;
};

export default LikedMovies;
