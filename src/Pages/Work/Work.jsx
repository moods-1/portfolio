import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { PROJECTS } from '../../helpers/constants';
import { Mixpanel } from '../../components/Mixpanel';
import './Work.scss';

function Work() {
	Mixpanel.track('Work page accessed', { action: 'Work page accessed.' });
	return (
		<div className='work-main' id='workComp'>
			<h1>Construction Zone</h1>
			<div className='work-main-details'>
				{PROJECTS.map(({ id, title, img, description, url }) => (
					<Card className='work-card' key={id}>
						<CardContent>
							<CardMedia>
								<a href={url} target='_blank' rel='noreferrer'>
									<img src={img} alt={title} />
								</a>
							</CardMedia>
							<Typography variant='h6'>{title}</Typography>
							<Typography variant='body2'>{description}</Typography>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}

export default Work;
