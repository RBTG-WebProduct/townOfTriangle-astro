import React from 'react'
import useElementVisibility from '../utils/useElementVisibility';

function Court() {

    const [ref, visible] = useElementVisibility(0.3);

  return (
    <div className='court-contact' ref={ref}>
            <div id='Contact' className={`title ${visible ? 'show' : undefined}`}>
              <h3>Court Contact Information</h3>
              <p>2612 Liberty Street, P O Box 289, Whitney Point, New York 13862 </p>
            </div>
            <div className='info'>
              <div className={`supervisor ${visible ? 'slide' : undefined}`}>
                <div>
                  <p>Supervisor: Charles Manasse 607-692-4332 ext 1</p>
                  <p>Court : Judge Orzel, Clerk Kalleen Benjamin</p>
                </div>
                <ul>
                <li>Office hours: Monday 11AM-5PM,</li> 
                <li>Tuesday 9AM-2PM, </li>
                <li>Wednesday 11AM-5PM </li>
                <li>Thursday and Friday 9AM-2PM</li>
                <li>Phone # 607-692-4332 ext 7,</li>
                <li> fax # 607-692-4910</li>
                <li>Email: trianglecourt@nycourts.gov</li>
                <li>To enter a plea: <a href='Trianglecourt.org'>Trianglecourt.org</a> (follow instructions)</li>
                </ul>
              </div>
              <div className={`clerk ${visible ? 'slide':undefined}`}>
                <div>
                  <p>Clerk: Sandra Martin Deputy Suzanne Burns</p>
                </div>
                <ul>
                <li>Office hours: Monday 10 AM-5PM, Wednesday 9 AM-5: 30 PM Friday 9 AM-5PM</li>
                <li>Phone: 607-692-4332 ext 0 fax 607-692-3691</li>
                <li>E mail: clerk@townoftriangle.org</li>
                <li>Credit card payments: https://webtownhall.com/triangleny/TownClerk.aspx</li>
                <li>Forms: (FOIL)</li>
                </ul>
              </div>
            </div>
          </div>
  )
}

export default Court