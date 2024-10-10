import dynamic from 'next/dynamic';
import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdvancedImageEffects from '../components/AdvancedImageEffects';
import Gallery from '../components/Gallery';
import FilteredImage from '../components/FilteredImage';
import CircularImage from '../components/CircularImage';
import MaskedCircularImage from '../components/MaskedCircularImage';
import EnhancedCircularImage from '../components/EnhancedCircularImage';

// Dynamically import Konva component without SSR
const KonvaCircularImage = dynamic(() => import('../components/KonvaCircularImage'), { ssr: false });

const HomePage = () => {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [imageSrc, setImageSrc] = useState(null);
  const [activeComponent, setActiveComponent] = useState(null);
  const stageRef = useRef(null);

  const zoomIn = () => setZoom((prevZoom) => Math.min(prevZoom + 0.1, 2));
  const zoomOut = () => setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.5));

  const handleDragEnd = (e) => {
    setPosition({
      x: e.target.x(),
      y: e.target.y(),
    });
  };

  const handleRotationChange = (e) => {
    setRotation(Number(e.target.value));
  };

  const handleClick = () => {
    alert('Image clicked!');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'AdvancedImageEffects':
        return <AdvancedImageEffects />;
      case 'Gallery':
        return <Gallery />;
      case 'FilteredImage':
        return <FilteredImage />;
      case 'CircularImage':
        return <CircularImage />;
      case 'MaskedCircularImage':
        return (
          <MaskedCircularImage
            src={imageSrc} // Pass the image source to MaskedCircularImage
            size={200 * zoom} // Adjust size according to zoom
            position={position} // Pass the current position
          />
        );
      case 'EnhancedCircularImage':
        return <EnhancedCircularImage />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <h1>Interactive Konva Circular Image</h1>

        <div>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        <div>
          <button onClick={zoomIn}>Zoom In</button>
          <button onClick={zoomOut}>Zoom Out</button>
        </div>

        <div>
          <label>Rotate Image:</label>
          <input
            type="range"
            min="0"
            max="360"
            value={rotation}
            onChange={handleRotationChange}
          />
        </div>

        {imageSrc && (
          <div style={{ border: '1px solid #000', width: '800px', height: '600px', overflow: 'hidden' }}>
            <KonvaCircularImage
              ref={stageRef}
              src={imageSrc}
              size={200 * zoom}
              rotation={rotation}
              position={position}
              onDragEnd={handleDragEnd}
              onClick={handleClick}
            />
          </div>
        )}

        <div>
          <button onClick={() => setActiveComponent('AdvancedImageEffects')}>Show Advanced Image Effects</button>
          <button onClick={() => setActiveComponent('Gallery')}>Show Gallery</button>
          <button onClick={() => setActiveComponent('FilteredImage')}>Show Filtered Image</button>
          <button onClick={() => setActiveComponent('CircularImage')}>Show Circular Image</button>
          <button onClick={() => setActiveComponent('MaskedCircularImage')}>Show Masked Circular Image</button>
          <button onClick={() => setActiveComponent('EnhancedCircularImage')}>Show Enhanced Circular Image</button>
        </div>

        {renderActiveComponent()}

      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
