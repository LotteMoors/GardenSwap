import React, { useState } from "react";
import { FileDiv, Img, Button } from "./styles";

const Upload = ({ img, setImg, Identify }) => {
  const [fileName, setFileName] = useState("");

  const onChangePicture = (e) => {
    setFileName(e.target.files[0].name);
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImg(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <FileDiv>
      <div
        className="custom-file"
        style={{ display: "flex", alignContent: "center", maxWidth:'35em' ,minWidth:"20em", margin:'1em' }}
      >
        <input
          type="file"
          className="custom-file-input"
          id="customFileLangHTML"
          onChange={onChangePicture}
        />
        <label
          className="custom-file-label"
          htmlFor="customFileLangHTML"
          data-browse="Choose file"
        >
          {fileName}
        </label>
      </div>

      {!img ? null : <Img src={img} alt="" />}

      <Button onClick={Identify}>Identify ❃</Button>
    </FileDiv>
  );
};

export default Upload;
