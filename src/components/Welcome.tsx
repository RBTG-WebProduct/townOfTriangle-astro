import React from 'react'
import useElementVisibility from '../utils/useElementVisibility'

function Welcome() {

    const [ref, visible] = useElementVisibility(0.3);

  return (
    <div className={`welcome`} ref={ref}>
          <h1 id='home'>Welcome To The Town Of Triangle</h1>
          <div className={`content  ${visible ? "show" : undefined}`}>
              <p>Welcome to Triangle, a charming town in Broome County, New York. With its tranquil ambiance, friendly community, and scenic surroundings, Triangle is the perfect getaway for those seeking a peaceful retreat. Explore the village of Whitney Point, immerse yourself in nature along the Tioughnioga River, and experience the warm hospitality that makes Triangle a hidden gem in upstate New York.</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11796.511803270729!2d-75.88019669999998!3d42.339795349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89da57745291f90f%3A0x948e6c51728a91a6!2sTriangle%2C%20NY%2013746!5e0!3m2!1sen!2sus!4v1688142431149!5m2!1sen!2sus"
                width="300"
                height="300"
                style={{ border: "30px grooved brown" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>
        </div>
  )
}

export default Welcome