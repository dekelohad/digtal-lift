import { useForm } from "react-hook-form";
import Field from "../common/Field";

function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		console.log("Submite Form Data = ", formData);
	};
	return (
		<div className="section" style={{ 
			padding: "60px 0",
			background: "var(--dark-bg)",
			marginTop: "20px"
		}}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 col-md-10 col-11">
						<div className="aximo-main-form" style={{
							background: "rgba(255, 255, 255, 0.05)",
							padding: "clamp(20px, 4vw, 40px)",
							borderRadius: "15px",
							backdropFilter: "blur(10px)"
						}}>
							<h2 style={{ 
								textAlign: "center",
								marginBottom: "30px",
								color: "#fff",
								fontSize: "clamp(24px, 4vw, 32px)"
							}}>Send Us a Message</h2>
							<form onSubmit={handleSubmit(submitForm)}>
								<div className="aximo-main-field" style={{ marginBottom: "20px" }}>
									<Field label="Your Name" error={errors.name}>
										<input
											{...register("name", { required: "Name is required." })}
											type="name"
											name="name"
											id="name"
											style={{
												padding: "12px 15px",
												fontSize: "16px",
												borderRadius: "8px",
												width: "100%",
												background: "rgba(255, 255, 255, 0.1)",
												border: "1px solid rgba(255, 255, 255, 0.2)",
												color: "#fff"
											}}
											placeholder="Enter your name"
										/>
									</Field>
								</div>
								<div className="aximo-main-field" style={{ marginBottom: "20px" }}>
									<Field label="Email Address" error={errors.email}>
										<input
											{...register("email", { required: "Email is required." })}
											type="email"
											name="email"
											id="email"
											style={{
												padding: "12px 15px",
												fontSize: "16px",
												borderRadius: "8px",
												width: "100%",
												background: "rgba(255, 255, 255, 0.1)",
												border: "1px solid rgba(255, 255, 255, 0.2)",
												color: "#fff"
											}}
											placeholder="Enter your email"
										/>
									</Field>
								</div>
								<div className="aximo-main-field" style={{ marginBottom: "20px" }}>
									<Field label="Phone Number" error={errors.phone}>
										<input
											{...register("phone", { required: "Phone is required." })}
											type="tel"
											name="phone"
											id="phone"
											style={{
												padding: "12px 15px",
												fontSize: "16px",
												borderRadius: "8px",
												width: "100%",
												background: "rgba(255, 255, 255, 0.1)",
												border: "1px solid rgba(255, 255, 255, 0.2)",
												color: "#fff"
											}}
											placeholder="Enter your phone number"
										/>
									</Field>
								</div>
								<div className="aximo-main-field" style={{ marginBottom: "30px" }}>
									<label style={{ 
										display: "block", 
										marginBottom: "10px",
										color: "#fff",
										fontSize: "16px"
									}}>Message</label>
									<textarea 
										name="textarea"
										style={{
											padding: "12px 15px",
											fontSize: "16px",
											borderRadius: "8px",
											width: "100%",
											background: "rgba(255, 255, 255, 0.1)",
											border: "1px solid rgba(255, 255, 255, 0.2)",
											color: "#fff",
											minHeight: "120px",
											resize: "vertical"
										}}
										placeholder="Write your message here..."
									></textarea>
								</div>
								<button 
									type="submit"
									style={{
										width: "100%",
										padding: "15px",
										fontSize: "16px",
										fontWeight: "600",
										borderRadius: "8px",
										background: "#BBFF00",
										border: "none",
										color: "#000",
										cursor: "pointer",
										transition: "all 0.3s ease",
										textAlign: "center"
									}}
									onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
									onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
