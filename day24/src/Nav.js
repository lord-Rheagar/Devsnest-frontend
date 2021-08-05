import './App.css';
import {Link} from 'react-router-dom'

function Nav() {
  const navStyle={
    color:"white"
  }
  return (
    <nav>
        <h3>
            Home
        </h3>
        <ul className="nav-links">

          <Link style={navStyle} to="/about">
            <li>About</li>
            </Link>

            <li>Profile</li>
            <Link style={navStyle} to="/shop">
            <li>Dashboard</li>
            </Link>
        </ul>
    </nav>
  );
}


export default Nav;