import React from "react";
import "./Cards.css";

 const Cards = (props) =>  {
    return(
        <div>
           <div class="col rcorners1">
                <div class="card">
                     <img src={props.img} class="card-img-top img" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{props.Name}</h5>
                        <p class="card-text">{props.playerName}</p>
                        <p>Tokens in circulation {props.Tokens}</p>
                        <p>Market Cap {props.Cap}</p>
                        <button onClick={props.Buy}>Buy Token</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Cards;