import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar } from '../../assets/images';
import './Home.scss';
import { Button } from '@material-ui/core';
import { FormModal } from '../../components';

function Home() {
	const [openFormModal, setOpenFormModal] = useState(false);
	const closeFormModal = () => setOpenFormModal(!openFormModal);

	return (
		<div className='home-main' id='homeComp'>
			<div>
				<div className='home-details'>
					<h4>I see you're looking for a</h4>
					<h1>WEB DEVELOPER!</h1>
					<h4>Well, it just so happens ...</h4>
				</div>
				<div>
					<NavLink to='/about'>
						<Button variant='contained' color='primary'>
							About Me
						</Button>
					</NavLink>
					<NavLink to='/projects'>
						<Button variant='contained' color='primary'>
							My Projects
						</Button>
					</NavLink>
				</div>
			</div>
			<div>
				<img src={Avatar} alt='carl' />
			</div>
			{openFormModal && (
				<FormModal
					openFormModal={openFormModal}
					closeFormModal={closeFormModal}
				/>
			)}
		</div>
	);
}

export default Home;
