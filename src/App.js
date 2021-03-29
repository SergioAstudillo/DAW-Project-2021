import './App.css';

/* Import the different components of our app. */
import Navbar from './components/navbar';

function App() {
	return (
		<div className='App w-full'>
			<Navbar></Navbar>
			<div className='bg-gray-500'>
				<p>Hola</p>
			</div>
		</div>
	);
}

export default App;
