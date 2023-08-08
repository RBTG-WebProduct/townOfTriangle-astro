import React from 'react'
import useElementVisibility from '../utils/useElementVisibility'

function Contacts2() {

    const [ref, visible] = useElementVisibility(0.6)

  return (
    <div className='section-5' ref={ref}>
              
    <div className={`Assessor ${visible ? 'slide' : undefined}`}>
      <h4><ul>Assessor: Ronald Keibel</ul></h4>
      <ul>
        <li>Wednesday 4PM-6PM</li>
        <li>Phone 607-692-4332 Ext 2</li>
        <li>E Mail: <a href="mailto:assessor@townoftriangle.org"></a>assessor@townoftriangle.org</li>
      </ul>
    </div>
    <div className={`Highway ${visible ? 'slide' : undefined}`}>
      <h4><ul>Highway Department: 5470 State Route 26</ul></h4>
      <ul>
        <li>phone : 607-692-3270</li>
        <li>fax : 607-692-3691</li>
        <li>E mail: <a href='mailto:trianglehighwaydept@frontier.com'>trianglehighwaydept@frontier.com</a></li>
      </ul>
    </div>
    <div className={`dog-patrol ${visible ? 'slide' : undefined}`}>
      <h4><ul>Dog Control: Tammy Hamlin</ul></h4>
      <ul>
        <li>phone: 607-692-4332 ext 3</li>
      </ul>
    </div>
</div>
  )
}

export default Contacts2