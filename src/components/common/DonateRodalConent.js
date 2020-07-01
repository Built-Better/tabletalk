import React from "react"

import "./DonateRodalContent.scss"
import Button from "./Button"

export default function DonateRodalContent() {
  return (
    <div className="donate-rodal text-center">
      <h1>DONATE TO TABLE TALK</h1>
      <div className="dotted-border"></div>
      <p>Thank you!</p>
      <p>
        {" "}
        By donating today, you are helping support the set up of future Table
        Talk events. At our events and during our community sessions we provide
        our guests with a safe space to talk as well as refreshments and food.
      </p>
      <p>
        Talk Talk is very active within the community and donations like yours
        make this possible!
      </p>
      <p>
        It has always been a priority of the platform to help other platforms,
        artists, and initiatives. After all, community is about lifting one
        another up.
      </p>
      <div className="dotted-border"></div>
      <h2>You Can Donate Today by Clicking the Button Below</h2>
      <Button
        type="primary"
        size="large"
        title="Donate Today"
        externalLink="https://www.paypal.com/donate/?token=geMkdAaxMJz2oUmQB-1bJBPRNT46kN8qokLzv1fYLrHYLTqmbfED1ovqhHoM75D5Ul-3zG&country.x=CA&locale.x=CA"
      />
    </div>
  )
}
