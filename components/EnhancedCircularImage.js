// components/EnhancedCircularImage.js
import Image from 'next/image';

const EnhancedCircularImage = ({ src, alt, size }) => {
  return (
    <div className="enhanced-image">
      <Image src={src} alt={alt} width={size} height={size} />
      <style jsx>{`
        .enhanced-image {
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        .enhanced-image:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4), 0 12px 24px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default EnhancedCircularImage;
