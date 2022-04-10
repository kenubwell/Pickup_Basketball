import React from 'react';
import './Calendar.css';
import { Col, Row } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";

class Calendar extends React.Component {
    state = {
      events: [
        { title: "Waterloo (10:00 a.m.)", id: "1" },
        { title: "Waterloo (03:00 p.m.)", id: "2" },
        { title: "Lions Gate (10:00 a.m.)", id: "3" },
        { title: "Lions Gate (03:00 p.m.)", id: "4" },
        { title: "Cedar Park (10:00 a.m.)", id: "5" },
        { title: "Cedar Park (03:00 p.m.)", id: "6" },
        { title: "Meadowbrook (02:00 p.m.)", id: "7" }
      ]
    };
  
    /**
     * adding dragable properties to external events through javascript
     */
    componentDidMount() {
      let draggableEl = document.getElementById("external-events");
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function(eventEl) {
          let title = eventEl.getAttribute("title");
          let id = eventEl.getAttribute("data");
          return {
            title: title,
            id: id
          };
        }
      });
    }
  
    /**
     * when we click on event we are displaying event details
     */
    eventClick = eventClick => {
      Alert.fire({
        title: eventClick.event.title,
        html:
          `<div class="table-responsive">
        <table class="table">
        <tbody>
        <tr >
        <td>Title</td>
        <td><strong>` +
          eventClick.event.title +
          `</strong></td>
        </tr>
        <tr >
        <td>Attendance</td>
        <td><strong>
          <p>Number:<span>0</span></p><button>Yes</button>
        </strong></td>
        </tr>
        </tbody>
        </table>
        </div>`,
  
        showCancelButton: true,
        confirmButtonColor: "black",
        cancelButtonColor: "orange",
        confirmButtonText: "Delete",
        cancelButtonText: "Close"
      }).then(result => {
        if (result.value) {
          eventClick.event.remove(); // It will remove event from the calendar
          Alert.fire("Deleted", "Scheduled Court has been deleted.", "success");
        }
      });
    };
  
    render() {
      return (
        <div>
          <div>
                <h2 className="schedule-title">Your Schedule</h2>
          </div>
          <div className="fullcalen-contain">
            <div className='event-contain' id ="external-events">
            <div className="event-title-bg"><medium className = 'courts-title-event'>Courts</medium></div>
                  {this.state.events.map(event => (
                    <div
                      className="fc-event event-background"
                      title={event.title}
                      data={event.id}
                      key={event.id}
                    >
                      {event.title}
                    </div>
                  ))}
            </div>
            <div className="calendar-contain" id="mycalendartest">
                <FullCalendar
                  defaultView="dayGridMonth"
                  header={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                  }}
                  rerenderDelay={10}
                  eventDurationEditable={false}
                  editable={true}
                  droppable={true}
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  eventColor = 'orange'
                  eventTextColor="black"
                  events={this.state.calendarEvents}
                  eventDrop={this.drop}
                  eventReceive={this.eventReceive}
                  eventClick={this.eventClick}
                />
              </div>
          </div>
        </div>
      );
    }
  }

  export default Calendar;