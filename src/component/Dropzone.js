import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

const Dropzone = (props) => {
  // const wrapperRef = useRef(null);
  const uploderRef = useRef(null);
  const imageReader = new FileReader();

  const [fileList, setFileList] = useState([]);

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    uploderRef.current.click();
  };

  const fileUpload = (e) => {
    e.preventDefault();
    const files = e.target.files[0];
    imageReader.readAsDataURL(files);
    imageReader.onloadend = (e) => {
      setFileList([...fileList, e.target.result]);
    };

    /* if (files) {
      const updatedList = [...fileList, files];
      console.log(updatedList);
      setFileList(updatedList);
      props.onFileChange(updatedList);
    } */
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files[0];
    // console.log(files);
    if (files) {
      imageReader.readAsDataURL(files);
      imageReader.onloadend = (e) => {
        setFileList([...fileList, e.target.result]);
      };
    }
  };

  // console.log(fileList, "file");
  return (
    <>
      <div className="container drop-file-input ">
        <div
          className="drop-container"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
          onClick={handleClick}
        >
          <div className="drop-message">
            <div className="upload-icon"></div>
            Drag & Drop files here or click to upload
          </div>
          <input
            type="file"
            value=""
            accept="image/jpeg, image/jpg, image/png, image/gif, image/x-icon"
            onChange={fileUpload}
            ref={uploderRef}
          />
        </div>
      </div>
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          {fileList.map((item, index) => (
            <div key={index} className="drop-file-preview__item">
              <img src={item} alt="image" height={300} width={300} />
              <div className="drop-file-preview__item__info">
                <p></p>
                <p>{item[index]?.name}</p>
                <p>{item[index]?.size}</p>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};
Dropzone.propTypes = {
  onFileChange: PropTypes.func,
};

export default Dropzone;
