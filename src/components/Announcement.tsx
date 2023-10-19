const Announcement = ({ visable }: { visable: boolean }) => {
  return (
    <>
    <div className={`announcment-container ${visable ? "show" : undefined}`}>
      <h4>Announcements</h4>
        <div>
          <p className="announcment">
            The Town of Triangle Town Board has resolved that the following roads or
            portions of the following roads are closed from November 1, 2023 to
            April 30, 2024: Gayhead Road, Rathbun Hill Road, Beeman Hill Road,
            Hinsdale Road, Rogers Hill Road and Fuller Road, Be it further resolved
            that pursuant to Local Law #3-1999, there is no parking on any Town of
            Triangle road from 11:00 PM to 7:00 AM from November 1, 2023 to May 1,
            2024.
          </p>
        </div>
      </div>
    </>
  );
};

export default Announcement;
