import React from "react";
//import Cards from "../Cards/Cards";
//import "./MainPage.css";
//import Cards from "../Cards/Cards.css";
import axios from "axios";
import { useState, useEffect } from "react";
import FlightCards from "../FlightCards/FlightCards";

const BuyTokens = (props) => {
  const [filteredCards, setFilteredCards] = useState([]);
  const [cardName, setCardName] = useState("");
  const [category, setCategory] = useState("All");
  const [currentCard, setCurrentCard] = useState();

  const getTokenCard = async () => {
    console.log("entered get token");
    await axios
      .get("http://localhost:5000/ViewToken", {
        headers: {
          authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log("response is:", response);
        console.log("Filtered cards in buy token are:", filteredCards);
        setFilteredCards(response.data);
      })
      .catch((err) => {
        console.log("buy error:", err);
        //console.error(err);
      });
  };

  useEffect(() => {
    getTokenCard();
  }, []);

  console.log("localstorage token is :", window.localStorage.getItem("token"));

  const handleCardName = (event) => {
    console.log(event.target.value);

    axios
      .get(
        `http://localhost:5000/FilterTokens?search=${event.target.value}&category=${category}`
      )
      .then((response) => {
        console.log(response);
        setFilteredCards(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
    setCardName(event.target.value);
  };

  const handleCategory = (event) => {
    console.log(event.target.value);

    axios
      .get(
        `http://localhost:5000/FilterTokens?search=${cardName}&category=${event.target.value}`
      )
      .then((response) => {
        console.log(response);
        setFilteredCards(response.data);
      })
      .catch((err) => {
        console.error(err);
      });

    setCategory(event.target.value);
  };

  const handleFilter = async (event) => {
    console.log("cardName:", cardName);
    console.log("category:", category);

    await axios
      .get(
        `http://localhost:5000/FilterTokens?search=${cardName}&category=${category}`
      )
      .then((response) => {
        console.log(response);
        setFilteredCards(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  console.log("filteredCardsis", filteredCards);

  return (
    <div>
      <br></br>
      <form className="d-flex">
        <input
          onChange={handleCardName}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={cardName}
        />
        <button
          onClick={handleFilter}
          className="btn btn-outline-success"
          type="button"
        >
          Search
        </button>
      </form>
      <br></br>

      <div>
        <select onChange={handleCategory} value={category} id="ddl" name="ddl">
          <option value="All">All</option>
          <option value="Sports">Sports</option>
          <option value="Technology">Technology</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>

      <br></br>
      <br></br>

      <FlightCards filter={filteredCards} />
    </div>
  );
};

export default BuyTokens;
