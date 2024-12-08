import React from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface HeatMapProps {
  data: Array<{
    name: string;
    coordinates: [number, number];
    value: number;
    metric: string;
  }>;
}

const limeiraCenterCoordinates: [number, number] = [-22.5645, -47.4004];

export function HeatMap({ data }: HeatMapProps) {
  return (
    <MapContainer
      center={limeiraCenterCoordinates}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((point, index) => (
        <Circle
          key={index}
          center={point.coordinates}
          radius={500}
          pathOptions={{
            color: '#E63946',
            fillColor: '#E63946',
            fillOpacity: point.value / 100,
          }}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-semibold">{point.name}</h3>
              <p>{point.metric}: {point.value}</p>
            </div>
          </Popup>
        </Circle>
      ))}
    </MapContainer>
  );
}