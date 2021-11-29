import React, { Fragment } from 'react';

//Components
import Formulario from './Components/Formulario';

function App() {
  return (
    <Fragment>
      <h1>Appointment manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
