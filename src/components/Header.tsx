import React, {useState} from 'react'



function Header() {

    const [navOpen, setNavOpen] = useState(false);
    console.log("testing")

  return (
    <>
        
        <div className='top'>
            <img src={"/assets/tot.jpg"} alt='Town of triangle logo'/>
            <div className='svg-container' onClick={() => setNavOpen(prev => !prev)}>
                <svg viewBox="0 0 100 80" width="40" height="40" id="svg-container">
                  <rect className={`rect-1 ${navOpen ? "x" : undefined} `} width="100" height="10" stroke='black'></rect>
                  <rect className={`rect-2 ${navOpen ? "x" : undefined} `} y="30" width="100" height="10" stroke='black'></rect>
                  <rect className={`rect-3 ${navOpen ? "x" : undefined} `} y="60" width="100" height="10" stroke='black'></rect>
                </svg>
            </div>
        </div>
        <nav>
          <a onClick={() => setNavOpen(false)} href='/#home'>Home</a>
          <a onClick={() => setNavOpen(false)} href='/#Town-Meetings'>Town Meetings</a>
          <a onClick={() => setNavOpen(false)} href='/#Contact'>Contact Information</a>
          <a onClick={() => setNavOpen(false)} href='/#additional'>Additional Information</a>
          <a onClick={() => setNavOpen(false)} href='/download'>Download Forms</a>
        </nav>
        <div className='hero'>
          {/* <img src='/assets/nature.jpg'/> */}
        </div>
        <div className={`mobileNav ${navOpen ? 'activated' : undefined}`}>
          <a onClick={() => setNavOpen(false)} href='/#home'>Home</a>
          <a onClick={() => setNavOpen(false)} href='/#Town-Meetings'>Town Meetings</a>
          <a onClick={() => setNavOpen(false)} href='/#Contact'>Contact Information</a>
          <a onClick={() => setNavOpen(false)} href='/#additional'>Additional Information</a>
          <a onClick={() => setNavOpen(false)} href='/download'>Download Forms</a>
        </div>
    </>
  )
}

export default Header