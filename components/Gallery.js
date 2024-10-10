import React from 'react';
import PropTypes from 'prop-types';
import KonvaCircularImage from './KonvaCircularImage';

const images = [
  { src: '/images/sample1.jpg', size: 150, effect: 'Blur' },
  { src: '/images/sample2.jpg', size: 150, effect: 'Sepia' },
  { src: '/images/sample3.jpg', size: 150, effect: 'Invert' }
];

const Gallery = () => {
  return (
    <div style={galleryStyle}>
      {images.map((image) => (
        <KonvaCircularImage
          key={image.src} // Use image.src as a unique key
          src={image.src}
          size={image.size}
          effect={image.effect}
        />
      ))}
    </div>
  );
};

const galleryStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  margin: '20px 0',
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      effect: PropTypes.string.isRequired,
    })
  ),
};

// Optional: if you plan to pass images as props in the future
Gallery.defaultProps = {
  images, // Default to the predefined images
};

export default Gallery;
