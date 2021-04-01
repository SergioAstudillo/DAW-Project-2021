import React from 'react';
import ownerPortrait from '../../assets/portraits/ownerPortrait.png';

class PresentationCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			people: [],
			isLoading: true,
		};
	}

	componentDidMount() {
		fetch('http://localhost:3001/api/people/get')
			.then(response => response.json())
			.then(peopleJSON => {
				this.setState({ people: peopleJSON, isLoading: false });
			});
	}

	render() {
		let owner = {};
		this.state.people.forEach(person => {
			if (person.name === 'Elena') {
				owner = {
					name: person.name,
					surname: person.surname,
					description: person.description,
				};
			}
		});

		const pageDescription =
			'Aquí podrás ver los distintos productos que distribuyo a través de Herbalife. También podrás conocer un poco más de las personas que trabajan en este proyecto y suscribirte a una newsletter a través de la cual recibirás noticias sobre productos y demás temas de interés.';

		if (this.state.isLoading === false) {
			return (
				<section className='w-full mt-5 font-josefin'>
					<h1 className='text-xl uppercase underline'>Bienvenido/a a mi web.</h1>
					<img src={ownerPortrait} alt='Foto personal' className='w-1/2 h-1/2 rounded-full block mx-auto mt-3 mb-3 border-8 border-custom-darkEnf border-opacity-50'></img>
					<div className=''>
						<h1 className='text-xl'>
							{owner.name} {owner.surname}
						</h1>
						<p className='text-sm mx-5'>{/* {owner.description} */ pageDescription}</p>
					</div>
				</section>
			);
		} else {
			return <h1>Cargando, espere unos instantes...</h1>;
		}
	}
}

export default PresentationCard;
