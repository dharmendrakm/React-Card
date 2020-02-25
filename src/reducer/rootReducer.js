import {combineReducers} from 'redux'
import {filmReducer} from './../film/reducer'
import {peopleReducer} from './../user/reducer'
import {planetReducer} from './../planet/reducer'

export default combineReducers({
    filmReducer,
    peopleReducer,
    planetReducer
});
