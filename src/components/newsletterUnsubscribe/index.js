import React from 'react';

class NewsletterUnsubscribe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ID: '',
			isDone: false,
			message: `Estamos consultando sus datos en nuestra base de datos. 
            Espere unos instantes por favor...`,
		};
	}

	setID = () => {
		if (this.state.ID === '') {
			const pathURL = window.location.pathname;
			const splittedPath = pathURL.split('/');
			const ID = splittedPath[2];
			this.setState({ userID: ID });
			return ID;
		}
	};

	componentDidMount() {
		const ID = this.setID();
		if (ID !== '' && typeof ID !== 'undefined') {
			fetch(`http://localhost:3001/api/newsletter/delete/${ID}`, {
				method: 'DELETE',
				mode: 'cors',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams({
					id: ID,
				}),
			})
				.then(result => {
					this.setState({ isDone: true });
					this.setState({
						message: `Su usuario ha sido eliminado de nuestra base de datos.
                    Por favor revise el correo para más detalles.`,
					});
					result.json();
				})
				.then(info => {
					if (info) {
						console.log(info.email);
					}
				});
		}
	}

	render() {
		const { isDone, message } = this.state;
		let styleFirstParagraph = '';
		if (message !== '') {
			styleFirstParagraph = 'my-2 mx-3 whitespace-pre-line';
		} else {
			styleFirstParagraph = '';
		}
		if (isDone) {
			return (
				<section className='w-screen h-1/2 font-josefin mt-5'>
					<form className='bg-gray-200 w-3/4 mx-auto border-2 border-gray-600 rounded-xl' onSubmit={this.handleSubmit}>
						<p className={styleFirstParagraph}>{message}</p>
					</form>
				</section>
			);
		} else {
			return (
				<section className='w-screen h-1/2 font-josefin mt-5'>
					<form className='bg-gray-200 w-3/4 mx-auto border-2 border-gray-600 rounded-xl' onSubmit={this.handleSubmit}>
						<p className={styleFirstParagraph}>{message}</p>
					</form>
				</section>
			);
		}
	}
}

export default NewsletterUnsubscribe;
