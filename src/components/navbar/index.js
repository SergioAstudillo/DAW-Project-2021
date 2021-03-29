import React from 'react';

import logoNavbar from './../../assets/img/logotipoNavbar.svg';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
		};
	}

	toggleHamburgerMenu = () => {
		this.setState({ isActive: !this.state.isActive });
	};

	render() {
		const { isActive } = this.state;
		return (
			<nav className='bg-white flex items-center w-full h-14 relative'>
				<img src={logoNavbar} alt='Logotipo' className='w-1/2 m-4'></img>
				{/* 
				 Tamaños: tham-w-4, tham-w-6, tham-w-8, tham-w-12.
				 Colores: You can set a color of hamburger menu by adding class to element with tham-inner class name. For example: bg-indigo-500, bg-green-300, bg-gray-900.
				*/}
				<div className={`tham tham-e-squeeze tham-w-6 left-60 m-2 hover:cursor-pointer ${isActive ? 'tham-active' : ''}`} onClick={this.toggleHamburgerMenu} aria-expanded={`${isActive ? 'true' : 'false'}`}>
					<div className='tham-box'>
						<div className='tham-inner' />
						<div className={`origin-top-right absolute right-0 mt-6 w-56 rounded-md shadow-lg bg-white ring-1 ring-gray-500 ring-opacity-100 focus:outline-none ${isActive ? 'visible' : 'invisible'}`}>
							<div className='py-5'>
								<a className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'>Inicio</a>
								<a className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'>Productos</a>
								<a className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'>Personas</a>
								<a className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'>Newsletter</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;

/* 
			<nav className='bg-white flex justify-start items-center w-full h-14'>
				<img src={logoNavbar} alt='Logotipo' className='w-1/2 m-4'></img>
				<div className={`tham tham-e-squeeze tham-w-6 justify-end m-2 hover:cursor-pointer ${isActive ? 'tham-active' : ''}`} onClick={this.toggleHamburgerMenu}>
					<div className='tham-box'>
						<div className='tham-inner' />
					</div>
				</div>
				<a href='/' className='m-1 font-bold'>
					Inicio
				</a>
				<a href='/productos' className='m-1 font-bold'>
					Productos
				</a>
				<a href='/personas' className='m-1 font-bold'>
					Personas
				</a>
				<a href='/newsletter' className='m-1 font-bold'>
					Newsletter
				</a>
			</nav>
*/
