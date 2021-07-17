import React from "react";
import { WebcamContainer, WebcamButton, Button, Img } from "./styles";
import Webcam from "react-webcam";

// const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 320,
  height: 300,
  facingMode: "user",
};

const WebcamCapture = ({ response, img, setImg, Identify }) => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [setImg]);

  return (
    <WebcamContainer>
      {img === "" ? (
        <Webcam
          audio={false}
          height={300}
          style={{ borderRadius: "45px" }}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={320}
          videoConstraints={videoConstraints}
        />
      ) : (
        <Img src={img} alt="" />
      )}

      {img !== "" ? (
        <WebcamButton
          onClick={(e) => {
            e.preventDefault();
            setImg("");
          }}
        >
          Retake Image
        </WebcamButton>
      ) : (
        <WebcamButton
          onClick={(e) => {
            e.preventDefault();
            capture();
          }}
        >
          Capture
        </WebcamButton>
      )}

      <Button onClick={Identify}>Identify ❃</Button>
    </WebcamContainer>
  );
};

export default WebcamCapture;
