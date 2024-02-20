import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Importez L de leaflet
import 'leaflet/dist/leaflet.css';
import '../utils/css/ventes.css'

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

const adresseList = [
    { name: "Lieu 1", lat: 48.8566, lng: 2.3522 },
];

const Ventes = () => {
    return (
        <div>
            <h1 className='title-maps'>Trouvez nos revendeurs officiels</h1>
            <MapContainer center={[45.7772, 3.0870]} zoom={5} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {adresseList.map((adresse, index) => (
                    <Marker key={index} position={[adresse.lat, adresse.lng]}>
                        <Popup>{adresse.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Ventes;
