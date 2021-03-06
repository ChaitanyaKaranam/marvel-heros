import { SHUFFLE_MOVIES, REMOVE_SHUFFLED_MOVIE, ADD_MOVIE } from '../actions';
import heros from '../heros';

export default function(state = null, action){
    switch(action.type){

        case SHUFFLE_MOVIES:
            let arr = Object.keys(heros);
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr.map(val => {
                return heros[val]
            });

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

