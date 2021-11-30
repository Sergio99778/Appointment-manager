import React, { Fragment, useState } from 'react';

//Components
import Formulario from './Components/Formulario';

function App() {
  //Appointments array
  const [appointments, setAppointments] = useState([]);

  //Create appointment
  const createAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <Fragment>
      <h1>Appointment manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario createAppointment={createAppointment} />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
