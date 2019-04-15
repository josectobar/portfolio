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
          and blood pressure. <br />
          Frontend built with React, Redux was used for most of the data flow
          functionality; Styled with SASS. The backend runs on Nodejs, the
          server is based on ExpressJS and the PostgreSQL database is connected
          through Massive.
          <br />
          Please refer to github repository for more information:
          https://github.com/josectobar/health-journal
        </p>
      </div>
    </div>
  </section>
)

export default BannerDayHealth
