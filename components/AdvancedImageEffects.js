import React, { useState } from 'react';
import ImageEffects from 'react-image-effects';

const AdvancedImageEffects = ({ alt, size }) => {
  const [src, setSrc] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        console.log("Image loaded:", fileReader.result); // Log the loaded image
        setSrc(fileReader.result); // Set the image source to the file data URL
      };
      fileReader.readAsDataURL(file); // Read the file as a data URL
    } else {
      console.error("No file selected"); // Log error if no file is selected
    }
  };

  return (
    <div>
      {src ? (
        <ImageEffects
          src={src}
          alt={alt}
          width={size}
          height={size}
          effect="cool" // Change this if you want a different effect
        />
      ) : (
        <div>
          <p>No image selected. Please choose an image from your folder.</p>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
      )}
    </div>
  );
};

export default AdvancedImageEffects;
