import React, { useState } from "react";
import axios from "axios";
import { Button } from "./styles";
const ConfirmButton = ({ res }) => {
  const [text, setText] = useState(false);

  const toggleText = () => setText((value) => !value);
  
  const URL = `https://api.plant.id/confirm/${res.id}`;
  const URL2 = `https://api.plant.id/unconfirm/${res.id}`;

  const data = {
    key: `${process.env.REACT_APP_PLANT_ID_TOKEN}`,
  };

  const confirmPlant = async () => {
    toggleText();
    await axios
      .post(URL, data, { timeout: 1000 * 5 })
      .then((res) => {
        console.log("Success:", res);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };
  
  const unConfirmPlant = async () => {
    toggleText();
    await axios
      .post(URL2, data, { timeout: 1000 * 5 })
      .then((res) => {
        console.log("Success:", res);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };
  return (
    <div>
      {!text ? (
        <Button onClick={confirmPlant}>Confirm</Button>
      ) : (
        <Button onClick={unConfirmPlant}>✓</Button>
      )}
    </div>
  );
};

export default ConfirmButton;
