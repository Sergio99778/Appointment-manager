import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';

const Formulario = ({ createAppointment }) => {
  //State Appointments
  const [appointment, setAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    sintoms: '',
  });

  const { pet, owner, date, time, sintoms } = appointment;
  //State Error
  const [error, setError] = useState(false);

  //Handle Change
  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  //Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate
    console.log('Handle Submit');
    if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || sintoms.trim() === '') {
      setError(true);
      console.log('If');
    } else {
      //Delete error message
      setError(false);
      //Asssign ID
      appointment.id = uuid();

      //Create appointment
      createAppointment(appointment);

      //Reset form
      setAppointment({
        pet: '',
        owner: '',
        date: '',
        time: '',
        sintoms: '',
      });
    }
  };

  return (
    <Fragment>
      <h2>Create appointment</h2>

      {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Pet's name</label>
        <input name="pet" className="u-full-width" type="text" placeholder="Pet's name" onChange={handleChange} value={pet} />
        <label htmlFor="">Owner's name</label>
        <input type="text" name="owner" className="u-full-width" placeholder="Owner's name" onChange={handleChange} value={owner} />
        <label htmlFor="">Date</label>
        <input type="date" name="date" className="u-full-width" onChange={handleChange} value={date} />
        <label htmlFor="">Time</label>
        <input type="time" name="time" className="u-full-width" onChange={handleChange} value={time} />
        <label htmlFor="">Sintoms</label>
        <textarea name="sintoms" className="u-full-width" onChange={handleChange} value={sintoms}></textarea>
        <button type="submit" className="u-full-width button-primary">
          Add appointment
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
