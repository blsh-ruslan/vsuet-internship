import AsideBar from './components/AsideBar';
import Main from './components/Main';

export default function App() {
	return (
		<>
			<div className="app">
				<AsideBar />
				<Main />
			</div>
			<h2 id="notAvailable">Not available on phones, sry :(</h2>
		</>
	);
}
