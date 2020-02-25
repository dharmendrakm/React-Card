import React, {useEffect, useReducer} from "react";
import { connect } from "react-redux";
import CustomCard  from '../shared/CustomCard'
import {fetchFilms} from './action';
import { bindActionCreators } from "redux";


const Film = ({results, fetchFilms}) =>{    
    useEffect(() => {  
        fetchFilms();      
      }, [fetchFilms]);
      
    return (<>{results.map((param) => <CustomCard parms={param} title="Film"/>)}</>)

}

const mapStateToProps = state => ({
  results: state.filmReducer.results
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchFilms: fetchFilms
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Film);