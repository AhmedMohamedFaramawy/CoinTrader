// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import jwt from "jsonwebtoken";

// const Profile = () => {
//   const [username, setUsername] = useState("");
//   const [balance, setBalance] = useState("");

//   useEffect(async () => {
//     const tokens = jwt.verify(
//       localStorage.getItem("token"),
//       "adafgjs7ng7dk7s6ng5kf5s1nbk8sf7n8dk9sn9s2fgad"
//     );
//     const user = tokens.username;
//     console.log("User is:", user);

//     const userInfo = await axios.post(
//       "http://localhost:5000/getUserInfo",
//       { user },
//       {
//         headers: { authorization: "Bearer " + localStorage.getItem("token") },
//       }
//     );

//     console.log("userInfo is:", userInfo);
//     setUsername(userInfo.username);
//     setBalance(userInfo.balance);
//     console.log("username is:", username);
//     console.log("Balance is:", balance);
//   });
//   return (
//     <div>
//       <h1>Username: {username}</h1>
//       <h1>Balance: {balance}</h1>
//     </div>
//   );
// };

// export default Profile;
