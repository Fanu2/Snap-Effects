import React, { useEffect, useRef } from 'react';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';

const KonvaCircularImage = React.forwardRef(
  ({ src, size, rotation, position, onDragEnd, onClick, alt = "" }, ref) => {
    const imageRef = useRef(null);
    const img = useRef(null); // Create a ref for the image

    useEffect(() => {
      // Create a new image object and load the src
      img.current = new window.Image();
      img.current.src = src;

      img.current.onload = () => {
        if (imageRef.current) {
          imageRef.current.getLayer().batchDraw();
        }
      };
    }, [src]);

    return (
      <Stage
        ref={ref}
        width={800} // Match the viewing window size
        height={600} // Match the viewing window size
        draggable
        onDragEnd={onDragEnd}
      >
        <Layer>
          <KonvaImage
            ref={imageRef}
            image={img.current} // Use the image ref
            width={size}
            height={size}
            rotation={rotation}
            x={position.x}
            y={position.y}
            draggable
            onClick={onClick}
            alt={alt} // Add alt prop
          />
        </Layer>
      </Stage>
    );
  }
);

// Adding a display name for better debugging
KonvaCircularImage.displayName = 'KonvaCircularImage';

export default KonvaCircularImage;
