import react from "react";
import './Calendar.css';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
    return ( 
        <div>
            <div>
                <h2 className="schedule-title">Your Schedule</h2>
            </div>
            <div className="calendar-contain">
                <FullCalendar
                    plugins={[ dayGridPlugin, interactionPlugin ]}
                    initialView="dayGridMonth"
                    events={[
                        { title: 'event 1', date: '2019-04-01' },
                        { title: 'event 2', date: '2019-04-02' }
                      ]}
                />
            </div>
        </div>
     );
}
 
export default Calendar;