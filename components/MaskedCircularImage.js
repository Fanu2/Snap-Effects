import React, { useEffect, useState } from 'react';
import { Stage, Layer, Image } from 'react-konva';

const MaskedCircularImage = ({ imageUrl, size, position, alt = "" }) => { // Added alt prop with default value
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = imageUrl;

    img.onload = () => {
      setImage(img);
    };

    img.onerror = () => {
      setError("Failed to load image.");
    };
  }, [imageUrl]);

  if (error) {
    return <div>{error}</div>; // Display error message if the image fails to load
  }

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {image && (
          <Image
            image={image}
            width={size}
            height={size}
            x={position.x}
            y={position.y}
            clipFunc={(context) => {
              context.beginPath();
              context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true); // Circular mask
              context.closePath();
              context.clip();
            }}
            alt={alt} // Use the alt prop here
          />
        )}
      </Layer>
    </Stage>
  );
};

export default MaskedCircularImage;
