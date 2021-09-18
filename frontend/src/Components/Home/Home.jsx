import React from "react";
import Title from "../Title/Title";
import "./Home.css";

 const Home = (props) => {

   function goToLogin() {
      props.history.push("/Login");
   };

   function goToRegister() {
      props.history.push("/Register");
   }

   return (
      <div>
         <div class="title">
            <Title
               title=" Use our Fama App and start investing in your favorite  celebrities"></Title>
            <br></br>
            <p>Download Our App</p>
         </div>
         <button class="loginbutton  btn btn-secondary btn-lg col-3" onClick={goToLogin}>Login</button>
         <button class="registerbutton btn btn-dark  btn-lg col-3" onClick={goToRegister}>Register</button>
         
         <div>
            <img class="img" style={{ border: "1000px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSwUe7LDDcAR4dxzCVkgYQ0iGXVNkiRPfVQ&usqp=CAU"></img>
         </div>
      </div>

   );
};



export default Home;