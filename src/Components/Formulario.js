import React, { Fragment } from 'react';

const Formulario = () => {
  return (
    <Fragment>
      <h2>Create appointment</h2>
      <form action="">
        <label htmlFor="">Pet's name</label>
        <input type="text" name="pet" className="u-full-width" placeholder="Pet's name" />
        <label htmlFor="">Owner's name</label>
        <input type="text" name="owner" className="u-full-width" placeholder="Owner's name" />
        <label htmlFor="">Date</label>
        <input type="date" name="date" className="u-full-width" />
        <label htmlFor="">Time</label>
        <input type="time" name="time" className="u-full-width" />
        <label htmlFor="">Sintoms</label>
        <textarea name="sintoms" className="u-full-width"></textarea>
        <button type="submit" className="u-full-width button-primary">
          Add appointment
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
