import React from 'react'
import useElementVisibility from '../utils/useElementVisibility'
import "../styles/Downloads.scss"


function Downloads() {

    const [ref, visible] = useElementVisibility(0.3);

  return (
    <>
        <main ref={ref}>
            <h2>Select Your file For Download</h2>
            <div className={`download-links ${visible ? 'show' : undefined}`}>
                <a href='/assets/FOIL.pdf' download>
                    <div>
                        <img src='/assets/flag.jpg' alt='flag'/>
                        <p>Freedom Of Infomation Request</p>
                    </div>
                </a>
                <a href='/assets/permit.pdf' download>
                    <div>
                        <img src='/assets/building.png'/>
                        <p>Building Permit Application</p>
                    </div>
                </a>
                <a href='/assets/Meeting.odt' download>
                    <div>
                        <img src='/assets/clock.png' alt='clock'/>
                        <p>Board Meeting Times</p>
                    </div>
                </a> 
            </div>
        </main>
    </>
  )
}


export default Downloads