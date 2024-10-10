import PropTypes from 'prop-types';
import Image from 'next/image';

const FilteredImage = ({ src, alt, size, filter }) => {
  return (
    <div className="filtered-image">
      <Image src={src} alt={alt} width={size} height={size} layout="responsive" />
      <style jsx>{`
        .filtered-image {
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          overflow: hidden;
          filter: ${filter};
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

// Prop validation
FilteredImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  filter: PropTypes.string,
};

FilteredImage.defaultProps = {
  filter: 'none', // Default filter value
};

export default FilteredImage;
