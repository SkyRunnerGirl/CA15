
type ApptCardProps = {
    id: number,
    day: string,
    time: string,
    text: string,
    isSelected: boolean,
    onSelected: (id: number) => void
    deleteAppointment: (id: number) => void
}

export default function AppointmentCard({ id, day, time, text, isSelected, onSelected, deleteAppointment}: ApptCardProps) {
  return (
    <div 
      onClick = { () => onSelected(id)}
      className={isSelected ? "border border-2 border-primary card m-0 mb-1 p-0" : "card m-0 mb-1 p-0"}>
      <div className="card-body">
        <p className="card-text">
          {day} {time} <br/>
          {text}
        </p>
        <div className="d-flex gap-3 m-0 p-0">
            <button className="btn btn-primary btn-sm">Update</button>
            <button className="btn btn-danger btn-sm" onClick={() => deleteAppointment(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
