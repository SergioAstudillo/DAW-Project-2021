import React from 'react';
import { Link } from 'react-router-dom';

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
			<nav className='bg-gray-200 w-screen h-14 relative border-b-2 border-gray-900 border-opacity-100'>
				<div className='w-full h-full flex items-center relative'>
					<img src={'./../../assets/logos/logotipoNavbar.svg'} alt='Logotipo' className='min-h-40 max-h-40 w-1/2 m-4 absolute justify-self-start -left-10'></img>
					{/* 
				 Tamaños: tham-w-4, tham-w-6, tham-w-8, tham-w-12.
				 Colores: You can set a color of hamburger menu by adding class to element with tham-inner class name. For example: bg-indigo-500, bg-green-300, bg-gray-900.
				*/}
					<div className={`tham tham-e-squeeze tham-w-6 absolute justify-self-right right-4 m-2 hover:cursor-pointer ${isActive ? 'tham-active' : ''}`} onClick={this.toggleHamburgerMenu} aria-expanded={isActive ? true : false}>
						<div className='tham-box'>
							<div className='tham-inner' />
							<div className={`origin-top-right absolute right-0 mt-6 w-56 rounded-lg shadow-lg bg-gray-200 opacity-100 bg-opacity-100 ring-1 ring-gray-500 ring-opacity-100 ${isActive ? 'visible' : 'invisible'}`}>
								<div className='py-5'>
									<Link className='block uppercase px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900' to='/'>
										inicio
									</Link>
									<Link className='block uppercase px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900' to='/productos'>
										productos
									</Link>
									<Link className='block uppercase px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900' to='/personas'>
										personas
									</Link>
									<Link className='block uppercase px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900' to='/newsletter'>
										newsletter
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
