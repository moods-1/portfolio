import React from 'react';
import './About.scss';
import { SKILLS, ABOUT_DETAILS } from '../../helpers/constants';

function About() {
	return (
		<div className='about-main' id='aboutComp'>
			<h1>&#60;About &#47;&#62;</h1>
			<div className='about-main-content'>
				<div className='about-me'>
					<p>
						<span className='about-me-export'>export</span>&nbsp;
						<span className='about-me-variable'>const about</span>
						&nbsp;=&nbsp;&#123;
					</p>
					{Object.entries(ABOUT_DETAILS).map(([key, value]) => (
						<p className='about-item' key={key}>
							<span>{key}:</span>
							<span className='about-me-value'>{value} </span>,
						</p>
					))}
					<p>&#125;;</p>
					<br />
					<p>
						<span className='about-me-export'>export</span>&nbsp;
						<span className='about-me-variable'>const message</span> = "I have a
						desire to learn new ways to bring the imagined to reality with clean
						and efficient code." ;
					</p>
					<br />
					<p>
						<span className='about-me-export'>import</span>&nbsp;
						<a
							href='https://drive.google.com/file/d/1FMweVOQXkXZz1nYsNLvtqCW3XjGoBvT7/view?usp=sharing'
							rel='noopener noreferrer'
							target='_blank'
						>
							CV / Resume
						</a>
					</p>
				</div>
			</div>
			<p className='hover-message'>~ Hover to reveal skill level ~</p>
			<div className='skills-images-div'>
				{SKILLS.map(({ img, skill, color, level }, index) => (
					<div key={index} className='skills-div'>
						<div className='skills-image-div' style={{ background: color }}>
							<img src={img} alt={`skill-${index}`} />
						</div>
						<div className='skills-skill'>
							<p>{skill}</p>
							<div className='skill-level'>
								<div
									className='skill-progress'
									style={{ background: color, width: level }}
								>
									<p className='skill-percentage'>{level}</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default About;
