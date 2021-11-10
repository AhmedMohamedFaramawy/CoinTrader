import React from "react";
import Title from "../Title/Title";
import Login from "../Login/Login"
import "./Home.css";


 const Home = (props) => {

   function goToLogin() {
      props.history.push("/Login");
   };

   return (
      <div>
         <div className="title">
            <img className="img" style={{ border: "1000px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSwUe7LDDcAR4dxzCVkgYQ0iGXVNkiRPfVQ&usqp=CAU"></img>
            <Title
               title=" Fama is the new way to invest in your favorite celebrities"></Title>
         </div>
         {/* <button class="loginbutton  btn btn-secondary btn-lg col-3" onClick={goToLogin}>Login</button> */}
         <Login/>

      </div>

   );
};



export default Home;