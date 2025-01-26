// src/components/MaterialViewer.jsx
// Import required React components and hooks
import React, { useState } from 'react';

// Main MaterialViewer component definition
const MaterialViewer = () => {
  // State hook to track which material spot is being hovered
  const [hoveredSpot, setHoveredSpot] = useState(null);
  
  // Data array containing material information
  const materials = [
    {
      id: 1,
      name: 'Brushed Aluminum',
      code: 'MTL-001',
      color: '#D3D3D3',
      position: { x: 20, y: 30 },
      image: '/materials/aluminum.jpg' // Path to material image
    }
  ];

  // MaterialInfo component - shows popup card with material details
  const MaterialInfo = ({ material }) => (
    <div className="absolute bg-white rounded-lg shadow-lg p-4 w-48">
      <img 
        src={material.image} 
        alt={material.name}
        className="w-full h-32 object-cover rounded-lg mb-2"
      />
      <h3 className="font-bold">{material.name}</h3>
      <p>Code: {material.code}</p>
      <div className="flex items-center mt-2">
        <span>Color:</span>
        <div className="w-6 h-6 rounded-full ml-2" style={{ backgroundColor: material.color }} />
      </div>
    </div>
  );

  // Main render section of MaterialViewer component
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative">
        {/* Main scene image */}
        <img 
          src="/placeholder.jpg"
          alt="Scene render"
          className="w-full rounded-lg"
        />
        
        {/* Map through materials to create hotspots */}
        {materials.map(material => (
          <div
            key={material.id}
            className="absolute w-8 h-8 cursor-pointer"
            style={{
              left: `${material.position.x}%`,
              top: `${material.position.y}%`
            }}
            onMouseEnter={() => setHoveredSpot(material.id)}
            onMouseLeave={() => setHoveredSpot(null)}
          >
            {/* Hotspot indicator circle */}
            <div className="w-full h-full rounded-full border-2 border-white bg-black bg-opacity-50" />
            {/* Show MaterialInfo when spot is hovered */}
            {hoveredSpot === material.id && (
              <MaterialInfo material={material} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the component for use in other files
export default MaterialViewer;
