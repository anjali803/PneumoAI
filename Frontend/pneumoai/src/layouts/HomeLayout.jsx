// import { Link } from "react-router-dom";

// const HomeLayout = (props) => {
//   return (
//     <div className="bg"> 
//       <nav className="nav">
//         <h4>PneumoAI</h4>
//         <Link className="login" to="/">LogIn</Link>
//         <Link className="signup" to="/signup">SignUp</Link>
//       </nav>
//       <div className="bg">{props.children}</div>
//       <div>
//         <span className="span-text">Select Image</span>
//         <p>or drop images here</p>
//       </div>
//     </div>
//   );
// };

// export default HomeLayout;

import { Link } from "react-router-dom";
import { useState } from "react";

const HomeLayout = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    // Do something with the selected file, e.g., display a preview
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    // Do something with the dropped file, e.g., display a preview
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg">
      <nav className="nav">
        <h4>PneumoAI</h4>
        <Link className="login" to="/">LogIn</Link>
        <Link className="signup" to="/signup">SignUp</Link>
      </nav>
      <div className="image-upload-container">
        <div
          className="image-upload-box"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" />
          ) : (
            <p>Drag and drop an X-ray image or click to select</p>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
        />
      </div>
      <div className="bg">{props.children}</div>
    </div>
  );
};

export default HomeLayout;
