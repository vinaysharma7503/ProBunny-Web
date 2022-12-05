import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/user/logo.png'
import './Header.scss'

type Props = {}

const Header = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={logo} alt="" className='logo' /><span className='name'>ProBunnyProduction</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/comingsoon">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/registration'>Registration</Link>
        </li>
        <li className="nav-item">
          <Link to='/contact' className="nav-link">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header