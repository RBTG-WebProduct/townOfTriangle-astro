import React from 'react'
import useElementVisibility from '../utils/useElementVisibility';

function Schedule() {

    const [ref, visible] = useElementVisibility(0.3);
    
  return (
    <div id='Town-Meetings' className='schedule-container'ref={ref}>
      <div className={`schedule ${visible ? 'slide' : undefined}`}>
        <h3>
          Schedule of Town of Triangle Board Meetings for 2023
        </h3>
        <aside>
          <p>7 PM at the Town of Triangle Offices</p>
          <p>2612 Liberty Street Whitney Point</p>
        </aside>
        <ul>
        <li>January 12</li>
        <li>February 9</li>
        <li>March 9</li>
        <li>April 13</li>
        <li>May 11</li>
        <li>June 8</li>
        <li>July 13</li>
        <a href='/assets/meetingMinutes/aug2023.pdf' download><li>August 10</li></a>
        <a href='/assets/meetingMinutes/sep2023rd.pdf' download><li>September 14</li></a>
        <a href='/assets/meetingMinutes/october-23-tot.pdf' download><li>October 12</li></a>
        <a href='/assets/meetingMinutes/11.9.23.pdf' download><li>November 9</li></a>
        <a  href='/assets/meetingMinutes/december-23.pdf' download><li>December 14</li></a>
        </ul>
        <p style={{marginTop:"2em"}}>Click a date to download meeting minutes.</p>
      </div>
      <div className={`schedule ${visible ? 'slide' : undefined}`}>
        <h3>
          Schedule of Town of Triangle Board Meetings for 2024
        </h3>
        <aside>
          <p>7 PM at the Town of Triangle Offices</p>
          <p>2612 Liberty Street Whitney Point</p>
        </aside>
        <ul>
        <a href='/assets/meetingMinutes/jan-24.pdf' download><li>January 11</li></a>
        <a href='/assets/meetingMinutes/02.08.2024.pdf' download><li>February 8</li></a>
        <a href='/assets/meetingMinutes/03.14.2024.pdf' download><li>March 14</li></a>
        <a href='/assets/meetingMinutes/4.11.2024.pdf' download><li>April 11</li></a>
        <a href='/assets/meetingMinutes/5.9.2024.pdf' download><li>May 9</li></a>
        <a href='/assets/meetingMinutes/6.13.2024.pdf' download><li>June 13</li></a>
        <a href='/assets/meetingMinutes/7.11.2024.pdf' download><li>July 11</li></a>
        <li>August 8</li>
        <li>September 12</li>
        <li>October 10</li>
        <li>November 14</li>
        <li>December 12</li>
        </ul>
        <p style={{marginTop:"2em"}}>Click a date to download meeting minutes.</p>
      </div>
      <div className={`schedule ${visible ? 'slide' : undefined}`}>
        <h3>
          Schedule of Town of Triangle Board Meetings for 2025
        </h3>
        <aside>
          <p>7 PM at the Town of Triangle Offices</p>
          <p>2612 Liberty Street Whitney Point</p>
        </aside>
        <ul>
        <li>January 9</li>
        <li>February 13</li>
        <li>March 13</li>
        <li>April 10</li>
        <li>May 8</li>
        <li>June 12</li>
        <li>July 10</li>
        <li>August 14</li>
        <li>September 11</li>
        <li>October 9</li>
        <li>November 13</li>
        <li>December 11</li>
        </ul>
        <p style={{marginTop:"2em"}}>Click a date to download meeting minutes.</p>
      </div>
      {/* <div className={`links ${visible ? 'slide' : undefined}`}>
        <a href='/'>See Last Meetings Minutes</a>
        <a href='/'>See Town Budget 2023</a>
        <a href='/'>See All Meeting Minutes</a>
      </div> */}
    </div>
  )
}

export default Schedule