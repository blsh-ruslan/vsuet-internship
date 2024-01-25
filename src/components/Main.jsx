import { useState } from 'react';
import { MdOutlinePlace } from "react-icons/md";

import { fromLonLat, get } from "ol/proj";
import { Fill, Stroke, Style } from "ol/style";
import vector from "./Layers/vector";
import GeoJSON from "ol/format/GeoJSON";

import Map from './Map.jsx';
import { Layers, VectorLayer } from "./Layers";
import TaskList from './TaskList';

import mapConfig from "../data/config.json";

import './css/main.css';


const FigureStyles = {
	Figure: new Style({
		stroke: new Stroke({
			color: "blue",
			width: 1,
		}),
		fill: new Fill({
			color: "rgba(51, 72, 255, 0.2)",
		}),
	}),
};


const Main = () => {
    const [searchText, setSearchText] = useState('');
	const [center, setCenter] = useState(mapConfig.center);
	const [zoom, setZoom] = useState(mapConfig.zoom)

	const layersArr = [];
	for (let i = 1; i < 12; i++) {
		layersArr.push(
			<VectorLayer key={i}
				source={vector({
					features: new GeoJSON().readFeatures(mapConfig[`geojsonObject${i}`], {
						featureProjection: get("EPSG:3857"),
					}),
				})}
				style={FigureStyles.Figure}
			/>
		)
	}

    return (
        <main className="main">
            <section className="current-events">
                <div className="search-input">
                    <label htmlFor="task-search">
                        <span>Мои места </span>
                        <MdOutlinePlace />
                    </label>
                    <input
                        type="search"
                        placeholder="Начните вводить название..."
                        id="task-search"
                        value={searchText}
                        onChange={e => setSearchText(e.target.value.toLowerCase())}
                    />
                    <button
						className="cancel-btn"
						onClick={() => {
							setSearchText('');
							setCenter(mapConfig.center);
                            setZoom(mapConfig.zoom);
						}}
					>Сбросить</button>
                </div>
                <TaskList
					request={searchText}
					setCenter={setCenter}
					setZoom={setZoom}
				/>
            </section>
            
			<Map center={fromLonLat(center)} zoom={zoom}>
				<Layers>
					{layersArr}
				</Layers>
			</Map>
        </main>
    );
};

export default Main;
