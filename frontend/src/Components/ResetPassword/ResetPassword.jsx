import React from "react";
import axios from "axios";
import InputField from "../InputField/InputField";
import jwt from "jsonwebtoken";

const ResetPassword = (props) => {

    const [input, setInput] = React.useState({
        password: '',
        newpassword: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    };

    const handleClick = (event) => {
        event.preventDefault();
        
         const password = input.password;
         const newpassword = input.newpassword;

         console.log("the token value is:" ,localStorage.getItem('token'));
         const tokens = jwt.verify(localStorage.getItem('token'), "adafgjs7ng7dk7s6ng5kf5s1nbk8sf7n8dk9sn9s2fgad");
         console.log("The LocalStorage token is :", tokens);
         const users = tokens.username;
         console.log("username :", users);

        
        axios.post("http://localhost:5000/ResetPassword",
            {username: users,  
            password: password,
            newpassword: newpassword },
            { headers:{authorization:"Bearer "+localStorage.getItem("token")}}).then(
            res => {
                console.log(res);
            }
        ).catch(
            err  => {
                console.log(err);
            })
    };

    return(
        <div>
        <h1>Reset Your password</h1>

        <form class="inputField" action="/ResetPassword" method="POST">
                <div>
                    <br></br>
                    <InputField
                        name="password"
                        DataType="password"
                        Data="OldPassword"
                        placeholder="Oldpassword"
                        onChange={handleChange}
                        value={input.password}

                    />
                    <br></br>
                    <InputField
                        name="newpassword"
                        DataType="password"
                        Data="NewPassword"
                        placeholder="Newpassword"
                        onChange={handleChange}
                        value={input.newpassword}

                    />
                </div>
                <button onClick={handleClick} type="submit" class="buttons btn btn-dark">Reset Your Password</button>
                
                     
            </form>
        </div>
    );
};

export default ResetPassword;