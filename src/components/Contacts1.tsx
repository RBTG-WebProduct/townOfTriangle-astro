import React from "react";
import useElementVisibility from "../utils/useElementVisibility";

function Contacts1() {
  const [ref, visible] = useElementVisibility(0.3);

  return (
    <div className="section-4" ref={ref}>
      <h4>
        <ul>General Contact info</ul>
      </h4>
      <div className="info-container">
        <div className={`clerk ${visible ? "slide" : undefined}`}>
          <div>
            <h4>Clerk: Sandra Martin Deputy Suzanne Burns</h4>
          </div>
          <ul>
            <li>
              Office hours: Monday 10 AM-5PM, Wednesday 9 AM-5: 30 PM Friday 9
              AM-5PM
            </li>
            <li>Phone: 607-692-4332 ext 0 fax 607-692-3691</li>
            <li>E mail: clerk@townoftriangle.org</li>
            <li>
              Credit card payments:
              <a href="https://webtownhall.com/triangleny/TownClerk.aspx">
                https://webtownhall.com/triangleny/TownClerk.aspx
              </a>
            </li>
            <li>Forms: (FOIL)</li>
          </ul>
        </div>
        <div className={`building ${visible ? "slide" : undefined}`}>
          <h4>
            <ul>Building Inspector /Code Enforcement Officer : Juliette Sinclair</ul>
          </h4>
          <ul>
            <li>By appointment only</li>
            <li>Cell phone: 607-422-6011</li>
            <li>
              <a href="mailto:trianglebuildinginspector@gmail.com">
                trianglebuildinginspector@gmail.com
              </a>
            </li>
            <li>Forms: (<a href='/assets/permit.pdf' download>building permit application</a>)</li>
            <li>
              Credit card payments:{" "}
              <a href="https://webtownhall.com/triangleny/TownClerk.aspx">
                https://webtownhall.com/triangleny/TownClerk.aspx
              </a>
            </li>
          </ul>
        </div>
        <div className={`tax ${visible ? "slide" : undefined}`}>
          <h4>
            <ul>Tax Collector: Sandra Martin Deputy Suzanne Burns</ul> <br />
            January 1 - March 31
          </h4>
          <ul>
            <li>phone :607-692-4332 ext 0</li>
            <li>fax: 607-692-3691</li>
            <li>
              <a href="mailto:clerk@townoftriangle.org">
                clerk@townoftriangle.org
              </a>
            </li>
            <li>
              Credit card payments :
              <a href=" https://webtownhall.com/triangleny/TaxCollector.aspx">
                https://webtownhall.com/triangleny/TaxCollector.aspx
              </a>
            </li>
          </ul>
        </div>
        <div className={`Highway ${visible ? "slide" : undefined}`}>
          <h4>
            <ul>Highway Department: 5470 State Route 26</ul>
          </h4>
          <h4>
            <ul>Highway Superintendent / Highway Supervisor : Daniel S McGowan</ul>
          </h4>
          <ul>
            <li>phone : 607-692-3270</li>
            <li>fax : 607-692-3691</li>
            <li>
              E mail:{" "}
              <a href="mailto:highway@townoftriangle.org">
                highway@townoftriangle.org
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contacts1;
