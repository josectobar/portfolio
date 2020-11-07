import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerGameHub from '../components/BannerGameHub'

import ghDashboard from '../assets/images/GHdashboard.png'
import createClan from '../assets/images/CreateClanView.png'
import inviteToClan from '../assets/images/invite-to-Clan-view.png'
import notificationsView from '../assets/images/notifications-view.png'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Projects</title>
      <meta name="description" content="Projects Page" />
    </Helmet>

    <BannerGameHub />

    <div id="main">
      <section id="one">
        <div className="inner">
          <p>
            This app was built using <strong>React Hooks</strong> in the front
            end. The authentication process was made with <strong>Auth0</strong>
            . many of the visual elements are part of{' '}
            <strong>Material UI</strong>. <strong>Redux</strong> was used for
            many of the React components that required shared data. Most of the
            styling was done with <strong>Styled Components</strong>. The
            backend runs on <strong>Nodejs</strong>, the server is based on{' '}
            <strong>ExpressJS</strong> and the
            <strong> PostgreSQL </strong>
            database is connected through <strong>Massive</strong>.
            <br />
            {`Please refer to `}
            <a
              href="https://github.com/EricCNielsen/gp-gamehub"
              target="_blank"
              alt="git repository"
            >
              the github repository
            </a>
            {` for information about the source code.`}
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <div className="image">
            <img src={ghDashboard} alt="dashbobard screenshot" />
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Dashboard</h3>
              </header>
              <p>
                The authentication process was made using Auth0, this allows
                users to be able to login using their existing accounts from
                Facebook, Google, Twitter, etc. After a user is authenticated,
                they are routed into the dashboard. In the dashboard, users can
                create a gaming clan, search for existing users/clans, view
                rankings and edit their profile information.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="image">
            <img src={createClan} alt="stats section" />
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Create a gaming Clan</h3>
              </header>
              <p>
                This modal allows users to create a gaming clan. They are able
                to set a profile picture, name, bio and gaming consoles for the
                clan that they are creating.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="image">
            <img src={inviteToClan} alt="wizard section" />
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Invite to Clan</h3>
              </header>
              <p>
                A user is able to search for other users and invite them to
                clans that they are part of, they can invite someone by clicking
                the invite button in the search section, this brings up a modal
                that all the clans that they are members of. There is some
                validation involved so they're not allowed to invite someone
                that is already part of a clan or if they had already been
                invited to that clan before.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="image">
            <img src={notificationsView} alt="wizard section" />
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Notifications</h3>
              </header>
              <p>
                The notification process starts in the navigation bar at the top
                of the page. A user can see the number of pending notifications
                in the bell to the left of the user's picture. If they click the
                bell, a modal pops and displayed all pending notifications for
                clan invitations, they have the ability to accept or decline an
                invitation.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Landing
