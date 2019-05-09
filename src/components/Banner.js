import React from 'react'
import projects from '../assets/images/banner.jpg'
import joseTobarResume from '../assets/files/jose-tobar-resume-19.pdf'

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
          Creative and motived individual, passionate about the{' '}
          <a href="/#skills">latest frameworks and libraries</a> to create
          awesome web applications.
        </p>
        <ul className="actions">
          <li>
            <a href={joseTobarResume} className="button next scrolly" download>
              Download resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
