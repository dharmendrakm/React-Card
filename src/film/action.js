import { 
  FETCH_FILM_SUCCESS, 
  FETCH_FILM_PENDING, 
  FETCH_FILM_ERROR, getFilmApi } from '../constant'


export const fetchFilms = () => { 
   return  dispatch => {
     dispatch(fetchFilmPending());   
     getFilmApi().then(res => {        
          if(res.error) {
              throw(res.error);
          }                  
          dispatch(fetchFilmSuccess(res.data.results));
          return res.data.results;
      })
      .catch(error => {
        dispatch(fetchFilmFailure(error));
      })
    }
  
}

export const fetchFilmSuccess = (data) => ({  
  type: FETCH_FILM_SUCCESS, 
  results: data 
});

export const fetchFilmPending = () => ({
  type: FETCH_FILM_PENDING,  
});

export const fetchFilmFailure = (error) => ({
  type: FETCH_FILM_ERROR,
  error: error
});

  