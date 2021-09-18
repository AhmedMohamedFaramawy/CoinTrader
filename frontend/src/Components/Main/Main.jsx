import React from "react";
import {Redirect} from "react-router-dom";

const Main = (props) => {


  
    const checkYourTokens = () => {
        props.history.push ("/UserTokens");
    };

    const createTokens = () => {
        props.history.push ("/CreateToken");
    };

     const checkTokens = () => {
        props.history.push ("/MainPage");
    };


    return(
    <div>    
        <div>
            <h1>Check Your Tokens</h1>
            <button onClick={checkYourTokens}>Check Now</button>
        </div>
        <div>
            <h1>Create your Own Token</h1>
            <button onClick={createTokens}>Start Now</button>
        </div>
        <div>
            <h1>Check Top Tokens </h1>
            <button onClick={checkTokens}>Check Now</button>
        </div>

    </div>    
    );
    
};

export default Main;