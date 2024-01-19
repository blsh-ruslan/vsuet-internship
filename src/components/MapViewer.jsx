import { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import './css/map-viewer.css';


export default function MapViewer() {
    const mapRef = useRef(null);

    useEffect(() => {
        const initialMap = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: fromLonLat([0, 0]),
                zoom: 2,
            }),
        });
        return () => initialMap.setTarget(null)
    }, []);

    return (
        <section
            ref={mapRef}
            class="oal-map-container"
        ></section>
    );
}
