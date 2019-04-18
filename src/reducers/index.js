import { combineReducers } from 'redux';
import ShuffledMovies from './reducer_shuffledMovies';
import SelectedMovies from './reducer_selectedMovie';
import Lifes from './reducer_lifes';

export default combineReducers({
    ShuffledMovies,
    SelectedMovies,
    Lifes
})