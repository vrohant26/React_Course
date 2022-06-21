import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0 mb-2">
            <li className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Use State
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/" className="dropdown-item">
                    Regular Counter
                  </Link>
                </li>
                <li>
                  <Link to="UseStateBasics" className="dropdown-item">
                    Use State Basics
                  </Link>
                </li>

                <li>
                  <Link to="UseStateBasicsArray" className="dropdown-item">
                    Use State Basics Array
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Use Effect
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="UseEffectBasics" className="dropdown-item">
                    Use Effect Basics
                  </Link>
                </li>
                <li>
                  <Link to="UseEffectCleanup" className="dropdown-item">
                    Use Effect Cleanup
                  </Link>
                </li>

                <li>
                  <Link to="UseEffectSecondArgument" className="dropdown-item">
                    Use Effect Second Argument
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Fundamentals
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="Forms" className="dropdown-item">
                    Forms
                  </Link>
                </li>
                <li>
                  <Link to="Forms2" className="dropdown-item">
                    Forms 2
                  </Link>
                </li>

                <li>
                  <Link to="MultipleReturns" className="dropdown-item">
                    Multiple Returns
                  </Link>
                </li>
                <li>
                  <Link to="ShortCircuit" className="dropdown-item">
                    Short Circuit
                  </Link>
                </li>
                <li>
                  <Link to="ShowHideComponents" className="dropdown-item">
                    ShowHide Components
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="UseRef" className="nav-link">
                Use Ref
              </Link>
            </li>
            <li className="nav-item">
              <Link to="UseReducer" className="nav-link">
                Use Reducer
              </Link>
            </li>
            <li className="nav-item">
              <Link to="CustomHook" className="nav-link">
                Custom Hook
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Use Context
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="PropDrilling" className="dropdown-item">
                    Prop Drilling
                  </Link>
                </li>
                <li>
                  <Link to="UseContext" className="dropdown-item">
                    Use Context Basic
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="PropTypes" className="nav-link">
                Prop Types
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
