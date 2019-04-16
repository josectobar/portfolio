import React from 'react'
import dayhealth from '../assets/images/dayhealth.jpg'

const BannerDayHealth = props => (
  <section
    id="banner"
    className="style1"
    style={{ backgroundImage: `url(${dayhealth})` }}
  >
    <div className="inner">
      <header className="major">
        <h1>Day - Personal health journal</h1>
      </header>
      <div className="content">
        <p>
          A full-stack health journal web application created to serve as a tool
          for users with chronic illnesses. The app allows users to create logs,
          and record readings for their overall condition, pain level, glucose,
          and blood pressure.
        </p>
      </div>
    </div>
  </section>
)

export default BannerDayHealth
