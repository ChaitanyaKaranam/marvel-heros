export const SHUFFLE_MOVIES = 'SHUFFLE_MOVIES';
export const ORDERED_MOVIES = 'ORDERED_MOVIES';
export const SELECTED_MOVIES = 'SELECTED_MOVIES';
export const REMOVE_SHUFFLED_MOVIE = 'REMOVE_SHUFFLED_MOVIE';
export const REMOVE_SELECTED_MOVIE = 'REMOVE_SELECTED_MOVIE';
export const ADD_MOVIE = 'ADD_MOVIE';
export const LIFES = 'LIFES';
export const RESET_SELECTION = 'RESET_SELECTION';

export const shuffleMovies = () => {
    return {
        type: SHUFFLE_MOVIES
    }
}

export const selectedMovies = (payload) => {
    return {
        type: SELECTED_MOVIES,
        payload
    }
}

export const removeShuffledMovie = (payload) => {
    return{
        type: REMOVE_SHUFFLED_MOVIE,
        payload
    }
}

export const removeSelectedMovie = (payload) => {
    return{
        type: REMOVE_SELECTED_MOVIE,
        payload
    }
}

export const addMovie = (payload) => {
    return{
        type: ADD_MOVIE,
        payload
    }
}

export const checkLifes = (payload) => {
    return{
        type: LIFES,
        payload
    }
}

export const resetSelection = () => {
    return{
        type: RESET_SELECTION
    }
}