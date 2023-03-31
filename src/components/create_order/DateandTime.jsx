import React, { useState } from 'react';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import {  Paper,  } from "@mui/material";

import Sidebar from "../sidebar/Sidebar";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const drawerWidth = 280;
const localizer = momentLocalizer(moment);

const events = [
  {
    id: 0,
    title: 'Meeting with John',
    start: new Date(2023, 3, 1, 10, 0, 0),
    end: new Date(2023, 3, 1, 11, 0, 0),
  },
  {
    id: 1,
    title: 'Lunch with Mary',
    start: new Date(2023, 3, 2, 12, 0, 0),
    end: new Date(2023, 3, 2, 13, 0, 0),
  },
  // add more events here...
];


function DateandTime() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const disablePastDates = date => {
    return date < new Date();
  };

  const handleSelectSlot = slotInfo => {
    // do something with the selected slot
    console.log(`Selected slot:`, slotInfo.start, slotInfo.end);
  };
  return (
    <>
       <Box sx={{ display: "flex" }}>
      <CssBaseline />
     <Sidebar/>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Paper>
        <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()}
        filterDate={disablePastDates}
      />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '500px' }}
        selectable
        onSelectSlot={handleSelectSlot}
        min={new Date()}
        max={moment()
          .endOf('month')
          .toDate()}
      />
    </div>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar']}>
        <DemoItem label="">
          <DateCalendar defaultValue={dayjs('2022-04-17')} disabled style={{width:"60vh",height:"70vh"}}/>
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider> */}
      {/* <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={handleDateClick}
        initialView="dayGridMonth"
        events={getEvents}
        eventClick={handleEventClick}
        

        // headerToolbar= {false}
      /> */}
        </Paper>           
      </Box>
    </Box>
    </>
  )
}

export default DateandTime
