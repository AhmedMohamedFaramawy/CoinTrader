import React from "react";
import "../Register/Register.css";

const InputField = (props) => {
   return(
        <div class="form-group"   data-testid="inputfield" title="inputfield">
            <input  class="field" title="label"
            type={props.DataType} 
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}></input>
            
        </div> 
   );
};

export default InputField;
