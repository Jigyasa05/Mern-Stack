import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAppContext from '../AppContex';

const Navbar = ({ cartItem }) => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  );

  const { loggedIn, logout } = useAppContext();


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/state">State Management

              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/event">Event Handling

              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Todo">Todo

              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Listpost">
                ListPost
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ManageUser">
                Manage
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/UpdateUser">
                Update
              </NavLink>
            </li>
            <h3>{cartItem}</h3>
          </ul>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            {
              loggedIn ? (
                <button className='btn btn-danger' onClick={logout}>Logout</button>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/Signup"

                    >
                      Signup
                    </NavLink>

                  </li>
                </>
              )
            }
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar