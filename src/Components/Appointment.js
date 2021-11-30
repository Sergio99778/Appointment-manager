import React from 'react';

const Appointment = ({ appointment }) => {
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
    </div>
  );
};

export default Appointment;
