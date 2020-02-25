import {
  FETCH_PEOPLE_SUCCESS, 
  FETCH_PEOPLE_PENDING, 
  FETCH_PEOPLE_ERROR, getPeopleApi} from '../constant'


export const fetchPeoples = () => { 
   return  dispatch => {
     dispatch( fetchPeoplePending());   
     getPeopleApi().then(res => {        
          if(res.error) {
              throw(res.error);
          }                  
          dispatch(fetchPeopleSuccess(res.data.results));
          return res.data.results;
      })
      .catch(error => {
        dispatch(fetchPeopleFailure(error));
      })
    }
  
}


export const fetchPeopleSuccess = (data) => ({  
  type: FETCH_PEOPLE_SUCCESS, 
  results: data 
});

export const fetchPeoplePending = () => ({
  type: FETCH_PEOPLE_PENDING,  
});

export const fetchPeopleFailure = (error) => ({
  type: FETCH_PEOPLE_ERROR,
  error: error
});

  