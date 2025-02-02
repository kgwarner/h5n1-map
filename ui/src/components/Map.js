import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <MapContainer center={[40.7128, -74.0060]} zoom={5} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.carto.com/">CARTO</a>'
      />
      <Marker position={[40.7128, -74.0060]}>
        <Popup>
          Example Case: New York City
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
