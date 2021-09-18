import React from "react";
import InputField from "../InputField/InputField";
import axios from "axios";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import { ToastContainer,toast,Zoom, Bounce } from "react-toastify";
import "../cs.css";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Login = () => {
    const[user,setUser] = useState(null);
    const [input, setInput] = useState({
        username: '',
        password: '',
    });

    const history = useHistory();
    
    const handleChange = (event) => {
        const { name, value } = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value,
            }
        })
    };

    const handleClick =  async (event) => { 
        event.preventDefault();
        try {
            const newUser = {
                username: input.username,
                password: input.password
            }
            
        //if(newUser.password.length>=6){   
            const res = await axios.get(`http://localhost:5000/Login?username=${newUser.username}&password=${newUser.password}`,{credentials: "include"});
            console.log("res:", res);


            if (res.data) {
                localStorage.setItem("token", res.data.accessToken); // saved the access token in LocalStorage
                setUser(res.data); //check this
                toast.info("Your Logged In");
                history.push("/Main");
                
            } else if (!res.data){
                console.log("not found");
                errorToast();
            } 
       // } else {
         //   errorToast();
        //}
        } catch (err) {
            console.log(err);
            //if (err.response.status === 400) { 
                if(err){
                errorToast();
            }
        }
    };
    
    const errorToast =  () => {
        toast('🦄 Wrong Username or Password', {
            position: "bottom-left",
            autoClose: 5000,
            //autoClose: true ,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            limit: 2,
            });
    };
    
    const loginWithGoogle = async ()  => {
        //window.open("http://localhost:5000/auth/google", "_self")
            
        const  googleLoginLink = "http://localhost:5000/auth/google";
        const newWindow =  window.open(googleLoginLink , "blank" , "width=500,height=600")

        /*
        axios.get("http://localhost:5000/auth/google")
            .then((res) => {
                if(res.ok) {
                    localStorage.setItem("GoogleToken", res);
                } else {
                    console.log("No Token");
                }
            }).catch((err) => {
                console.log(err);
            })
            */
    };

    return (
        <div>
            
            <h1>Login</h1>
        
            <form class="inputField" action="/Login" method="POST">
                <div>
                    <InputField
                        name="username"
                        DataType="email"
                        Data="Username"
                        placeholder="   Username"
                        onChange={handleChange}
                        value={input.username} />
                    <br></br>
                    <InputField
                        name="password"
                        DataType="password"
                        Data="Password"
                        placeholder="password"
                        onChange={handleChange}
                        value={input.password}/>
                </div>
                <a class="forgot" href="/ResetPassword">Reset Your Password</a>
                <button onClick={handleClick} type="submit" class="buttons btn btn-dark">Login</button>
                
                     
            </form>
            <button class="loginbutton  btn btn-outline-dark btn-lg col-3" onClick={loginWithGoogle} type="submit">Continue with Google <i class="fab fa-google"></i></button>
            <button class="registerbutton btn btn-outline-dark btn-lg col-3" >Continue with Apple <i class="fab fa-apple"></i></button>
          
        </div>
    );
};

export default Login;