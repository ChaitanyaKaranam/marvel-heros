import { combineReducers } from 'redux';
import ShuffledMovies from './reducer_shuffledMovies';
import SelectedMovies from './reducer_selectedMovie';

export default combineReducers({
    ShuffledMovies,
    SelectedMovies
})