import React, { useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { useMessage } from '../../hooks/message.hook';
import PropTypes from 'prop-types';
import './registration.css'

const Registration = props => {

  const message = useMessage();
  const {request, error, clearError} = useHttp();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'driver'
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  };

  const registrationHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await request('/registration', 'POST', {...form});
      console.log(data);
    } catch(e) {

    }
  };


  return (
    <div className="registration">
      <h1 className="section__title">Registration</h1>
      <form
        onSubmit={registrationHandler}
        className="form registration__form">

        <div className="form__container">
          <label htmlFor="user-email" className="form__label">Email</label>
          <input
            type="text"
            id="user-email"
            name="email"
            placeholder="john@gmail.com"
            className="form__input"
            onChange={changeHandler}
          />
        </div>
        <div className="form__container">
          <label htmlFor="user-name" className="form__label">Name</label>
          <input
            type="text"
            id="user-name"
            name="name"
            placeholder="John Doe"
            className="form__input"
            onChange={changeHandler}
          />
        </div>
        <div className="form__container">
          <label htmlFor="user-password"
                 className="form__label">Password</label>
          <input
            type="password"
            id="user-password"
            name="password"
            className="form__input"
            onChange={changeHandler}
          />
        </div>
        <div className="form__container">
          <label htmlFor="user-role"
                 className="form__label">Role</label>
          <select
            id="user-role"
            name="role"
            className="form__input"
            onChange={changeHandler}
          >
            <option>driver</option>
            <option>shipper</option>
          </select>
        </div>
        <div className="form__container">
          <button
            type="submit"
            className="form__submit-button form__registration-button">
              Register
          </button>
        </div>
      </form>
    </div>
  );
};

Registration.propTypes = {

};

export default Registration;
