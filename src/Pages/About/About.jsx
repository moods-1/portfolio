import React from 'react';
import './About.scss';
import { SKILLS } from '../../helpers/constants';

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
					<p>
						&nbsp;&nbsp;&nbsp;firstName:&nbsp;
						<span className='about-me-value'>"Carl"</span>;
					</p>
					<p>
						&nbsp;&nbsp;&nbsp;lastName:&nbsp;
						<span className='about-me-value'>"Moodie"</span>;
					</p>
					<p>
						&nbsp;&nbsp;&nbsp;img:&nbsp;
						<span className='about-me-value'>"/images/carl.png"</span>;
					</p>
					<p>
						&nbsp;&nbsp;&nbsp;profession:&nbsp;
						<span className='about-me-value'>"developer"</span>;
					</p>
					<p>
						&nbsp;&nbsp;&nbsp;favoriteStack:&nbsp;
						<span className='about-me-value'>"MERN"</span>;
					</p>
					<p>
						&nbsp;&nbsp;&nbsp;willingToLearn:&nbsp;
						<span className='about-me-value'>true</span>;
					</p>
					<p>&#125;;</p>
					<br />
					<p>
						<span className='about-me-export'>export</span>&nbsp;
						<span className='about-me-variable'>const message</span> = "I have a
						desire to learn new ways to bring the imagined to reality with clean
						and efficient code.";
					</p>
				</div>
			</div>
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
