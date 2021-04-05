import React from 'react';

class People extends React.Component {
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
		if (this.state.isLoading === false) {
			return (
				<section className='people w-full my-5 font-josefin'>
					{this.state.people.map((person, index) => (
						<div className={`person-${index} my-5 mx-5`} key={`person-${index}`}>
							<h1 className='text-xl uppercase underline' key={`fullname-${index}`}>
								{person.name} {person.surname}
							</h1>
							<img className='w-1/2 h-1/2 rounded-full block mx-auto mt-3 mb-3 border-8 border-custom-darkEnf border-opacity-50' src={person.img} alt={`${person.name}${person.surname}`} key={`image-${index}`}></img>
							<p className='text-sm my-3' key={`description-${index}`}>
								{person.description}
							</p>
							<a href={person.instagram} className='flex flex-row whitespace-pre justify-center align-middle' key={`instagram-${index}`}>
								<img className='w-5' src='./../../assets/logos/instagram-brands.svg' alt='InstagramLogo'></img>
								<p> Instagram</p>
							</a>
						</div>
					))}
				</section>
			);
		} else {
			return <h1>Cargando, espere unos instantes...</h1>;
		}
	}
}

export default People;
