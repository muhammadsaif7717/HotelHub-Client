
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  // Coordinates of the location you want to show on the map
  const position = [51.505, -0.09]; // Latitude, Longitude

  return (
    <div>
      <h1 className="text-center mb-5 text-3xl font-bold ">Our Hotel{`'`}s Location</h1>
       <div className=" rounded-xl overflow-hidden">
      <div style={{ height: "400px" }} className="rounded-xl">
        <MapContainer center={position} zoom={13} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
   </div>
  );
};

export default Map;
