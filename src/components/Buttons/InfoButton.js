import React from "react";
import Info from "../images/information.png";
import { Icon } from "./styles";

const InfoButton = ({ setInfo, index }) => {
  return <Icon src={Info} alt="" onClick={() => setInfo(index)} />;
};

export default InfoButton;
