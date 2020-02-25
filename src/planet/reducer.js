import {FETCH_PLANET_SUCCESS, FETCH_PLANET_PENDING, FETCH_PLANET_ERROR} from '../constant'

const initialState = {
    pending: false,
    results: [],
    error: null
}

export function planetReducer(state = initialState, action) {    
    switch(action.type) {
        case FETCH_PLANET_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_PLANET_SUCCESS:
            return {
                ...state,
                pending: false,
                results: action.results
            }
        case FETCH_PLANET_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}