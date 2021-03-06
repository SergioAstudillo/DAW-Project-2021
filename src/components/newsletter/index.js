import React from 'react';
import { Link } from 'react-router-dom';

class NewsletterForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newsletter: [],
			email: '',
			name: '',
			surname: '',
			isRegistered: false,
			isVerified: false,
			isClicked: false,
			message: '',
		};
	}

	handleSubmit = event => {
		event.preventDefault();

		const userValidatedMessage = `Su email ya ha sido registrado y verificado. Le/a avisaremos de próximas novedades en el correo electrónico proporcionado.
		¡Muchas gracias!`;
		const userNotValidatedMessage = `Su email ya ha sido registrado, pero todavía no ha verificado su identidad.
		Por favor, revise el correo electrónico proporcionado.`;
		const firstRegister = `Revise el email de verificación enviado a la siguiente dirección de correo electrónico: ${this.state.email}
		Puede seguir navegando por la web si lo desea.`;

		let elementExists = this.state.newsletter.find(user => user.email === this.state.email);
		if (elementExists) {
			if (elementExists.subscribed && elementExists.verified) {
				this.setState({ isRegistered: true, isVerified: true, isClicked: true, message: userValidatedMessage });
			} else if (elementExists.subscribed && !elementExists.verified) {
				this.setState({ isRegistered: true, isVerified: false, isClicked: false, message: userNotValidatedMessage });
			}
		} else {
			this.setState({ isRegistered: false, isVerified: false, isClicked: true, message: firstRegister });
			const nameCapitalized = this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1);
			const surnameCapitalized = this.state.surname.charAt(0).toUpperCase() + this.state.surname.slice(1);
			fetch('http://localhost:3001/api/newsletter/add', {
				method: 'POST',
				mode: 'cors',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams({
					email: this.state.email,
					name: nameCapitalized,
					surname: surnameCapitalized,
				}),
			})
				.then(result => result.json())
				.then(info => {
					if (info) {
						console.log(info.email);
					}
				});
		}
		this.forceUpdate();
	};

	handleInputChange = event => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	componentDidMount() {
		fetch(`http://localhost:3001/api/newsletter/get`)
			.then(response => response.json())
			.then(newsletterJSON => {
				this.setState({ newsletter: newsletterJSON });
			});
	}

	render() {
		const { email, name, surname, message } = this.state;
		let styleFirstParagraph = '';
		let styleTitle = 'my-2 underline uppercase lg:text-2xl';
		let styleInput = 'rounded text-center w-3/4 px-3 border border-gray-600 lg:text-lg';
		let styleButton = 'my-2 h-6 max-h-10 bg-custom-darkEnf text-white text-shadow-lg text-center uppercase px-3 rounded-full border border-gray-600 lg:block lg:mx-auto lg:w-1/5 lg:text-xl focus:outline-none focus:ring-2';
		let styleLink = 'hidden';
		if (message !== '') {
			styleFirstParagraph = 'mt-2 mx-3 whitespace-pre-line text-base lg:text-xl';
			styleTitle += ' hidden';
			styleInput += ' hidden';
			styleButton += ' hidden lg:hidden';
			styleLink = 'my-2 py-1 text-center bg-custom-darkEnf text-white uppercase px-3 rounded-3xl border border-gray-600 inline-block lg:text-xl focus:outline-none focus:ring-2 lg:py-0';
		} else {
			styleFirstParagraph = '';
		}

		return (
			<section className='w-screen h-1/2 font-josefin mt-5'>
				<form className='bg-gray-200 w-3/4 mx-auto border-2 border-gray-600 rounded-xl' onSubmit={this.handleSubmit}>
					<p className={styleFirstParagraph}>{message}</p>
					<p className={styleTitle}>Email:</p>
					<input className={styleInput} type='email' required placeholder='email@email.com' name='email' value={email} onChange={this.handleInputChange} />
					<p className={styleTitle}>Nombre:</p>
					<input className={styleInput} type='text' required placeholder='Nombre' name='name' value={name} onChange={this.handleInputChange} />
					<p className={styleTitle}>Apellido:</p>
					<input className={styleInput} type='text' required placeholder='Primer Apellido' name='surname' value={surname} onChange={this.handleInputChange} />
					<Link to='/' className={styleLink}>
						Regresar al inicio
					</Link>
					<button className={styleButton}>Suscribirse</button>
				</form>
			</section>
		);
	}
}

export default NewsletterForm;
