import React, { Fragment, useState } from 'react';

const Formulario = () => {
  //Adding State Appointments
  const [appointment, setAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    sintoms: '',
  });

  //Handle Change
  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };
  const { pet, owner, date, time, sintoms } = appointment;
  return (
    <Fragment>
      <h2>Create appointment</h2>
      <form action="">
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
