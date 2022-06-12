import React, {createContext, FC, useContext, useEffect, useState} from 'react';
import {ApiService, IMovie} from './ApiService';

interface AppState {
  movies: IMovie[];
  likedMovies: IMovie[];
  error: string;
  imageBaseUrl: string;
  handleLikeMovies: (item: IMovie) => void;
  isLiked: (movie: IMovie) => boolean;
}

const AppContext = createContext({} as AppState);

const AppContextProvider: FC = ({children}) => {
  const [imageBaseUrl, setImageBaseUrl] = useState('');
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [likedMovies, setLikedMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    ApiService.getConfiguration().then(val =>
      setImageBaseUrl(val + 'original'),
    );
  }, []);

  useEffect(() => {
    (() => {
      ApiService.getMovies()
        .then(val => setMovies(val))
        .catch(err => setError(err));
    })();
  }, [imageBaseUrl]);

  const handleLikeMovies = (movie: IMovie) => {
    if (isLiked(movie)) {
      const newArr = likedMovies.filter(item => item.id !== movie.id);
      setLikedMovies([...newArr]);
    } else {
      setLikedMovies([...likedMovies, movie]);
    }
  };

  const isLiked = (movie: IMovie) => {
    return !!likedMovies.find(item => item.id === movie.id);
  };

  return (
    <AppContext.Provider
      value={{
        movies,
        likedMovies,
        error,
        imageBaseUrl,
        handleLikeMovies,
        isLiked,
      }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): AppState => {
  const appState = useContext(AppContext);

  return appState;
};

export {useAppContext, AppContextProvider};
