import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "../styles/map.css";
import { configThemesSecond } from "../mocking/template/index";

const MAPBOX_TOKEN = "pk.eyJ1IjoicmVrdG9yaXBiIiwiYSI6ImNrbXEwZzN6ZTFlejUydmx3enRkdXh5enkifQ.5kX3xMqH25BONTujixNjeg"

const Map = () => {
  
  const mapContainerRef = useRef(null)
  const [map, setMap] = useState(null)

  useEffect(() => {
    // weddingPlace = [lng, lat];
    const weddingPlace = [configThemesSecond.location.longitude, configThemesSecond.location.latitude];
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: weddingPlace,
      zoom: 14,
    })
    map.addControl(new mapboxgl.NavigationControl(), "top-right")

    setMap(map)

    // create the popup
    let popup = new mapboxgl.Popup({ offset: 20 }).setHTML(
      '<h3>' + configThemesSecond.location.placeName + '</h3><p>' + configThemesSecond.location.address + '</p>'
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

    return () => map.remove()
  }, [])

  return <div className={"sungnikah-map"} ref={mapContainerRef} />
}

export default Map;