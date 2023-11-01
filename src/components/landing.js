import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
}
export default class Calendar extends React.Component {

  render() {

    return (
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        dateClick={this.handleDateClick}
        eventContent={renderEventContent}
        events={[
            { title: 'Thanksgiving', date: '2023-11-23' },
            { title: 'Black Friday', date: '2023-11-24' }
          ]}
      />
    )
  }

  handleDateClick = (arg) => {
    alert(arg.dateStr)

  }
}
