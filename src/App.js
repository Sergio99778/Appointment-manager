import React, { Fragment, useState } from 'react';

//Components
import Formulario from './Components/Formulario';
import Appointment from './Components/Appointment';

function App() {
  //Appointments array
  const [appointments, setAppointments] = useState([]);

  //Create appointment
  const createAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };
  //Delete appointment
  const deleteAppointment = (id) => {
    const newAppointments = appointments.filter((appointment) => appointment.id !== id);
    setAppointments(newAppointments);
  };

  return (
    <Fragment>
      <h1>Appointment manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>Manage your appointments</h2>
            {appointments.map((appointment) => (
              <Appointment deleteAppointment={deleteAppointment} key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
