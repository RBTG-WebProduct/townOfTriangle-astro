const Announcement = ({ visable }: { visable: boolean }) => {
	return (
		<>
			<div
				className={`announcment-container ${
					visable ? "show" : undefined
				}`}
			>
				<h4>Announcements</h4>
					<p className="announcment">
					Parking lot paving at 2612 Liberty Street Whitney Point begins July 5
					</p>
				
        <a className="announcment" style={{fontWeight:"700"}} href="\assets\downloads\Warrant-legal.pdf" download>
						LEGAL NOTICE NOTICE OF RECEIPT OF TAX ROLL AND WARRANT
					</a>
			</div>
		</>
	);
};

export default Announcement;
