import React from "react";
import { Route, Redirect } from "react-router-dom";
import jwt from "jsonwebtoken";





const authenticateToken = () => {

    const token = localStorage.getItem("token");    
    let x = false;

    console.log("protected Route Token is :", token);

    if(token) {
    jwt.verify(token ,"adafgjs7ng7dk7s6ng5kf5s1nbk8sf7n8dk9sn9s2fgad", (err, newUser) => {
        if (err) {
             console.log("err is :", err);
             console.log("first false");
             x = false;
        } else if (newUser){
            x = true;
        }
    })
    } else {
    console.log("second false")
    x = false;
}
   return x;
};


const ProtectedRoute  = ({ component: Component, ...rest}) => {

    console.log("authentcaiteToken :", authenticateToken());

    return(
        <Route
            {...rest}
            render={(props) => {
                if(authenticateToken()) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect to={{ pathname: "/Login", state: { from: props.location} }} />
                    );
                }
            }}
        />    
    );
};

export default ProtectedRoute;