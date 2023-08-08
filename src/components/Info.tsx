import React from 'react'
import useElementVisibility from '../utils/useElementVisibility';

function Info() {

    const [ref, visible] = useElementVisibility(0.6);

  return (
    <div id='additional' className={`additional-info ${visible ? "show" : undefined}`} ref={ref}>
      <h4><ul>Additional information</ul></h4>
      <p>
        To license a dog: bring or provide via e mail: current certificate of rabies
        Check or credit card payment
      </p>
      <p>
        To get a marriage license: bring certified birth certificate, have social security number, and $40 cash check or credit card
      </p>
      <p>
        FOIL: Freedom of information Law: request the document in writing, be prepared to view or purchase said copy at $ .25 per page
      </p>
    </div>
  )
}

export default Info