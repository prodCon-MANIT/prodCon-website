import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom marker icons for different alert types and priorities
const createCustomIcon = (priority, category) => {
  const colors = {
    critical: '#ef4444', // red
    high: '#f97316',     // orange
    medium: '#eab308',   // yellow
    low: '#22c55e'       // green
  };

  const color = colors[priority] || '#6b7280';
  
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: ${color};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        color: white;
        font-weight: bold;
        position: relative;
      ">
        ${category.charAt(0).toUpperCase()}
        <div style="
          position: absolute;
          top: -5px;
          right: -5px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: ${priority === 'critical' ? '#dc2626' : 'transparent'};
          ${priority === 'critical' ? 'animation: pulse 2s infinite;' : ''}
        "></div>
      </div>
      <style>
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
      </style>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10]
  });
};

// Component to fit map bounds to show all markers
const FitBounds = ({ alerts }) => {
  const map = useMap();

  useEffect(() => {
    if (alerts.length > 0) {
      const bounds = L.latLngBounds(alerts.map(alert => [alert.location.lat, alert.location.lng]));
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [alerts, map]);

  return null;
};

const NDRFMap = ({ alerts, selectedAlert, onAlertSelect, className = "" }) => {
  const mapRef = useRef();

  const formatTime = (date) => {
    const now = new Date();
    const diff = Math.floor((now - date) / 60000);
    
    if (diff < 1) return 'Just now';
    if (diff < 60) return `${diff}m ago`;
    if (diff < 1440) return `${Math.floor(diff / 60)}h ago`;
    return `${Math.floor(diff / 1440)}d ago`;
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return '#ef4444';
      case 'high': return '#f97316';
      case 'medium': return '#eab308';
      case 'low': return '#22c55e';
      default: return '#6b7280';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return '#ef4444';
      case 'in-progress': return '#f97316';
      case 'acknowledged': return '#eab308';
      case 'resolved': return '#22c55e';
      default: return '#6b7280';
    }
  };

  // Default center of India
  const defaultCenter = [20.5937, 78.9629];
  const defaultZoom = 5;

  return (
    <div className={`relative ${className}`}>
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        className="h-full w-full rounded-lg"
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <FitBounds alerts={alerts} />
        
        {alerts.map((alert) => (
          <Marker
            key={alert.id}
            position={[alert.location.lat, alert.location.lng]}
            icon={createCustomIcon(alert.priority, alert.category)}
            eventHandlers={{
              click: () => {
                if (onAlertSelect) {
                  onAlertSelect(alert);
                }
              },
            }}
          >
            <Popup className="custom-popup" maxWidth={300}>
              <div className="p-2">
                <div className="flex items-center gap-2 mb-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getPriorityColor(alert.priority) }}
                  />
                  <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                    {alert.category}
                  </span>
                  <span 
                    className="text-xs px-2 py-1 rounded-full font-medium text-white"
                    style={{ backgroundColor: getStatusColor(alert.status) }}
                  >
                    {alert.status.replace('-', ' ')}
                  </span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                  {alert.title}
                </h3>
                
                <p className="text-gray-700 text-xs mb-3 line-clamp-2">
                  {alert.description}
                </p>
                
                <div className="grid grid-cols-1 gap-2 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Location:</span>
                    <span>{alert.location.address}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Time:</span>
                    <span>{formatTime(alert.timestamp)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Affected:</span>
                    <span>{alert.affectedPeople} people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Teams:</span>
                    <span>{alert.teamsAssigned} assigned</span>
                  </div>
                </div>
                
                <div className="mt-3 pt-2 border-t border-gray-200">
                  <button
                    onClick={() => onAlertSelect && onAlertSelect(alert)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Map Legend */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg z-[1000]">
        <h4 className="font-semibold text-gray-900 text-sm mb-2">Alert Priority</h4>
        <div className="space-y-1">
          {[
            { priority: 'critical', label: 'Critical', color: '#ef4444' },
            { priority: 'high', label: 'High', color: '#f97316' },
            { priority: 'medium', label: 'Medium', color: '#eab308' },
            { priority: 'low', label: 'Low', color: '#22c55e' }
          ].map(({ priority, label, color }) => (
            <div key={priority} className="flex items-center gap-2 text-xs">
              <div 
                className="w-3 h-3 rounded-full border border-white shadow-sm"
                style={{ backgroundColor: color }}
              />
              <span className="text-gray-700">{label}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-3 pt-2 border-t border-gray-200">
          <p className="text-xs text-gray-600">
            Letter indicates alert type (F=Flood, C=Cyclone, etc.)
          </p>
        </div>
      </div>
      
      {/* Alert count indicator */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg z-[1000]">
        <p className="text-sm font-medium text-gray-900">
          {alerts.length} Alert{alerts.length !== 1 ? 's' : ''} on Map
        </p>
      </div>
    </div>
  );
};

export default NDRFMap;