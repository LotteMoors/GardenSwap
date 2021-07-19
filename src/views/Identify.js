import React, { useState } from "react";
import axios from "axios";
import WebCam from "../components/Webcam";
import Upload from "../components/Upload";
import Identifications from "../components/Identifications";
import CameraIcon from "../components/images/camera.png";
import UploadIcon from "../components/images/upload.png";
import {
  Full,
  IDContainer,
  TitleContainer,
  Container,
  IconContainer,
  Img,
  Error,
  UploadContainer,
  WebcamContainer,
  Button,
} from "./styles";

const Identify = () => {
  const [action, setAction] = useState("");
  const [img, setImg] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState(false);

  const URL = "https://api.plant.id/v2/identify";

  const data = {
    api_key: `${process.env.REACT_APP_PLANT_ID_TOKEN}`,
    images: [img],
    modifiers: ["crops_fast", "similar_images"],
    plant_language: "en",
    plant_details: [
      "common_names",
      "url",
      "name_authority",
      "wiki_description",
      "taxonomy",
      "synonyms",
    ],
  };

  const Identify = () => {
    axios
      .post(URL, data)
      .then((res) => {
        console.log("Success:", res.data);
        setResponse(res.data);
        res.data.is_plant === false ? setError(true) : setError(false);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const goBack = () => {
    setAction("");
    setImg("");
    setError(false);
  };

  return (
    <>
      {!response || response.is_plant === false ? (
        <Full>
          <TitleContainer>
            <h1>Garden Swap</h1>
            <h3>Identification Tool</h3>
          </TitleContainer>
          {error ? <Error>No plant detected!</Error> : null}

          {action === "" ? (
            <Container>
              <IconContainer>
                <Img
                  src={UploadIcon}
                  alt=""
                  onClick={() => setAction("Upload")}
                />

                <Img
                  src={CameraIcon}
                  alt=""
                  onClick={() => setAction("Webcam")}
                />
              </IconContainer>
            </Container>
          ) : action === "Upload" ? (
            <UploadContainer>
              <Button onClick={goBack}>⬅ Go Back</Button>
              <Upload
                response={response}
                Identify={Identify}
                img={img}
                setImg={setImg}
              />
            </UploadContainer>
          ) : (
            <WebcamContainer>
              <Button onClick={goBack}>⬅ Go Back</Button>
              <WebCam
                Identify={Identify}
                img={img}
                setImg={setImg}
              />
            </WebcamContainer>
          )}
        </Full>
      ) : (
        <IDContainer>
          <Identifications img={img} response={response} />
        </IDContainer>
      )}
    </>
  );
};

export default Identify;
