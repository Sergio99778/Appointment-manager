import React, { Fragment, useState, useEffect } from 'react';

//Components
import Formulario from './Components/Formulario';
import Appointment from './Components/Appointment';

function App() {
  //Local storage
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initialAppointments) {
    initialAppointments = [];
  }

  //Appointments array
  const [appointments, setAppointments] = useState(initialAppointments);

  //If appointments changes --> update local storage
  useEffect(() => {
    if (initialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments]);

  //Create appointment
  const createAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };
  //Delete appointment
  const deleteAppointment = (id) => {
    const newAppointments = appointments.filter((appointment) => appointment.id !== id);
    setAppointments(newAppointments);
  };

  //Conditional title
  const title = appointments.length === 0 ? 'Add some appointments' : 'Manage your appointments';

  return (
    <Fragment>
      <h1>Appointment manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
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
