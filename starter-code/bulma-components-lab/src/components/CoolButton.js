import React from 'react';


function CoolButton(props)  {

 
  return (
    <button className={`
    button 
    ${props.isSmall && 'is-small'}
    ${props.isRounded && 'is-rounded'}
    ${props.isDanger && 'is-danger'}
    ${props.isSuccess && 'is-success'}
    

    `} >
    
    
    {props.name}</button>
   
        

  );
  
}

export default CoolButton;