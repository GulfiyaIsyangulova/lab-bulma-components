import React from 'react';


function FormField(props)  {

 
//   return (
//     <div className="field">
//         <label className="label">
//         {props.theLabel}
//         </label>
//         <div className="control">
//             <input className="input" type={props.type} placeholder={props.placeholder}></input>
//         </div>
//     </div>
   
        

//   );
  
// }

return(
    <div classname="form-field">
        <div>
            <label>{props.theLabel}</label>
        </div>
        <input type="{}" placeholder="e.g. Alex Smith"></input>



    </div>
)



}

export default FormField;