import React, { useState } from "react";
import "./App.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";

const HomePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [uploading, setUploading] = useState(false); // New state to track upload status

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

  const handleUpload = () => {
    // Send selectedFile to backend for upload
    // You can use fetch or any other method here to send the image data to the backend
    // Set uploading state to true while uploading to show loading indicator or disable upload button
    setUploading(true);

    const formData = new FormData();
    formData.append("image", selectedFile);

    fetch("your-upload-url", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Handle response, e.g., show success message
        console.log("Image uploaded successfully");
        setUploading(false); // Set uploading state back to false
      })
      .catch((error) => {
        // Handle error, e.g., show error message
        console.error("There was a problem with the upload:", error.message);
        setUploading(false); // Set uploading state back to false
      });
  };

  return (
    <>
      <header>
        <h1>Pneumoai</h1>
      </header>
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
              <span>Select Image</span>
            </label>
          </form>

          {selectedFile && (
            <div className="selected-file">
              {/* <AiFillFileImage className="file-icon" /> */}
              <span style={{ fontSize: "20px" }}>{selectedFile.name}</span>
              <MdDelete className="delete-icon" onClick={handleFileClear} />
            </div>
          )}

          {imageUrl && (
            <div className="image-preview">
              <img src={imageUrl} alt="Selected" />
            </div>
          )}

          {selectedFile && !uploading && (
            <button className="upload-button" onClick={handleUpload}>
              Upload image
            </button>
          )}

          {uploading && <div className="uploading-indicator">Uploading...</div>}
        </main>
      </div>
    </>
  );
};

export default HomePage;
