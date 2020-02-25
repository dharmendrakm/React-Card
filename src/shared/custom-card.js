import React from 'react'
import Card from 'react-bootstrap/Card'


const CustomCard = (props) => {   
  const params = props.parms 
  let count=0; 
    return(<Card >
    <Card.Body>
    <Card.Title >{props.title}</Card.Title>
      {Object.keys(params).map(key => {
        if(params[key].length<=50)
        count++;
      return (!Array.isArray(params[key]) && params[key].length<=50 && count<=5)?<CardText name={key} value = {params[key]} />:''})}   
    </Card.Body>
  </Card>)
}


const CardText =(props) => {  
   return(<Card.Text> {props.name}: {props.value}</Card.Text>);
}

export default CustomCard;