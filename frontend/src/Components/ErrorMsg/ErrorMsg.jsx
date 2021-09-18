import React from "react";
import "./ErrorMsg.css";

export  const showErrorMsg  =  (msg) => {
    return <div  className="errMsg">{msg}</div>
}

export  const showSuccessMsg  =  (msg) => {
    return <div  className="successMsg">{msg}</div>
}