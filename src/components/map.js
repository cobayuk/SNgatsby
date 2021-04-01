import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "../styles/map.css";
import { WEDDING_PLACE, WEDDING_ADDRESS } from "../styles/constants";

const MAPBOX_TOKEN = "pk.eyJ1IjoicmVrdG9yaXBiIiwiYSI6ImNrbXEwZzN6ZTFlejUydmx3enRkdXh5enkifQ.5kX3xMqH25BONTujixNjeg"

const Map = () => {
  const mapContainerRef = useRef(null)

  const [map, setMap] = useState(null)

  useEffect(() => {
    const weddingPlace = [106.14847338392859, -6.0917000964338905];
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      // Empire State Building [lng, lat]
      center: weddingPlace,
      zoom: 14,
    })
    map.addControl(new mapboxgl.NavigationControl(), "top-right")

    setMap(map)

    // create the popup
    var popup = new mapboxgl.Popup({ offset: 20 }).setHTML(
      '<h3>' + WEDDING_PLACE.pokelGardenResto + '</h3><p>' + WEDDING_ADDRESS.pokelGardenResto + '</p>'
    );

    // create DOM element for the marker
    var el = document.createElement('div');
    el.id = 'marker';

    // create the marker
    new mapboxgl.Marker(el)
      .setLngLat(weddingPlace)
      .setPopup(popup) // sets a popup on this marker
      .addTo(map);

    map.on('load', function () {
      map.rotateTo(180, { duration: 10000 });
    });

    return () => map.remove()
  }, [])

  return <div className={"sungnikah-map"} ref={mapContainerRef} />
}

export default Map
