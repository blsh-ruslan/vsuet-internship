import React, { useRef, useState, useEffect } from "react"
import * as ol from "ol";
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import MapContext from "./MapContext";

import "./css/map-viewer.css";


const Map = ({ children, zoom, center }) => {
	const mapRef = useRef();
	const [map, setMap] = useState(null);

	useEffect(() => {
		let mapObject = new ol.Map({
			view: new ol.View({ zoom, center }),
			layers: [
				new TileLayer({
                    source: new OSM(),
                })
			],
		});
		mapObject.setTarget(mapRef.current);
		setMap(mapObject);

		return () => mapObject.setTarget(undefined);
	}, []);

	useEffect(() => {
		if (!map) return;
		map.getView().setZoom(zoom);
	}, [zoom]);

	useEffect(() => {
		if (!map) return;
		map.getView().setCenter(center)
	}, [center])

	return (
		<MapContext.Provider value={{ map }}>
			<div ref={mapRef} className="ol-map-container">
				{children}
			</div>
		</MapContext.Provider>
	)
}

export default Map;
