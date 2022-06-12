import React, {FC} from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
//@ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IMovie} from '../ApiService';
import {useAppContext} from '../AppContext';

type MoviePosterProps = {
  movie: IMovie;
};

export const MoviePoster: FC<MoviePosterProps> = ({movie}) => {
  const {imageBaseUrl, handleLikeMovies, isLiked} = useAppContext();

  return (
    <ImageBackground
      source={{uri: imageBaseUrl + movie.poster_path}}
      resizeMode="cover"
      style={styles.container}>
      <TouchableOpacity
        onPress={() => handleLikeMovies(movie)}
        style={styles.likeButton}>
        {isLiked(movie) ? (
          <Icon name="cards-heart" color="tomato" size={20} />
        ) : (
          <Icon name="cards-heart-outline" color="#fff" size={20} />
        )}
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: Dimensions.get('screen').width / 2 - 20,
    margin: 5,
  },
  likeButton: {
    padding: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignSelf: 'flex-start',
    borderRadius: 50,
    margin: 5,
  },
});
