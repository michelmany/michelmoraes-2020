import React, { useState } from "react"
import { Container, Collapse, Navbar, NavbarToggler } from "reactstrap"
// import Link from "./link"
import { Link } from "gatsby"
import Navigation from "reactstrap-json-nav"
import navigation from "../data/navigation"
// import logo from "../assets/images/logo.svg"
import "../assets/stylesheets/burger-menu.scss"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const bodyEl = document.body
  const openbtn = document.getElementById("open-button")

  const toggle = () => {
    setIsOpen(!isOpen)
    toggleMenu()
  }

  function toggleMenu() {
    if (isOpen) {
      bodyEl.classList.remove("show-menu")
    } else {
      bodyEl.classList.add("show-menu")
    }
  }

  function closeMenu(ev) {
    var target = ev.target
    if (isOpen && target !== openbtn) {
      console.log("clicked")
      toggleMenu()
    }
  }

  return (
    <>
      <div className="menu-wrap">
        <nav className="menu">
          <div className="link-list">
            <Link
              to="/"
              activeClassName="active"
              activeStyle={{ opacity: 0.25 }}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              activeClassName="active"
              activeStyle={{ opacity: 0.25 }}
              onClick={closeMenu}
            >
              Portfolio
            </Link>
            <Link
              to="/projects"
              activeClassName="active"
              activeStyle={{ opacity: 0.25 }}
              onClick={closeMenu}
            >
              Startup Projects
            </Link>
            <Link
              to="/contact"
              activeClassName="active"
              activeStyle={{ opacity: 0.25 }}
              onClick={closeMenu}
            >
              Contact
            </Link>
            {/* <Navigation
              json={navigation}
              link={Link}
              activeClassName="active"
            /> */}
          </div>
        </nav>
      </div>
      <div className="menuHolder">
        <button
          id="open-button"
          className={`c-hamburger c-hamburger--htx ${
            isOpen ? "is-active" : ""
          }`}
          onClick={toggle}
        >
          <span>toggle menu</span>
        </button>
      </div>
      <div className="burguer-menu"></div>
    </>
  )
}

export default Header
