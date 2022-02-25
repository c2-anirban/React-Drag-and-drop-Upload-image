import React from "react";
import "./App.css";
import Dropzone from "./component/Dropzone";

function App() {
  const onFileChange = (files) => {
    console.log(files);
  };

  return (
    <div className="content">
      <Dropzone onFileChange={(files) => onFileChange(files)} />
    </div>
  );
}

export default App;
