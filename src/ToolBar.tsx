import AddEventButton from "./AddEventButton";

type ToolbarProps = {
    addBlankAppointment: () => void
}

export default function ToolBar( {addBlankAppointment}: ToolbarProps ) {
  return (
    <div className="row m-2 p-2 align-items-center">
        <div className="col-auto">
            <select id="appt-day" className="form-select form-select-lg">
            <option value="">-- Select a Day --</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            </select>
        </div>

        <div className="col-auto input-group-lg">
            <input id="appt-time" type="time" className="form-control" />
        </div>

        <div className="col-sm-6 input-group-lg">
            <input id="appt-text" type="text" className="form-control" placeholder="Add appointment details"/>
        </div>

        <div className="col-auto">
            <AddEventButton addBlankAppointment={addBlankAppointment}/>
        </div>
    </div>
  );
}
