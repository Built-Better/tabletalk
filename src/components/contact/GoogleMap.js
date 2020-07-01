import React from "react"
import { createMarkup } from "../../utililties/helper_functions/content_manipulations"

export default function GoogleMap() {
  const iframe =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42361.282764174706!2d-123.39424187640664!3d48.426203787232325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f738bddb06171%3A0x38e8f3741ebb48ed!2sVictoria%2C%20BC!5e0!3m2!1sen!2sca!4v1593546116092!5m2!1sen!2sca" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  return (
    <div
      className="mt-4 mb-5"
      dangerouslySetInnerHTML={createMarkup(iframe)}
    ></div>
  )
}
