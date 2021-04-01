import './App.css';

/* Import the different components of our app. */
import Navbar from './components/navbar';
import PresentationCard from './components/presentation';

function App() {
	return (
		<div className='App w-full'>
			<Navbar></Navbar>
			<PresentationCard></PresentationCard>
		</div>
	);
}

export default App;
