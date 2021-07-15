import React, {useState} from "react";
import axios from "axios";
import { WebcamContainer, WebcamButton, Button } from './styles'
import Webcam from "react-webcam";

// const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user",
};

const WebcamCapture = ({ img, setImg }) => {
  const [result, setResult] = useState('')   
  
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [setImg]);

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
      setResult(res.data)
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
};

  return (
    <div>
      <WebcamContainer>
        {img === "" ? (
          <Webcam
            audio={false}
            height={200}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={220}
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={img} alt="" />
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

        <Button onClick={Identify}>Identify</Button>
      
      {console.log(result)}
       </WebcamContainer>
    </div>
    
  );
};

export default WebcamCapture;
