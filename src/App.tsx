import { useState } from "react";
import Calendar from "./Calendar";
import ToolBar from "./ToolBar";
import { TEST_APPOINTMENTS } from "./myData";

export default function App() {

  const [appointments, setAppointments] = useState(TEST_APPOINTMENTS)

  const addBlankAppointment = () => {
    const blankAppointment = {
      id: appointments.length ? appointments[appointments.length - 1].id + 1 : 0,
      day: "DAY",
      time: "TIME",
      text: "DETAILS"
    }
    setAppointments( [blankAppointment, ...appointments ] )
  }

  const deleteAppointment = (idToDelete: number) => {
    setAppointments( appointments.filter( appt => appt.id !== idToDelete ) )
  }

  const updateAppointment = (idToUpdate: number, newText: string) => {
    setAppointments( appointments.map( appt => ( appt.id !== idToUpdate ? appt : {...appt, text: newText} ) ) )
  }

  return (
  <div>
    <h1 className="text-center m-2 p-2">Calendar App</h1>
    <ToolBar 
      addBlankAppointment={addBlankAppointment}
    />
    <Calendar 
      appointments={appointments} 
      deleteAppointment={deleteAppointment}
      updateAppointment={updateAppointment}
    />
  </div>
  )
}