import React, {useEffect} from "react";
import { connect } from "react-redux";
import CustomCard  from '../shared/custom-card'
import Skeleton  from '../shared/skeleton'
import {fetchFilms} from './action';
import { bindActionCreators } from "redux";


const Film = ({results, fetchFilms, pending}) =>{    
    useEffect(() => {  
        fetchFilms();      
      }, [fetchFilms]);

    if(pending){
      return <Skeleton title="Film" totalCard={7}/>
    } 
    return (<>{results.map((param) => <CustomCard parms={param} title="Film"/>)}</>)

}

const mapStateToProps = state => ({
  results: state.filmReducer.results,
  pending: state.filmReducer.pending
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchFilms: fetchFilms
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Film);