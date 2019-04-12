import { SHUFFLE_MOVIES, REMOVE_SHUFFLED_MOVIE, ADD_MOVIE } from '../actions';

export default function(state = null, action){
    switch(action.type){

        case SHUFFLE_MOVIES:
            let arr = action.payload;
            return arr;

        case REMOVE_SHUFFLED_MOVIE:
            let newState_shuffled = [...state];
            newState_shuffled.splice(newState_shuffled.indexOf(action.payload), 1);
            return newState_shuffled;

        case ADD_MOVIE:
            let newState_add = [...state, action.payload];
            return newState_add;
            
        default:
            return state;
    }
}

