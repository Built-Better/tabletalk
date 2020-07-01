import React, { useEffect, useState, createRef, useLayoutEffect } from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import listPlugin from "@fullcalendar/list"

// must manually import the stylesheets for each plugin
import "@fullcalendar/daygrid/main.css"
import "@fullcalendar/list/main.css"
import "./Calendar.scss"

export default function Calendar() {
  const calendar_id = "qkav3svfbo9sp6uo02linq2828@group.calendar.google.com"
  const api_key = "AIzaSyDKNdzqDgn532Txp-9sGUjR1-VElQXjXh4"
  const [events, setEvents] = useState([])
  const [listView, setListView] = useState(false)
  const calendarRef = createRef()

  const getGoogleCalendarEvents = () => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${calendar_id}/events?key=${api_key}&singleEvents=true&maxResults=9999`
      )
      .then(res => {
        const events = res.data.items.map(item => {
          return {
            title: item.summary,
            start: item.start.dateTime,
            end: item.end.dateTime,
            description: item.description,
            location: item.location,
          }
        })
        setEvents(events)
      })
  }

  // fetch data from google on mount
  useEffect(() => {
    getGoogleCalendarEvents()
  }, [])

  // Toggle view for screen sizes
  useEffect(() => {
    function updateSize() {
      if (window.innerWidth < 768 && !listView) {
        console.log(calendarRef)
        if (calendarRef.current) {
          let api = calendarRef.current.getApi()
          api.changeView("listWeek")
          console.log(api)
        }
        setListView(true)
      } else if (window.innerWidth >= 768 && listView) {
        if (calendarRef.current) {
          let api = calendarRef.current.getApi()
          api.changeView("dayGridMonth")
          console.log(api)
        }
        setListView(false)
      }
    }

    window.addEventListener("resize", updateSize)
    updateSize()

    return () => window.removeEventListener("resize", updateSize)
  }, [calendarRef])

  const formatTime = (startObj, endObj) => {
    const getMeridiem = twentyFourHour => {
      if (twentyFourHour < 12 && !(twentyFourHour >= 24)) return "AM"
      else return "PM"
    }
    const getHour = twentyFourHour => {
      if (twentyFourHour % 12 === 0) return "12"
      else return (twentyFourHour % 12).toString()
    }
    const getMinutes = minutes => {
      if (minutes === 0) return "00"
      else return minutes.toString()
    }

    const startMeridiem = getMeridiem(startObj.getHours())
    const endMeridiem = getMeridiem(endObj.getHours())
    const startHour = getHour(startObj.getHours())
    const endHour = getHour(endObj.getHours())
    const startMinutes = getMinutes(startObj.getMinutes())
    const endMinutes = getMinutes(endObj.getMinutes())

    return `${startHour}:${startMinutes} ${startMeridiem} - ${endHour}:${endMinutes} ${endMeridiem}`
  }

  const EventDetailRender = ({ event, el }) => {
    formatTime(event.start, event.end)
    const content = (
      <div className="custom-event">
        <div className="title">{event.title}</div>
        <div className="time">{formatTime(event.start, event.end)}</div>
        <div>{event.extendedProps.location}</div>
      </div>
    )
    return content
  }

  return (
    <FullCalendar
      initialView="dayGridMonth"
      headerToolbar={{
        left: "prev,next today",
        center: "",
        right: "title",
      }}
      plugins={[dayGridPlugin, listPlugin]}
      events={events}
      eventContent={EventDetailRender}
      ref={calendarRef}
    />
  )
}
