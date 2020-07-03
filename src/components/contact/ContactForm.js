import React from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

import "./ContactForm.scss"

export default function ContactForm() {
  const { register, handleSubmit, reset, watch, errors } = useForm()

  // Netlify stuff
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const onSubmit = data => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => {
        reset()
        toast.success(
          "YOUR MESSAGE WAS SENT! \n ⏱️ We'll get to you as soon as we can!"
        )
      })
      .catch(error => alert(error))
  }

  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="post"
        name="contact"
      >
        {/* Netlify + Gatsby Stuff */}
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        {/* Netlify + Gatsby Stuff */}

        <h2 className="header-font">Send Us A Message</h2>

        <label htmlFor="fullName">Name</label>
        <input
          name="fullName"
          placeholder="First Name &amp; Last Name"
          ref={register({ required: true })}
        />
        {errors.fullName && (
          <span className="error">We need to know your name!</span>
        )}

        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="Email Address"
          ref={register({ required: true })}
        />
        {errors.email && <span className="error">We need your email!</span>}

        <label htmlFor="message">Your Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          ref={register({ required: true })}
          cols="30"
          rows="10"
        ></textarea>
        {errors.message && (
          <span className="error">You have to send us something!</span>
        )}

        <button type="submit">SEND MESSAGE</button>
      </form>
    </div>
  )
}
