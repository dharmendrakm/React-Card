import {FETCH_PEOPLE_PENDING, FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_ERROR} from '../constant'

const initialState = {
    pending: false,
    results: [],
    error: null
}
export function peopleReducer(state = initialState, action) {    
    switch(action.type) {
        case FETCH_PEOPLE_PENDING: 
        return {
            ...state,
            pending: true
        }
        case FETCH_PEOPLE_SUCCESS:
            return {
                ...state,
                pending: false,
                results: action.results
            }
        case FETCH_PEOPLE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
        }
        default: 
            return state;
    }
}