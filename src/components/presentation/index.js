import React from 'react';

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
			if (person.name === 'John') {
				owner = {
					name: person.name,
					surname: person.surname,
					description: person.description,
					shortDescription: person.shortDescription,
					img: person.img,
				};
			}
		});

		if (this.state.isLoading === false) {
			return (
				<section className='w-screen mt-5 font-josefin lg:h-almostFull lg:mt-0 lg:flex lg:flex-wrap lg:align-middle lg:content-center'>
					<h1 className='text-xl uppercase underline lg:text-2xl lg:w-screen lg:self-start'>Bienvenido/a a mi web.</h1>
					<img src={owner.img} alt='Foto personal' className='w-1/2 h-1/2 rounded-full block mx-auto mt-3 mb-3 border-8 border-custom-darkEnf border-opacity-50 lg:w-1/6 lg:h-auto'></img>
					<div className='presentationText lg:text-center'>
						<h1 className='text-xl lg:text-2xl'>
							{owner.name} {owner.surname}
						</h1>
						<p className='text-base mx-5 lg:text-lg lg:w-1/2 lg:mx-auto'>{owner.shortDescription}</p>
					</div>
				</section>
			);
		} else {
			return <h1 className='w-screen block mt-3 px-3 text-center text-xl font-josefin'>Cargando, espere unos instantes...</h1>;
		}
	}
}

export default PresentationCard;
