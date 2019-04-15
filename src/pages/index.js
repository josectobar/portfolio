import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import projects from '../assets/images/projects.jpg'
import js from '../assets/images/js.png'
import postgresql from '../assets/images/postgresql.png'
import nodejs from '../assets/images/nodejs.png'
import vue from '../assets/images/vue.png'
import react from '../assets/images/react.png'
import redux from '../assets/images/redux.png'
import html5 from '../assets/images/html5.png'
import css3 from '../assets/images/css3.png'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Jose Tobar - Web Developer"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Banner />
        <div id="main">
          <div className="inner">
            <header className="major">
              <h2 id="projects">Projects</h2>
              <p>
                These are the main projects that I've worked on as a Web
                Developer. Please click the images for more information.
              </p>
            </header>
          </div>
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${projects})` }}>
              <header className="major">
                <h3>Day Health</h3>
                <p>A personal health journal.</p>
              </header>
              <Link to="/dayhealth" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${projects})` }}>
              <header className="major">
                <h3>Day Health</h3>
                <p>A personal health journal.</p>
              </header>
              <Link to="/dayhealth" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${projects})` }}>
              <header className="major">
                <h3>Day Health</h3>
                <p>A personal health journal.</p>
              </header>
              <Link to="/dayhealth" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${projects})` }}>
              <header className="major">
                <h3>Day Health</h3>
                <p>A personal health journal.</p>
              </header>
              <Link to="/dayhealth" className="link primary" />
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2 id="skills">Skills</h2>
              </header>
              <div className="skills">
                <div className="logo-container">
                  <span className="image logo">
                    <img src={js} alt="JS" />
                  </span>
                  <h3>Javascript</h3>
                </div>
                <div className="logo-container">
                  <span className="image logo">
                    <img src={nodejs} alt="NodeJS" />
                  </span>
                  <h3>NodeJS</h3>
                </div>
                <div className="logo-container">
                  <span className="image logo">
                    <img src={vue} alt="vue" />
                  </span>
                  <h3>Vue</h3>
                </div>
                <div className="logo-container">
                  <span className="image logo">
                    <img src={react} alt="react" />
                  </span>
                  <h3>React</h3>
                </div>
                <div className="logo-container">
                  <span className="image logo">
                    <img src={redux} alt="redux" />
                  </span>
                  <h3>Redux</h3>
                </div>
                <div className="logo-container">
                  <span className="image logo">
                    <img src={postgresql} alt="postgresql" />
                  </span>
                  <h3>PostgreSql</h3>
                </div>
                <div className="logo-container">
                  <span className="image logo">
                    <img src={html5} alt="html5" />
                  </span>
                  <h3>HTML5</h3>
                </div>
                <div className="logo-container">
                  <span className="image logo">
                    <img src={css3} alt="css3" />
                  </span>
                  <h3>CSS3</h3>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
