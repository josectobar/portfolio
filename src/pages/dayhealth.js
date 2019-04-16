import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerDayHealth from '../components/BannerDayHealth'

import dashboard from '../assets/images/dashboard.png'
import wizard from '../assets/images/wizard.png'
import stats from '../assets/images/stats.png'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

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
            <strong>SASS</strong>. The backend runs on <strong>Nodejs</strong>,
            the server is based on <strong>ExpressJS</strong> and the{' '}
            <strong>PostgreSQL</strong>
            database is connected through <strong>Massive</strong>.
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
                - In the dashboard, the logged in user is able to see logs that
                they have previously entered. This is show under the “previous
                entries” section on the lower side, users are able to view, edit
                and delete previous entries. To view an entry, the user can
                click on the entry title or select the view option from the drop
                down menu on the right of the desired entry, this three for menu
                contains three options: edit, view and delete. They can also
                read a recent health-related article and either click the image
                or the “learn more” button to be taken to the external page
                where the article is originated from.
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
                In the dashboard there is also a stats section. If the user has
                entered any of the four indicators from the wizard, the will be
                able to see a line graph with average info displayed. The line
                graph in the dashboard is only for overall condition and pain
                level. If the user clicks the graph, they will be routed into
                the stats section, in here they can see the same graph from the
                dashboard and two additional graphs for glucose and blood
                pressure, these graphs will show information as long as the user
                has previously provided it. Users can also enter the indicators
                if they click the add indicators button, they are able to add
                any of the four indicators listed in the wizard and select the
                desired date from the date picker.
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
                On the first step in the wizard, the user is able to record
                their condition for today or a different day if they change the
                date in the date-picker selector. There are 4 different
                indicators they can enter: overall health for the day, pain
                level, glucose level and blood pressure. After they click next,
                they are taken into a Tex edit section where they have to enter
                a log in order to be a el to submit. Through out the wizard, the
                user is able to hit cancel in the top right corner and be routed
                into the dashboard.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Landing
