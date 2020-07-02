import React from "react"
import { Link } from "gatsby"

import "./Footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import FooterLogo from "../../images/footer_logo.svg"

const Footer = () => {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-6 col-md-6 col-lg-3 order-1">
          <p className="font-weight-bold">Navigate</p>
          <p>
            <Link to="/" className="color-secondary">
              Home
            </Link>
          </p>
          <p>
            <Link to="/events" className="color-secondary">
              Events
            </Link>
          </p>
          <p>
            <Link to="/services" className="color-secondary">
              Services
            </Link>
          </p>
          <p>
            <Link to="/local_businesses" className="color-secondary">
              Local Businesses
            </Link>
          </p>
          <p>
            <Link to="/contact" className="color-secondary">
              Contact
            </Link>
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-3 order-3 order-md-2">
          <p className="font-weight-bold">Contact</p>
          <a href="tel:+1250588-4927" className="color-secondary">
            <p>+1 (250) 588-4927</p>
          </a>
          <a
            href="mailto:thisistabletalk@gmail.com"
            className="color-secondary"
          >
            <p>thisistabletalk@gmail.com</p>
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-3 order-4 order-md-3">
          <p className="font-weight-bold">Social Media</p>
          <a
            href="https://www.facebook.com/thisistabletalk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-link">
              <FontAwesomeIcon icon={faFacebookF} />
              <p>This Is Table Talk</p>
            </div>
          </a>
          <a
            href="https://www.instagram.com/builtbetter.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-link">
              <FontAwesomeIcon icon={faInstagram} />
              <p>@ThisIsTableTalk</p>
            </div>
          </a>
          <a
            href="https://twitter.com/builtbettertech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-link">
              <FontAwesomeIcon icon={faTwitter} />
              <p>@ThisIsTableTalk</p>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-6 col-lg-3 order-2 order-md-4">
          <img
            className="ft-logo"
            src={FooterLogo}
            alt="This is Table Talk Full Logo"
          />
        </div>
      </div>
      <div className="ft-bottom">
        <p className="copy text-center">
          © {new Date().getFullYear()} This is Table Talk
        </p>
        <p className="builtbetter">
          <a href="https://builtbetter.tech/">
            Built Better in Victoria BC
            <FontAwesomeIcon className="footer-heart" icon={faHeart} />
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
