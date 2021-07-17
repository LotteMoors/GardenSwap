import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Slider from "../Slider/Slider";
import Info from "../images/information.png";
import {
  Container,
  Title,
  CardContainer,
  Card,
  CardBody,
  Img,
  Name,
  CommonName,
  Progress,
  Icon,
  Button,
} from "./styles";

const Identifications = ({ response, img }) => {
//   const [info, setInfo] = useState(false);
  
  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Container>
      <Img src={img} alt="" />
      <Title>Result</Title>
      <CardContainer>
        {response.suggestions.map((res, index) => (
          <Card key={index}>
            <CardBody>
              <Icon src={Info} alt="" />
              <Button >Confirm</Button>
              <Name>{res.plant_name}</Name>
             
              {/* {res.plant_details.taxonomy !== null ? (
                <p> {res.plant_details.taxonomy.family} </p>
              ) : null} */}
              <div
                style={{
                  width: "20em",
                  height:'15em',
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Progress>
                  <CircularProgressbar
                    value={Math.round(res.probability * 100)}
                    text={`${Math.round(res.probability * 100)}%`}
                  />
                </Progress>
              </div>
              {res.plant_details.common_names !== null ? (
                <CommonName>
                  {Capitalize(`${res.plant_details.common_names[0]}`)}
                </CommonName>
              ) : null}
            </CardBody>
            <div style={{ maxWidth: "25em", maxHeight: "25em" }}>
              <Slider res={res.similar_images} />
            </div>

            {/* <img src={res.similar_images[0].url} alt="" /> */}
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default Identifications;
