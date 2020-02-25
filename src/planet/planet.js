import React, {useEffect} from "react";
import { connect } from "react-redux";
import CustomCard  from '../shared/custom-card'
import Skeleton  from '../shared/skeleton'
import {fetchPlanets} from './action';
import { bindActionCreators } from "redux";


const Planet = ({results, fetchPlanets, pending}) =>{    
    useEffect(() => {  
       fetchPlanets();      
      }, [fetchPlanets]);
      
    if(pending){
      return <Skeleton title="Planet" totalCard={10}/>
    }
    
    return (<>{results.map((param) => <CustomCard parms={param} title="Planet"/>)}</>)

}

const mapStateToProps = state => ({
  results: state.planetReducer.results,
  pending: state.planetReducer.pending
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchPlanets: fetchPlanets
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Planet);
