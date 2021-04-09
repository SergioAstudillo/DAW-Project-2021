import React from 'react';

class Products extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			isLoading: true,
		};
	}

	componentDidMount() {
		fetch('http://localhost:3001/api/products/get')
			.then(response => response.json())
			.then(productsJSON => {
				this.setState({ products: productsJSON, isLoading: false });
			});
	}

	replaceDot = price => {
		let priceString = price.toString();
		return priceString.replace('.', ',');
	};

	render() {
		if (this.state.isLoading === false) {
			return (
				<section className='products w-screen my-5 font-josefin'>
					{this.state.products.map((product, index) => (
						<div className={`product-${index} my-5 mx-5`} key={`product-${index}`}>
							<h1 className='text-xl uppercase underline' key={`title-${index}`}>
								{product.title}
							</h1>
							<img className='block mx-auto' src={product.img} alt={product.title} key={`image-${index}`}></img>
							<p className='text-sm my-3' key={`description-${index}`}>
								{product.description}
							</p>
							<p className='text-sm mb-3' key={`flavor-${index}`}>
								<span className='underline'>Sabores:</span> {product.flavor}
							</p>
							<p className='text-sm' key={`price-${index}`}>
								<span className='underline'>Precio:</span> {this.replaceDot(product.price)}€ (una vez somos socios/as con el descuento base del 25%. Incluye seguimiento personalizado.)
							</p>
						</div>
					))}
				</section>
			);
		} else {
			return <h1>Cargando, espere unos instantes...</h1>;
		}
	}
}

export default Products;
