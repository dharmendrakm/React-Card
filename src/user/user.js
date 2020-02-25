import React, {useEffect} from "react";
import { connect } from "react-redux";
import CustomCard  from '../shared/custom-card'
import Skeleton  from '../shared/skeleton'
import {fetchPeoples} from './action';
import { bindActionCreators } from "redux";


const User = ({results, fetchPeoples, pending}) =>{    
    useEffect(() => {  
        fetchPeoples();      
      }, [fetchPeoples]);
    
    
    if(pending){
      return <Skeleton title="People" totalCard={10} />
    }

    return (<>{results.map((param) => <CustomCard parms={param} title="People" />)}</>)

}

const mapStateToProps = state => ({
  results: state.peopleReducer.results,
  pending: state.peopleReducer.pending
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchPeoples: fetchPeoples
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(User);
