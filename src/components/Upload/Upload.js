import React from "react";
import axios from "axios";
import { Img, Button } from "./styles";

const Upload = ({ img, setImg }) => {
  
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
  
  const onChangePicture = (e) => { 
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImg(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const Identify = () => {  
    axios
      .post(URL, data)
      .then((res) => {
        console.log("Success:", res.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  return (
    <>
      <input id="plantPic" type="file" onChange={onChangePicture} />
      
      {!img ? null : <Img src={img} alt="" />}
      
      <Button onClick={Identify}>Identify</Button>

      
    </>
  );
};

export default Upload;
