const Announcement = ({ visable }: { visable: boolean }) => {
	return (
		<>
			<div
				className={`announcment-container ${visable ? "show" : undefined
					}`}
			>
				<h4>Announcements</h4>
{/* 

				<a className="announcment" style={{ fontWeight: "700" }} href="\assets\notices\Ambulance legal 2024.pdf" download>
					Notice of Public Hearing
					Ambulance Service Contract for 2025
				</a>
				<a className="announcment" style={{ fontWeight: "700" }} href="\assets\notices\LEGAL NOTICE-prelim budget.pdf" download>
					Notice of Public Hearing on the Preliminary Budget of the Town of Triangle for the Year 2025
				</a>
				<a className="announcment" style={{ fontWeight: "700" }} href="\assets\notices\WP FD  legal 2024.pdf" download>
					"Notice of Public Hearing - Town of Triangle Fire District Contract with Whitney Point (Nov 14, 2024)"
				</a>
				<a className="announcment" style={{ fontWeight: "700" }} href="\assets\notices\TFD PH 2024" download>
					"Notice of Public Hearing - Town of Triangle Fire District Contract with Whitney Point TFD (Nov 14, 2024)"
				</a>

				<a className="announcment" style={{ fontWeight: "700" }} href="\assets\notices\Snow and Ice Policy .pdf.pdf" download>
					Snow And Ice Policy
				</a> */}
				<a className="announcment" style={{ fontWeight: "700" }} href="\assets\downloads\Legal-for-BAR.doc" download>
					Legal notice for the Board of Assessment Review (BAR)
				</a>
			</div>
		</>
	);
};

export default Announcement;
