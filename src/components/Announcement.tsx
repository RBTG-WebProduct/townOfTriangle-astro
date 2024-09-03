const Announcement = ({ visable }: { visable: boolean }) => {
	return (
		<>
			<div
				className={`announcment-container ${
					visable ? "show" : undefined
				}`}
			>
				<h4>Announcements</h4>
					
				
        <a className="announcment" style={{fontWeight:"700"}} href="\assets\notices\Town of Triangle of Notice meeting.pdf" download>
						Notice Of Public Hearing 09/12/24
					</a>
        <a className="announcment" style={{fontWeight:"700"}} href="\assets\notices\NTB Roof.pdf" download>
					Notice To Bidders - Roof Replacement of the Triangle New York Town Hall
					</a>
        <a className="announcment" style={{fontWeight:"700"}} href="\assets\notices\NTB Door Openers.pdf" download>
					Notice To Bidders - AUTOMATIC GARAGE DOOR OPENERS
					</a>
        <a className="announcment" style={{fontWeight:"700"}} href="\assets\notices\Snow and Ice Policy .pdf.pdf" download>
					Snow And Ice Policy
					</a>
			</div>
		</>
	);
};

export default Announcement;
