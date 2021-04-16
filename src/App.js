import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Import the different components of our app. */
import Navbar from './components/navbar';
import PresentationCard from './components/presentation';
import Products from './components/products';
import People from './components/people';
import NewsletterForm from './components/newsletter';
import NewsletterVerified from './components/newsletterVerified';
import NewsletterUnsubscribe from './components/newsletterUnsubscribe';

function App() {
	return (
		<Router>
			<div className='App w-screen'>
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
					<Route exact path='/newsletter'>
						<NewsletterForm></NewsletterForm>
					</Route>
					<Route exact path='/newsletterVerified/:id'>
						<NewsletterVerified></NewsletterVerified>
					</Route>
					<Route exact path='/newsletterUnsubscribe/:id'>
						<NewsletterUnsubscribe></NewsletterUnsubscribe>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
