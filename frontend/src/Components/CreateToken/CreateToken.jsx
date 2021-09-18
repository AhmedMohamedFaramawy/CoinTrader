import React from "react";
import InputField from "../InputField/InputField";
import axios from "axios";
import jwt from "jsonwebtoken";

require('dotenv').config();

 const CreateToken = ()  => {

  const [input, setInput] = React.useState({
    cardName: '',
    actualName: '',
    category: ''
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
    const newCard = {
        cardName: input.cardName,
        actualName: input.actualName,
        category: input.category,
    }

    console.log("the token value is:" ,localStorage.getItem('token'));
    const tokens = jwt.verify(localStorage.getItem('token'), "adafgjs7ng7dk7s6ng5kf5s1nbk8sf7n8dk9sn9s2fgad");
    console.log("The LocalStorage token is :", tokens);
    const users = tokens.username;
    console.log(users);

    axios.post("http://localhost:5000/CreateToken",
    {
     username: users, 
     cardName: newCard.cardName,
     actualName: newCard.actualName,
     category: newCard.category,
     JWTtoken: "Bearer "+localStorage.getItem("token"),
      },{ headers:{authorization:"Bearer "+localStorage.getItem("token")}}
  );
};

  return (
    <div>
      <form class="inputField" action="/CreateToken" method="POST">
        <div>
          <InputField
            name="cardName"
            DataType="text"
            Data="CardName"
            placeholder="Card Name"
            onChange={handleChange}
            value={input.cardName}
          />
        </div>
        <br></br>
        <div>
          <InputField
            name="actualName"
            DataType="text"
            Data="ActualName"
            placeholder="Actual Name"
            onChange={handleChange}
            value={input.actualName}
          />
        </div>
        <br></br>
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
        

        <button onClick={handleClick} type="submit" class="buttons btn btn-dark"> CreateCard </button>
      </form>
    </div>
  );
  
};


export default CreateToken;