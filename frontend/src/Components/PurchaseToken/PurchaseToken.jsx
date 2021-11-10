import React from "react";
import axios from "axios";
import InputField from "../InputField/InputField";

const PurchaseToken = () => {
    
    return(
    <div>
        <div>
          <InputField
            name="category"
            DataType="text"
            Data="Category"
            placeholder="Card Category"
            onChange={handleChange}
            value={input.category}
          />
        </div>
        <br></br>
        <button>Confirm Purchase</button>
    </div>    
    );
}

export default PurchaseToken;