import React from "react";
import InputField from "../InputField/InputField";
import axios from "axios";
import "./Register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import useEffect from "react";

toast.configure();

const Register = (props) => {
  /*
    useEffect(() => {
        const token = localStorage.getItem("Token");
        if(!token){
            props.history.push("/Login");
        }
    });
    */

  const [input, setInput] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const validateEmail = (elementValue) => {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
  };

  console.log(validateEmail("ada@hotmail.com"));

  const errorToast = (msg) => {
    toast(msg, {
      position: "bottom-left",
      autoClose: 5000,
      //autoClose: true ,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      limit: 2, //doesnt work wtf
      //className: "error-toast"
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    const newUser = {
      username: input.username,
      password: input.password,
      createdCards: [],
    };

    if (validateEmail(input.username) && input.password.length > 6) {
      const result = axios
        .post("http://localhost:5000/Register", newUser)
        .then((res) => {
          console.log(res.ok);
          if (!res.ok) {
            errorToast("🦄 UserName already Used", res);
          }
        });
    } else if (!validateEmail(input.username) && input.password.length > 6) {
      console.log("Your Email Form is Wrong");
      errorToast("🦄 Your Email Form is Wrong");
    } else if (validateEmail(input.username) && input.password.length <= 6) {
      console.log("Your password is too short!!!");
      errorToast("🦄 Your password is too short!!!");
    } else if (!validateEmail(input.username) && input.password.length <= 6) {
      console.log("neither your email or password are correct!!!");
      errorToast("🦄 neither your email or password are correct!!!");
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>

      <form className="register-container inputField" action="/Register" method="POST">
        <div>
          <InputField
            name="username"
            DataType="email"
            Data="Username"
            placeholder="email"
            onChange={handleChange}
            value={input.username}
          />
        </div>
        <div>
          <InputField
            name="password"
            DataType="password"
            Data="password"
            placeholder="password"
            onChange={handleChange}
            value={input.password}
          />
        </div>

        <button
          onClick={handleClick}
          type="submit"
          class="register buttons btn btn-dark"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
