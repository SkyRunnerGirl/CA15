
type AddEventButtonProps = {
    addBlankAppointment: () => void
}

export default function AddEventButton( {addBlankAppointment}: AddEventButtonProps ) {
  return (
    <button
      className="btn btn-outline-dark btn-sm p-0 fs-6 text-center d-flex align-items-center"
      style={{ whiteSpace: "normal", maxWidth: "5rem" }}
      onClick={addBlankAppointment}
    >
      Add New Event
    </button>
  );
}
