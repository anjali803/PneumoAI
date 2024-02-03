import React, { useState } from "react";
import "../App.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    // Read the file and set it as the image source
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileClear = () => {
    setSelectedFile(null);
    setImageUrl(null);
  };

  return (
    <div className="upload-container">
      <main>
        <form>
          <label htmlFor="imageUpload" className="upload-label">
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className="upload-input"
              onChange={handleFileChange}
            />
            <MdCloudUpload className="upload-icon" />
            <span>Upload Image</span>
          </label>
        </form>

        {selectedFile && (
          <div className="selected-file">
            <AiFillFileImage className="file-icon" />
            <span>{selectedFile.name}</span>
            <MdDelete className="delete-icon" onClick={handleFileClear} />
          </div>
        )}

        {imageUrl && (
          <div className="image-preview">
            <img src={imageUrl} alt="Selected" />
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;
