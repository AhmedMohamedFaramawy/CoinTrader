import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  const handleLogout = () => {
    const res = axios.get("http://localhost:5000/Logout", {
      headers: { authorization: "Bearer " + localStorage.getItem("token") },
    });

    if (res) {
      // check this
      console.log("res.ok :", res.ok);
      localStorage.removeItem("token");
      history.push("/");
    } else {
      history.push("/");
    }
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/Main">
            Fama
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Downloads">
                  Download
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/ResetPassword">
                  Reset Password
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/Contacts"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/Contacts">
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/Help">
                      Help
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"></a>
                  </li>
                </ul>
              </li>
            </ul>
            <button
              onClick={handleLogout}
              class="btn btn-outline-success"
              type="submit"
            >
              LogOut
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
