import React from 'react'
import gamehub from '../assets/images/gamehub.png'

const BannerDayHealth = props => (
  <section
    id="banner"
    className="style2"
    style={{ backgroundImage: `url(${gamehub})` }}
  >
    <div className="inner">
      <header className="major">
        <h1>GameHub - A Gamers' Social Media Platform</h1>
      </header>
      <div className="content" />
    </div>
  </section>
)

export default BannerDayHealth
