import ArrowRight3Img from "../../../assets/images/icon/arrow-right3.svg";
import { useForm } from "react-hook-form";
import Field from "../../common/Field";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function MessageForm() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const submitForm = (formData) => {
		console.log("Submit Form Data = ", formData);
		setIsSubmitted(true);
	};

	if (isSubmitted) {
		return (
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				style={{
					textAlign: "center",
					padding: "40px 20px",
					background: "rgba(255, 255, 255, 0.03)",
					borderRadius: "15px",
					border: "1px solid rgba(187, 255, 0, 0.1)"
				}}
			>
				<h3 style={{
					color: "#BBFF00",
					fontSize: "24px",
					marginBottom: "15px"
				}}>
					Thank You for Reaching Out!
				</h3>
				<p style={{
					color: "#e0e0e0",
					fontSize: "16px",
					lineHeight: "1.6",
					marginBottom: "0"
				}}>
					We've received your message and will contact you shortly to discuss how we can help transform your digital presence.
				</p>
			</motion.div>
		);
	}

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<div className="aximo-form-field">
				<Field error={errors.name}>
					<input
						{...register("name", { required: "Name is required." })}
						type="text"
						name="name"
						id="name"
						placeholder="Your Name"
					/>
				</Field>
			</div>
			<div className="aximo-form-field">
				<Field error={errors.email}>
					<input
						{...register("email", { 
							required: "Email is required.",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Invalid email address"
							}
						})}
						type="email"
						name="email"
						id="email"
						placeholder="Your email address"
					/>
				</Field>
			</div>
			<div className="aximo-form-field">
				<div style={{ 
					fontSize: "14px", 
					color: "#666",
					marginBottom: "5px" 
				}}>
					(Optional)
				</div>
				<input 
					{...register("phone")}
					type="text" 
					placeholder="+088-234-6849" 
				/>
			</div>
			<div className="aximo-form-field">
				<Field error={errors.message}>
					<textarea 
						{...register("message", { required: "Message is required." })}
						name="message" 
						placeholder="Write your message here..."
					></textarea>
				</Field>
			</div>
			<button id="aximo-submit-btn" type="submit">
				Send message{" "}
				<span>
					<img src={ArrowRight3Img} alt="ArrowRight3Img" />
				</span>
			</button>
		</form>
	);
}

export default MessageForm;
