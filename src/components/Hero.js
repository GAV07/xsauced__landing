import React from 'react'
import Drip from './Drip'
import Typeform from './Typeform'
import logo from "../images/logo.png"

const Hero = () => {
    return (
        <section className="hero">
        <div className="hero__copy">
          <img src={logo} />
          <h1 className="hero__copy__title">We were <br /> expecting you</h1>
          <p className="hero__copy__text">Xsauced is a member-to-member sneaker rental service. We allow you to make money from shoes sitting in your closet by renting them out for photoshoots, videos, weddings or for people to try sneakers before they buy them.</p>
          <Drip />
          <div className="hero__copy__btn">
              <span>
                  <Typeform />
              </span>
          </div>
        </div>
      </section>
    )
}

export default Hero