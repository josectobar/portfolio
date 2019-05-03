import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerDayHealth from '../components/BannerDayHealth'

import dashboard from '../assets/images/dashboard.png'
import wizard from '../assets/images/wizard.png'
import stats from '../assets/images/stats.png'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Projects</title>
      <meta name="description" content="Projects Page" />
    </Helmet>

    <BannerDayHealth />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>
              <a href="https://www.dayhealth.space" target="_blank">
                www.dayhealth.space
              </a>
            </h2>
          </header>
          <p>
            Frontend built with <strong>React</strong> , <strong>Redux</strong>{' '}
            was used for most of the data flow functionality; Styled with{' '}
            <strong>SASS</strong>. The backend runs on <strong>NodeJS</strong>,
            the server is based on <strong>ExpressJS</strong> and the{' '}
            <strong>PostgreSQL</strong> database is connected through{' '}
            <strong>Massive</strong>.
            <br />
            {`Please refer to `}
            <a
              href="https://github.com/josectobar/health-journal"
              target="_blank"
              alt="git repository"
            >
              my github repository
            </a>
            {` for information about the source code.`}
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <div className="image">
            <img src={dashboard} alt="dashbobard screenshot" />
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Dashboard</h3>
              </header>
              <p>
                In the dashboard, the logged in user can view existing logs
                under the “previous entries” section on the lower side of the
                page, the previous entries can be viewed, edited and deleted. To
                view an entry, the user can click on the entry title or select
                the "view" option from the drop-down menu on the right. They can
                also read a health-related article by clicking the image or the
                “learn more” button that will open a separate tab to an external
                page.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="image">
            <img src={stats} alt="stats section" />
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Statistics section</h3>
              </header>
              <p>
                A line graph for the pain and overall conditions readings will
                be displayed in the dashboard as long as there is data entered.
                When clicked, the graph will route to the statistics page. Users
                can view graphs and add readings if they click the "add
                indicators" button.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="image">
            <img src={wizard} alt="wizard section" />
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Wizard</h3>
              </header>
              <p>
                On the first step in the wizard, the user is able to add their
                current health condition based on any of the four different
                indicators available: overall health, pain level, glucose level,
                and blood pressure. After clicking next, they are required to
                enter a log before submitting. Throughout the wizard, the user
                is able to cancel and will then be then routed to the dashboard.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Landing
