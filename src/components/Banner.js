import React from 'react'
import projects from '../assets/images/banner.jpg'

const Banner = props => (
  <section
    style={{ backgroundImage: `url(${projects})` }}
    id="banner"
    className="major"
  >
    <div className="inner">
      <header className="major">
        <h1>
          JOSE TOBAR <br />
          Full Stack Web Developer
        </h1>
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/josectobar"
                className="icon alt fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/josectobar"
                className="icon alt fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/josectobar/"
                className="icon alt fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div className="content">
        <p>
          Creative and motived individual, passionate about the latest
          <br />
          web development trends to create awesome web applications.
        </p>
        {/* <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              Learn more
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  </section>
)

export default Banner
