import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Slider from "../Slider/Slider";
import InfoButton from "../Buttons/InfoButton";
import ConfirmButton from "../Buttons/ConfirmButton";
import Information from "../Information/Information";
import {
  Container,
  Title,
  CardContainer,
  Card,
  CardBody,
  Img,
  Name,
  CommonName,
  ProgressContainer,
  Progress,
} from "./styles";

const Identifications = ({ response, img }) => {
  const [info, setInfo] = useState("");

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
            {info !== index ? (
              <>
                <CardBody>
                  <ConfirmButton res={res} />
                  <InfoButton index={index} setInfo={setInfo} />
                  <div style={{ height: "55%", justifyContent:'space-around', display:'flex', flexFlow:'column' }}>
                    <Name>{res.plant_name}</Name>
                    {res.plant_details.common_names !== null ? (
                      <CommonName>
                        {Capitalize(`${res.plant_details.common_names[0]}`)}
                      </CommonName>
                    ) : null}
                  </div>
                  <ProgressContainer>
                    <Progress>
                      <CircularProgressbar
                        value={Math.round(res.probability * 100)}
                        text={`${Math.round(res.probability * 100)}%`}
                      />
                    </Progress>
                  </ProgressContainer>
                </CardBody>
                <div style={{ maxWidth: "20em", maxHeight: "25em" }}>
                  <Slider res={res.similar_images} />
                </div>
              </>
            ) : (
              <Information setInfo={setInfo} res={res} />
            )}           
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default Identifications;
