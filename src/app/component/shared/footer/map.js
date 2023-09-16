"use client";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "250px",
    height: "250px",
};

const mapCenter = {
    lat: 3.215286512803009,
    lng: 101.72654420540658,
};

export default function Map() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
    });

    return isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={17}></GoogleMap>
    ) : (
        <></>
    );
}
