import React, {useState, useEffect} from 'react'



function Header() {

    const [navOpen, setNavOpen] = useState(false);
    console.log("testing")

    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
        
        <div className='top'>
            <img id='header-tot' src={"/assets/new-tot.png"} alt='Town of triangle logo'/>
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
          <a onClick={() => setNavOpen(false)} href='/download/'>Download Forms</a>
        </nav>
        <div className='hero' style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
          {/* <img src='/assets/nature.jpg'/> */}
        </div>
        <div className={`mobileNav ${navOpen ? 'activated' : undefined}`}>
          <a onClick={() => setNavOpen(false)} href='/#home'>Home</a>
          <a onClick={() => setNavOpen(false)} href='/#Town-Meetings'>Town Meetings</a>
          <a onClick={() => setNavOpen(false)} href='/#Contact'>Contact Information</a>
          <a onClick={() => setNavOpen(false)} href='/#additional'>Additional Information</a>
          <a onClick={() => setNavOpen(false)} href='/download/'>Download Forms</a>
        </div>
    </>
  )
}

export default Header