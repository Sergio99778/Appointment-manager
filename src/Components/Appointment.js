import React from 'react';

const Appointment = ({ appointment, deleteAppointment }) => {
  return (
    <div className="cita">
      <p>
        Pet: <span>{appointment.pet}</span>
      </p>
      <p>
        Owner: <span>{appointment.owner}</span>
      </p>
      <p>
        Date: <span>{appointment.date}</span>
      </p>
      <p>
        Time: <span>{appointment.time}</span>
      </p>
      <p>
        Sintoms: <span>{appointment.sintoms}</span>
      </p>
      <button onClick={() => deleteAppointment(appointment.id)} className="button eliminar u-full-width">
        Eliminar &times;
      </button>
    </div>
  );
};

export default Appointment;
