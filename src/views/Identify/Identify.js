import React, { useState } from "react";
import WebCam from "../../components/Webcam/Webcam.js";
import Upload from "../../components/Upload/Upload.js";
import CameraIcon from "../../components/images/camera.png";
import UploadIcon from "../../components/images/upload.png";
import { Full, TitleContainer, ButtonContainer, ImageContainer, Button, Img } from "./styles";

const Identify = () => {
  const [action, setAction] = useState("");
  const [img, setImg] = useState("");

  const goBack = () => {
    setAction("");
    setImg("");
  };

  return (
    <Full>
      <TitleContainer>
        <h1>Garden Swap</h1>
        <h2>Identification Tool</h2>
      </TitleContainer>

      {action === "" ? (
        <ImageContainer>
          <Img src={UploadIcon} alt="" onClick={() => setAction("Upload")} />

          <Img src={CameraIcon} alt="" onClick={() => setAction("Webcam")} />
        </ImageContainer>
      ) : action === "Upload" ? (
        <ButtonContainer>
          <Button onClick={goBack}>Go Back</Button>
          <Upload img={img} setImg={setImg} />
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          <Button onClick={goBack}>Go Back</Button>
          <WebCam img={img} setImg={setImg} />
        </ButtonContainer>
      )}
      {console.log(img)}
    </Full>
  );
};

export default Identify;
