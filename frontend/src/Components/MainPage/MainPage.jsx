
import React from "react";
import Cards from "../Cards/Cards";
import "./MainPage.css";
import "../Cards/Cards.css";
import axios from "axios";
import { useState, useEffect } from 'react';


const MainPage = () => {

  const [filteredCards, setFilteredCards] = useState([]);
  const [cardName, setCardName] = useState('');
  const [category, setCategory] = useState('All');

  
  useEffect(() => {
    getTokenCard();
  }, []);

  console.log("localstorage token is :", localStorage.getItem("token"));

  const getTokenCard = async () => {
    await axios.get("http://localhost:5000/ViewToken", {headers:{authorization:"Bearer "+localStorage.getItem("token")}})
      .then((response) => {
        setFilteredCards(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleCardName = (event) => {
    console.log(event.target.value);

    axios.get(`http://localhost:5000/FilterTokens?search=${event.target.value}&category=${category}`)
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

    axios.get(`http://localhost:5000/FilterTokens?search=${cardName}&category=${event.target.value}`)
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

    await axios.get(`http://localhost:5000/FilterTokens?search=${cardName}&category=${category}`)
      .then((response) => {
        console.log(response);
        setFilteredCards(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (

    <div>
      <br></br>
      <form class="d-flex">
        <input onChange={handleCardName}
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={cardName}

        />
        <button onClick={handleFilter} class="btn btn-outline-success" type='button'>
          Search
        </button>
      </form>
      <br></br>

      <div>
        <select onChange={handleCategory} value={category} id="ddl" name="ddl">
          <option value='All'>All</option>
          <option value='Sports'>Sports</option>
          <option value='Technology'>Technology</option>
          <option value='Entertainment'>Entertainment</option>
        </select>
      </div>

      <br></br>
      <br></br>

      <div class="row row-cols-1 row-cols-md-4 g-4">

        {filteredCards?.map((post) => {
          return <Cards
            img="data:image/jpeg;base64,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"
            Name={post.cardName}
            playerName={post.actualName}
            Tokens={post.tokensInCirculation}
            Cap={post.marketCap}
          />
        })}
      </div>
    </div>
  );
};

export default MainPage;

