import React from 'react'
import useElementVisibility from '../utils/useElementVisibility';

function Court() {

    const [ref, visible] = useElementVisibility(0.3);

  return (
    <div className='court-contact' ref={ref}>
            <div id='Contact' className={`title ${visible ? 'show-cort' : undefined}`}>
              <h3>Court Contact Information</h3>
              <p>2612 Liberty Street, P O Box 289, Whitney Point, New York 13862 </p>
              <a href='https://trianglecourt.org/'>Town of triangle court website</a>
            </div>
            <div className='info'>
              <div className={`supervisor ${visible ? 'slide' : undefined}`}>
                <div>
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
            </div>
          </div>
  )
}

export default Court