import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://twitter.com/josectobar" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/josectobar" className="icon fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/josectobar/"
            className="icon fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Jose Tobar 2019</li>
      </ul>
    </div>
  </footer>
)

export default Footer
