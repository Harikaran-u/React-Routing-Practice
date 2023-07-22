// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => {
  const navItems = (
    <div className="home-page-cont">
      <div className="display-cont">
        <div className="nav-cont">
          <div className="logo-cont">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
              alt="wave"
            />
            <p className="web-name">Wave</p>
          </div>
          <ul className="nav-links-cont">
            <Link className="link-design" to="/">
              <li className="nav-links">Home</li>
            </Link>
            <Link className="link-design" to="/about">
              <li className="nav-links">About</li>
            </Link>
            <Link className="link-design" to="/contact">
              <li className="nav-links">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
  return navItems
}

export default Header
