import { Link } from "react-router-dom";
import FadeInUp from "./components/animation/FadeInUp";
import ArrowRightImg from "/src/assets/images/icon/arrow-right.svg";
import Star2Img from "/src/assets/images/v1/star2.png";

export default function ErrorPage() {
	return (
		<div className="section error-page">
			<div className="container">
				<div className="aximo-errors-wrap">
					<div className="aximo-errors-thumb">
						<div className="error-number">
							<span>4</span>
							<span>0</span>
							<span>4</span>
						</div>
					</div>
					<div className="aximo-errors-title">
						<h2>
							We can't find the page
							<span className="aximo-title-animation">
								you are looking for
							</span>
						</h2>
					</div>
					<FadeInUp>
						<Link className="aximo-errors-btn" to="/">
							Return to homepage
							<span>
								<img src={ArrowRightImg} alt="arrow" />
							</span>
						</Link>
					</FadeInUp>
				</div>
			</div>
			<style>
				{`
					.error-page {
						min-height: 100vh;
						display: flex;
						align-items: center;
						justify-content: center;
						background: #000;
						padding: 2rem 1rem;
					}
					.aximo-errors-wrap {
						text-align: center;
						max-width: 800px;
						margin: 0 auto;
						width: 100%;
					}
					.aximo-errors-thumb {
						margin-bottom: 2rem;
						width: 100%;
					}
					.error-number {
						display: flex;
						justify-content: center;
						align-items: center;
						gap: 1rem;
						margin: 0 auto;
						font-size: 12rem;
						font-weight: bold;
						color: #CCFF00;
						text-shadow: 0 0 20px rgba(204, 255, 0, 0.5);
						font-family: 'Space Grotesk', sans-serif;
					}
					.error-number span {
						display: inline-block;
						line-height: 1;
						animation: float 3s ease-in-out infinite;
					}
					.error-number span:nth-child(2) {
						animation-delay: 0.2s;
					}
					.error-number span:nth-child(3) {
						animation-delay: 0.4s;
					}
					@keyframes float {
						0%, 100% {
							transform: translateY(0);
						}
						50% {
							transform: translateY(-20px);
						}
					}
					.aximo-errors-title h2 {
						font-size: 2.5rem;
						color: #fff;
						margin-bottom: 2rem;
						line-height: 1.3;
					}
					.aximo-title-animation {
						display: block;
						margin-top: 0.5rem;
					}
					.aximo-title-icon {
						margin-left: 0.5rem;
					}
					.aximo-title-icon img {
						width: 24px;
						height: auto;
						vertical-align: middle;
					}
					@media (max-width: 768px) {
						.error-number {
							font-size: 8rem;
							gap: 0.5rem;
						}
						.aximo-errors-title h2 {
							font-size: 2rem;
						}
						.aximo-errors-thumb {
							margin-bottom: 1.5rem;
						}
					}
					@media (max-width: 480px) {
						.error-number {
							font-size: 6rem;
							gap: 0.25rem;
						}
						.aximo-errors-title h2 {
							font-size: 1.5rem;
						}
						.aximo-errors-thumb {
							margin-bottom: 1rem;
						}
						.aximo-title-icon img {
							width: 20px;
						}
					}
				`}
			</style>
		</div>
	);
}
