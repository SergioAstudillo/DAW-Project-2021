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

	render() {
		if (this.state.isLoading === false) {
			return (
				<section className='products w-full my-5 font-josefin'>
					{this.state.products.map((product, index) => (
						<div className={`product-${index} my-5 mx-5`} key={`product-${index}`}>
							<h1 className='text-xl uppercase underline' key={`title-${index}`}>
								{product.title}
							</h1>
							<img src={product.img}></img>
							<p className='text-sm' key={`description-${index}`}>
								{product.description}
							</p>
							<p className='text-sm' key={`flavor-${index}`}>
								Sabores: {product.flavor}
							</p>
							<p className='text-sm' key={`price-${index}`}>
								Precio: {product.price}€
							</p>
						</div>
						//TODO: Style this better (maybe using <span> inside the <p>) and add images of the products.
					))}
				</section>
			);
		} else {
			return <h1>Cargando, espere unos instantes...</h1>;
		}
	}
}

export default Products;
