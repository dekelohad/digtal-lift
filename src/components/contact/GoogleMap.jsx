function GoogleMap() {
	return (
		<div className="section">
			<div className="container">
				<div className="aximo-map-wrap">
					<div id="map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.6795392457584!2d-97.72781492428832!3d30.402730574827387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cc6fea740a37%3A0x865626cd4f15c528!2s11801%20Domain%20Blvd%2C%20Austin%2C%20TX%2078758!5e0!3m2!1sen!2sus!4v1709655144408!5m2!1sen!2sus"
							width="100%"
							height="590"
							style={{ border: 0, borderRadius: "30px" }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GoogleMap;
