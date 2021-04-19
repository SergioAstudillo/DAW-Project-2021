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
						<div className={`product-${index} my-5 mx-5 lg:grid lg:grid-cols-3 lg:grid-rows-9 lg:gap-0 lg:mx-20`} key={`product-${index}`}>
							<h1 className='text-xl uppercase underline lg:text-2xl lg:col-span-3 lg:row-span-5 lg:my-0' key={`title-${index}`}>
								{product.title}
							</h1>
							<img className='block mx-auto lg:col-span-1 lg:row-span-3' src={product.img} alt={product.title} key={`image-${index}`}></img>
							<div className='hidden lg:flex lg:items-center lg:col-span-2 lg:row-span-3'>
								<div className='lg:block lg:bg-gray-200 lg:p-5 lg:border-2 lg:rounded-xl lg:border-gray-600'>
									<p className='text-base my-3 lg:text-xl lg:col-span-2 lg:my-0 lg:mt-3 lg:text-left' key={`description-${index}`}>
										{product.description}
									</p>
									<p className='text-base mb-3 lg:text-lg lg:col-span-2 lg:my-3 lg:text-left' key={`flavor-${index}`}>
										<span className='underline lg:text-xl'>Sabores:</span> {product.flavor}
									</p>
									<p className='text-base lg:text-lg lg:col-span-2 lg:text-left' key={`price-${index}`}>
										<span className='underline lg:text-xl'>Precio:</span> {this.replaceDot(product.price)}€ (una vez somos socios/as con el descuento base del 25%. Incluye seguimiento personalizado.)
									</p>
								</div>
							</div>
							<p className='text-base my-3 lg:hidden' key={`description-${index}`}>
								{product.description}
							</p>
							<p className='text-base mb-3 lg:hidden' key={`flavor-${index}`}>
								<span className='underline lg:text-xl'>Sabores:</span> {product.flavor}
							</p>
							<p className='text-base lg:hidden' key={`price-${index}`}>
								<span className='underline mt-3 lg:text-xl'>Precio:</span> {this.replaceDot(product.price)}€ (una vez somos socios/as con el descuento base del 25%. Incluye seguimiento personalizado.)
							</p>
						</div>
					))}
				</section>
			);
		} else {
			return <h1 className='w-screen block text-center mt-3  px-3 text-xl font-josefin'>Cargando, espere unos instantes...</h1>;
		}
	}
}

export default Products;
