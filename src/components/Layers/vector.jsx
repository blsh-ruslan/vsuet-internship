import { Vector as VectorSource } from 'ol/source';

export default function vector({ features }) {
	return new VectorSource({
		features
	});
}
