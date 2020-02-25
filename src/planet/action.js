import { 
  FETCH_PLANET_SUCCESS, 
  FETCH_PLANET_PENDING, 
  FETCH_PLANET_ERROR, getPlanetApi } from '../constant'


export const fetchPlanets = () => { 
   return  dispatch => {
     dispatch(fetchPlanetPending());   
     getPlanetApi().then(res => {        
          if(res.error) {
              throw(res.error);
          }                  
          dispatch(fetchPlanetSuccess(res.data.results));
          return res.data.results;
      })
      .catch(error => {
        dispatch(fetchPlanetFailure(error));
      })
    }
  
}

export const fetchPlanetSuccess = (data) => ({  
  type: FETCH_PLANET_SUCCESS, 
  results: data 
});

export const fetchPlanetPending = () => ({
  type: FETCH_PLANET_PENDING,  
});

export const fetchPlanetFailure = (error) => ({
  type: FETCH_PLANET_ERROR,
  error: error
});

  