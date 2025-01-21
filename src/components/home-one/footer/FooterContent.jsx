import { useState, useEffect } from 'react';
import './footer-content.css';

function FooterContent() {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 480);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className="aximo-default-content light position-relative">
			<h2>
				<div className="text-rows-container">
					<div className="text-row first">Transform Your</div>
					<div className="text-row second">Vision Into</div>
					<div className="text-row third">Digital Reality</div>
				</div>
			</h2>
			<p>
				Ready to dominate your market? We turn ambitious goals into extraordinary results. Our expert team combines 
				cutting-edge technology with creative innovation to deliver solutions that exceed expectations. Your success story 
				starts with a conversation.
			</p>
			<div className="aximo-info-wrap">
				<div className="aximo-info">
					<ul>
						<li>Send us an email:</li>
						<li>
							<a href="mailto:info@digitalLift.com" target="_blank" rel="noopener noreferrer">info@digitalLift.com</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default FooterContent;
