import React, { useState } from "react";
import styles from "./Input.module.css";
import './App.css';

function Input() {
  const [formData, setFormData] = useState({
    firstName: '', 
    lastName: '', 
    age: '', 
    email: '', 
    address: '', 
    homeRoomClassNumber: '', 
    studentId: '', 
    favoriteLunch: '',
  });
  function handleInputChange(e) {
    const { name, value } = e.target
    setFormData(prevState => ({...prevState, [name]: value}));

  }
  return (
    <>
      <div className={styles.emailContainer}>
        <h2>Let's stay connected.</h2>
        <p>
          If you would like to stay up-to-date with our latest products, connect
          with other students who share your interests and passion 
          and receive unique offers, please sign up for our newsletter 
        </p>
        <form>
        <label for='firstName'>First Name: </label>
        <input id='firstName' type='text' onChange={handleInputChange} value={formData.firstName} />

        <label for='lastName'>Last Name: </label>
        <input id='lastName' type='text' onChange={handleInputChange} value={formData.lastName} />

        <label for='age'>Age: </label>
        <input id='age' type='text' onChange={handleInputChange} value={formData.age} />

        <label for='email'>email: </label>
        <input id='email' type='text' onChange={handleInputChange} value={formData.email} />

        <label for='address'>Address: </label>
        <input id='address' type='text' onChange={handleInputChange} value={formData.address} />

        <label for='homeRoomClassNumber'>Home Room Class Number: </label>
        <input id='homeRoomClassNumber' type='text' onChange={handleInputChange} value={formData.homeRoomClassNumber} />

        <label for='studentId'>Student ID: </label>
        <input id='studentId' type='text' onChange={handleInputChange} value={formData.studentId} />
        
        <label for='lastName'>Last Name: </label>
        <input id='lastName' type='text' onChange={handleInputChange} value={formData.lastName} />
        </form>
      </div>
      <div className={styles.inputDisplay}>
        <h2>Current User Input: </h2>
        <h4>{formData.firstName}</h4>
      </div>

    </>
  );
}

export default Input;

