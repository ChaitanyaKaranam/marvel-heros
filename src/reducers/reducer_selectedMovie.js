import { SELECTED_MOVIES, REMOVE_SELECTED_MOVIE } from '../actions';

export default function(state = [], action){
    switch(action.type){

        case SELECTED_MOVIES:
            let newState = [...state, action.payload]
            return newState;

        case REMOVE_SELECTED_MOVIE:
            let newState_selected = [...state];
            newState_selected.splice(newState_selected.indexOf(action.payload), 1);
            return newState_selected;

        default:
            return state;
    }
}

