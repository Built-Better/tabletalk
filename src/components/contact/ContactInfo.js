import React from "react"

import "./ContactInfo.scss"

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <h2 className="text-center header-font font-weight-bold">
        Other Contacts at Table Talk
      </h2>
      {/* <div className="phone text-center">
        <h4>Telephone</h4>
        <a href="tel:+1250588-4927">+1 (250) 588-4927</a>
      </div> */}
      <div className="other-contact" style={{ marginTop: "3rem" }}>
        <div className="other-info">
          <h4>Parker Johnson</h4>
          <p>Table Talk Creator</p>
          <a href="mailto:johnsonparker27@gmail.com">
            johnsonparker27@gmail.com
          </a>
        </div>
        <span className="divider"></span>
        <div className="other-info">
          <h4>Vishnu Punwani</h4>
          <p>Key Facilitator</p>
          <a href="mailto:vishnupunwani17@gmail.com">
            vishnupunwani17@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
