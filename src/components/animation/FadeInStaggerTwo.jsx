import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		
		checkMobile();
		window.addEventListener('resize', checkMobile);
		
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	return isMobile;
}

const getAnimationVariants = (isMobile) => ({
	initial: {
		opacity: isMobile ? 1 : 0,
		y: isMobile ? 0 : 50,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: isMobile ? 0 : 0.2,
			duration: isMobile ? 0 : 0.7,
		},
	},
});

function FadeInStaggerTwo({ children, className = "", id = "" }) {
	const isMobile = useIsMobile();
	const animationVariants = getAnimationVariants(isMobile);

	return (
		<motion.div
			variants={animationVariants}
			initial="initial"
			whileInView="animate"
			// viewport={{ once: true }}
			className={className}
			id={id}
		>
			{children}
		</motion.div>
	);
}

function FadeInStaggerTwoChildren({ children, className = "", id = "" }) {
	const isMobile = useIsMobile();
	const animationVariants = getAnimationVariants(isMobile);

	return (
		<motion.div className={className} id={id} variants={animationVariants}>
			{children}
		</motion.div>
	);
}

export { FadeInStaggerTwo, FadeInStaggerTwoChildren };
