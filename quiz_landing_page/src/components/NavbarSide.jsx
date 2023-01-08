import React from 'react'
import { NavLink } from 'react-router-dom'
import "./../assets/scss/_navbar.scss"
function NavbarSide() {
  const activeNavbar = {
    fontSize: 25,
    fontWeight: 900
  }
  return (
    <>
      <nav>
        <div className='nav'>
          <span className='home'><NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/"> Home</NavLink></span>
          <ul className='middle_side'>
            <li>
              <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/about"> About</NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/portfolio"> Portfolio</NavLink>

            </li>
            <li>
              <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/services"> Services</NavLink>

            </li>
            <li>
              <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/blog"> Blog</NavLink>
            </li>
          </ul>
          <div className='contact'>
            <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/contact">Contact</NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarSide