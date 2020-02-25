import axios from "axios";

export const GET_PEOPLE = 'GET_PEOPLE'
export const GET_FILMS = 'GET_FILMS'
export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS'
export const FETCH_PEOPLE_PENDING = 'FETCH_PEOPLE_PENDING'
export const FETCH_PEOPLE_ERROR = 'FETCH_PEOPLE_ERROR'
export const FETCH_FILM_SUCCESS = 'FETCH_FILM_SUCCESS'
export const FETCH_FILM_PENDING = 'FETCH_FILM_PENDING'
export const FETCH_FILM_ERROR = 'FETCH_FILM_ERROR'

export const FETCH_PLANET_SUCCESS = 'FETCH_PLANET_SUCCESS'
export const FETCH_PLANET_PENDING = 'FETCH_PLANET_PENDING'
export const FETCH_PLANET_ERROR = 'FETCH_PLANET_ERROR'

export const PEOPLE_API_URL = 'https://swapi.co/api/people/'
export const FILM_API_URL = 'https://swapi.co/api/films/'
export const PLANET_API_URL = 'https://swapi.co/api/planets/'



export const getPeopleApi= (id) => {
    return axios.get(PEOPLE_API_URL);
};
export const getFilmApi= (id) => {
    return axios.get(FILM_API_URL);
};
export const getPlanetApi= (id) => {
    return axios.get(PLANET_API_URL);
};
 