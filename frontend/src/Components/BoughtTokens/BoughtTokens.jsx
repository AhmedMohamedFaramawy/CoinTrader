import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import SellCards from "../sellCards/sellCards";
import Cards from "../Cards/Cards";

const BoughtTokens = () => {
  const [filteredCards, setFilteredCards] = useState([]);
  const [cardName, setCardName] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    getTokenCard();
  }, []);

  const getTokenCard = async () => {
    const tokens = jwt.verify(
      localStorage.getItem("token"),
      "adafgjs7ng7dk7s6ng5kf5s1nbk8sf7n8dk9sn9s2fgad"
    );

    const users = tokens.username;

    await axios
      .post(
        "http://localhost:5000/BoughtTokens",
        { username: users },
        {
          headers: { authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      .then((response) => {
        setFilteredCards(response.data[0].BoughtCards);
        //setFilteredCards(response.data);
        console.log("resss");
        console.log(
          "response.data[0].BoughtCards :",
          response.data[0].BoughtCards
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCardName = () => {};

  const handleFilter = () => {};

  const handleCategory = () => {};

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

      <SellCards filter={filteredCards} />
    </div>
  );
};
export default BoughtTokens;
