import React from 'react'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <footer>
        <div className='logo-contianer'>
        <img src={"/assets/tot.jpg"} alt='Town of triangle logo'/>
        <p>2612 Liberty Street Whitney Point </p>
        <p>phone : ###-####-###</p>
        </div>
        <div className='map-container'>
        <div className='icon'>
            <FontAwesomeIcon icon={faFacebook} size='4x'/>
        </div>
        <div className='icon'>
          <FontAwesomeIcon icon={faInstagram} size='4x'/>
        </div>
        <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11796.511803270729!2d-75.88019669999998!3d42.339795349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89da57745291f90f%3A0x948e6c51728a91a6!2sTriangle%2C%20NY%2013746!5e0!3m2!1sen!2sus!4v1688142431149!5m2!1sen!2sus"
                width="200"
                height="200"
                style={{ border: "30px grooved brown" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title='town of triangle'
              ></iframe>
        </div>
    </footer>
  )
}

export default Footer