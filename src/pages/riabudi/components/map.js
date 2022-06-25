import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "@styles/map.css";
const MAPBOX_TOKEN = "pk.eyJ1IjoicmVrdG9yaXBiIiwiYSI6ImNrbXEwZzN6ZTFlejUydmx3enRkdXh5enkifQ.5kX3xMqH25BONTujixNjeg";

const Map = () => {

  const mapContainerRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState(null);

  useEffect(() => {
    // weddingPlace = [lng, lat];
    const weddingPlace = [108.5769753, -6.7401958];
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: weddingPlace,
      zoom: 14,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");
    setMap(map);

    // create the popup
    let popup = new mapboxgl.Popup({ offset: 20 }).setHTML(
      '<h3>' + 'Kediaman Mempelai Wanita (Endang Riawati)' + '</h3><p>' + 'Jln.Buyut no 50 Kp. Kutasirap RT 001 RW 014 Kel.Pegambiran Kota Cirebon' + '</p>'
    );

    // create DOM element for the marker
    let el = document.createElement('div');
    el.id = 'marker';

    // create the marker
    new mapboxgl.Marker(el)
      .setLngLat(weddingPlace)
      .setPopup(popup) // sets a popup on this marker
      .addTo(map);

    map.on('load', function () {
      map.rotateTo(180, { duration: 10000 });
    });

    return () => map.remove();
  }, []);

  return <div className={"sungnikah-map"} ref={mapContainerRef} />
}

export default Map;
