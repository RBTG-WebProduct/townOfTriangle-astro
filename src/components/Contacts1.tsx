import React from 'react'
import useElementVisibility from '../utils/useElementVisibility'



function Contacts1() {

    const [ref, visible] = useElementVisibility(0.3)
    
  return (
    <div className='section-4'ref={ref}>
              <div className={`building ${visible ? 'slide': undefined}`}>
                <h4><ul>Building Inspector: Mark See II</ul></h4>
                <ul>
                  <li>By appointment only</li>
                  <li>Cell phone: 607-422-6011</li>
                  <li><a href="mailto:Buildinginspector@townoftriangle.org">Buildinginspector@townoftriangle.org</a></li>
                  <li>Forms: (building permit application)</li>
                  <li>Credit card payments: <a href='https://webtownhall.com/triangleny/TownClerk.aspx'>https://webtownhall.com/triangleny/TownClerk.aspx</a></li>
                </ul>
              </div>
              <div className={`tax ${visible ? 'slide': undefined}`}>
                <h4><ul>Tax Collector: Sandra Martin Deputy Suzanne Burns</ul> <br/>January 1 - March 31</h4>
                <ul>
                  <li>phone :607-692-4332 ext 0</li>
                  <li>fax: 607-692-3691</li>
                  <li><a href="mailto:clerk@townoftriangle.org">clerk@townoftriangle.org</a></li>
                  <li>Credit card payments :<a href=' https://webtownhall.com/triangleny/TaxCollector.asp'>https://webtownhall.com/triangleny/TaxCollector.asp</a></li>
                </ul>
              </div>
            </div>
  )
}

export default Contacts1