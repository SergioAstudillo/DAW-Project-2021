import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Import the different components of our app. */
import Navbar from './components/navbar';
import PresentationCard from './components/presentation';
import Products from './components/products';
import People from './components/people';

function App() {
	return (
		<Router>
			<div className='App w-full'>
				<Navbar></Navbar>
				<Switch>
					<Route exact path='/'>
						<PresentationCard></PresentationCard>
					</Route>
					<Route exact path='/productos'>
						<Products></Products>
					</Route>
					<Route exact path='/personas'>
						<People></People>
					</Route>
					<Route exact path='/newsletter'></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
