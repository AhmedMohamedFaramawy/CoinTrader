import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import "./Cards.css";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import jwt from "jsonwebtoken";

const Cards = (filter) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onBuy = (id) => {
    console.log("the buy id is:", id);
    console.log("the token value is:", localStorage.getItem("token"));
    const tokens = jwt.verify(
      localStorage.getItem("token"),
      "adafgjs7ng7dk7s6ng5kf5s1nbk8sf7n8dk9sn9s2fgad"
    );
    console.log("The LocalStorage token is :", tokens);
    const users = tokens.username;

    const newData = {
      users: users,
      id: id,
      //   cardName: id.cardName,
      //   actualName: id.actualName,
      //   category,
      //   tokensInCirculation: 0,
      //   marketCap: 0,
    };
    axios.put("http://localhost:5000/BuyTokens", newData, {
      headers: { authorization: "Bearer " + localStorage.getItem("token") },
    });
  };

  return (
    <div className = "cards-section">
      <div className="col rcorners1">
        <div className="card">
          <img src={filter.img} className="card-img-top img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{filter.Name}</h5>
            <p className="card-text">{filter.playerName}</p>
            <p>Tokens in circulation {filter.Tokens}</p>
            <p>Market Cap {filter.Cap}</p>
            <button onClick={handleOpen}>Buy Token</button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Are you sure you want to Buy this token?
                </Typography>

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <Button
                    size="small"
                    onClick={() => {
                      onBuy(filter._id);
                      handleClose();
                    }}
                  >
                    Buy
                  </Button>
                  <Button size="small" onClick={handleClose}>
                    Go back
                  </Button>
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
