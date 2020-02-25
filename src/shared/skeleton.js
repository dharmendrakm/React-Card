import React from "react";

const Skeleton = (props) => {
    let returnCard = [];
    for (let i = 0; i < props.totalCard; i++) {
        returnCard.push(<SkeletonCard title={props.title} />)
    }
    return returnCard;
}

const SkeletonCard = (props) => {
     return(
        <div class="card">
        <div class="card-body">
           <div class="card-title h5">{props.title}</div>
            <div class="lines shine"></div>
            <div class="lines shine"></div>
            <div class="lines shine"></div>
            <div class="lines shine"></div>
            <div class="lines shine"></div>
            <div class="lines shine"></div>
            </div>            
       </div>)
} 

export default Skeleton;