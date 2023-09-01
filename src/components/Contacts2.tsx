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
    <div className={`supervisor ${visible ? 'slide' : undefined}`}>
      <h4><ul>Supervisor: Charles Manasse</ul></h4>
      <ul>
        <li>Phone: 607-692-4332 ext 1</li>
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