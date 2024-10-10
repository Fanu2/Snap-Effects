import Image from 'next/image';

const CircularImage = ({ src, alt, size, position }) => {
  return (
    <div style={{ position: 'absolute', top: position.y, left: position.x }}>
      <Image 
        src={src} 
        alt={alt} 
        width={size} 
        height={size} 
        style={{ borderRadius: '50%' }} // Make it circular
      />
    </div>
  );
};

CircularImage.displayName = 'CircularImage'; // Optional but recommended
export default CircularImage;
