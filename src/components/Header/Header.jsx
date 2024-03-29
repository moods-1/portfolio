import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Header.scss';
import { LINKS, PATHS } from '../../helpers/constants';
import { Menu } from '@material-ui/icons';

function Header({ props }) {
	const [currentTab, setCurrentTab] = useState('');
	const [selectedTab, setSelectedTab] = useState(0);
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const history = useHistory();

	const handleTree = useCallback((index) => {
		const { title, ext, img } = LINKS[index];
		setCurrentTab(
			<span>
				<img src={img} alt='title' /> {`${title}${ext}`}
			</span>
		);
	}, []);

	const handleLink = (index, mobile) => {
		(index || index === 0) && handleTree(index);
		setSelectedTab(index);
		mobile && setShowMobileMenu(false);
	};

	useEffect(() => {
		const handleLoad = (path) => {
			if (path in PATHS) {
				let idx = PATHS[path];
				handleTree(idx);
				setSelectedTab(idx);
			}
		};
		if (history?.location?.pathname) {
			let path = history.location.pathname;
			handleLoad(path);
		}
		return history.listen((location) => {
			let path = location.pathname;
			handleLoad(path);
		});
	}, [history, handleTree]);

	return (
		<div className='header-main'>
			<div className='header-tabs-div'>
				<div className='header-nav'>
					{LINKS.map(({ title, ext, img }, index) => (
						<NavLink
							to={`/${title.toLowerCase()}`}
							key={index}
							onClick={() => handleLink(index, false, title)}
							className={selectedTab === index ? 'header-active-tab' : ''}
						>
							<img src={img} alt='title' /> {`${title}${ext}`}
						</NavLink>
					))}
				</div>
			</div>
			<div className='header-burger'>
				<Menu onClick={() => setShowMobileMenu(!showMobileMenu)} />
				{showMobileMenu && (
					<div className='header-nav-mobile slide'>
						{LINKS.map(({ title }, index) => (
							<NavLink
								to={`/${title.toLowerCase()}`}
								key={index}
								onClick={(e) => handleLink(index, true)}
							>
								{title}
							</NavLink>
						))}
						<h3 onClick={() => setShowMobileMenu(!showMobileMenu)}>X</h3>
					</div>
				)}
			</div>
			<div className='header-tree'>
				<p>src &#62; components &#62; {currentTab}</p>
			</div>
		</div>
	);
}

export default Header;
