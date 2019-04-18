import { LIFES, RESET_SELECTION } from '../actions';
import movies from '../heros';

export default function(state = 6, action){
    switch(action.type){

        case LIFES:
            if(Object.values(movies).indexOf(action.payload.movie) !== action.payload.index){
                return state - 1;
            }else{
                return state;
            }
        
        case RESET_SELECTION:
            return 6;

        default:
            return state;
    }
}

