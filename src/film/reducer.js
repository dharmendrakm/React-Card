import {FETCH_FILM_SUCCESS, FETCH_FILM_PENDING, FETCH_FILM_ERROR} from '../constant'

const initialState = {
    pending: false,
    results: [],
    error: null
}

export function filmReducer(state = initialState, action) {    
    switch(action.type) {
        case FETCH_FILM_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_FILM_SUCCESS:
            return {
                ...state,
                pending: false,
                results: action.results
            }
        case FETCH_FILM_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}