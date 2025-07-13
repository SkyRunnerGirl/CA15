import AppointmentCard from "./AppointmentCard";
import { useState } from "react";

type CalendarProps = {
    appointments: Array<{ id: number, day: string, time: string, text: string }>
    deleteAppointment: (id: number) => void
    updateAppointment: (id: number, text: string) => void
}

export default function Calendar( {appointments, deleteAppointment, updateAppointment}: CalendarProps ) {
  const [selectedApptId, setSelectedApptId] = useState(0)

  const handleApptClick = (id: number) => {
    setSelectedApptId(id)
  }
  
  return (
    <>
    <div className = "row m-2 p-2">
        <h3 className="m-0 p-0 pb-2">Current Week</h3>
        {appointments.map(appt => (
          <AppointmentCard 
            key={appt.id} 
            id={appt.id} 
            day={appt.day} 
            time={appt.time} 
            text={appt.text} 
            onSelected={handleApptClick} 
            isSelected={appt.id === selectedApptId} 
            deleteAppointment={deleteAppointment}
            updateAppointment={updateAppointment}
          />
        ))}
    </div>
    </>
  );
  
}
