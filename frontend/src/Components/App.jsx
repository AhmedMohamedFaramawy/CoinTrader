import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import MainPage from "./MainPage/MainPage";
import Contacts from "./Contacts/Contacts";
import Downloads from "./Downloads/Downloads";
import Navbar from "./Navbar/Navbar";
import Help from "./Help/Help";
import Main from "./Main/Main";
import CreateToken from "./CreateToken/CreateToken";
import UserTokens from "./UserTokens/UserTokens";
import ResetPassword from "./ResetPassword/ResetPassword";
import ProtectedRoute from "./protectedRoute/protectedRoute";
import BoughtTokens from "./BoughtTokens/BoughtTokens";
import BuyTokens from "./BuyTokens/BuyTokens";
//import authenticateToken from "./backend/routes/authenticateToken";
//import jwt from "jsonwebtoken";

const App = () => {
  //const [isAuth, setIsAuth] = authenticateToken();

  return (
    <Router>
      <div>
        <Navbar />

        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/Downloads" component={Downloads} />
            <Route path="/BoughtTokens" component={BoughtTokens} />
            <Route path={"/BuyTokens"} component={BuyTokens} />
            <ProtectedRoute path="/MainPage" component={MainPage} />
            <ProtectedRoute path="/Contacts" component={Contacts} />
            <ProtectedRoute path="/Main" component={Main} />
            <ProtectedRoute path="/CreateToken" component={CreateToken} />
            <ProtectedRoute path="/UserTokens" component={UserTokens} />
            <ProtectedRoute path="/Help" component={Help} />
            <ProtectedRoute path="/ResetPassword" component={ResetPassword} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

//<Route path="/auth/google/Main" component={Main} />

//<ProtectedRoute path="/Help" component={Help} auth={isAuth} />

//<Route path="*" component={() => "404 NOT FOUND"} />
//<Route path="/Help" component={Help} />

//<Route path="/Main" component={() => <Main authorized={false} />} />
//<Route path="/auth/google/Main" component={Main}/>
