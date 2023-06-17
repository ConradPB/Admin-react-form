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
        <h2>Hello. Welcome our school</h2>
        <p>
          Please feel in the following information so that we can get to know you better. 
        </p>
        <form>
        <h3>Personal Information</h3>
        <div className={styles.formRow}>
          <div className={styles.formColumn}>
            <label htmlFor='firstName'>First Name: </label>
            <input id='firstName' name='firstName' type='text' onChange={handleInputChange} value={formData.firstName} />
            </div> 
            <br />
        <div className={styles.formColumn}>
            <label htmlFor='lastName'>Last Name: </label>
            <input id='lastName' name='lastName' type='text' onChange={handleInputChange} value={formData.lastName} />
            </div>
            
        </div>
          <br />
        

        <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label htmlFor='age'>Age: </label>
              <input id='age' name='age' type='text' onChange={handleInputChange} value={formData.age} />
            </div>
            <br />
        <div className={styles.formColumn}>
            <label htmlFor='email'>Email: </label>
            <input id='email' name='email' type='text' onChange={handleInputChange} value={formData.email} />
            </div>
        </div>
        <h3>School Information</h3>
          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label htmlFor='address'>Address: </label>
              <input id='address' name='address' type='text' onChange={handleInputChange} value={formData.address} />
              
            </div>
            <div className={styles.formColumn}>
              <br />
              <label htmlFor='homeRoomClassNumber'>Home Room Class Number: </label>
              <input id='homeRoomClassNumber' name='homeRoomClassNumber' type='text' onChange={handleInputChange} value={formData.homeRoomClassNumber} />
            </div>
            <br />
            <div className={styles.formColumn}>
              <label htmlFor='homeRoomClassNumber'>Home Room Class Number: </label>
              <input id='homeRoomClassNumber' name='homeRoomClassNumber' type='text' onChange={handleInputChange} value={formData.homeRoomClassNumber} />
            </div>
            <div className={styles.formColumn}>
              <label htmlFor='studentId'>Home Room Class Number: </label>
              <input id='studentId' name='studentId' type='text' onChange={handleInputChange} value={formData.homeRoomClassNumber} />
            </div>
          </div>
        
        </form>
        <form>
  <h3>Favorite Lunch</h3>
  <p>What is your favorite lunch option?</p>
  <label>
    <input
      type="radio"
      name="favoriteLunch"
      value="pizza"
      onChange={handleInputChange}
      checked={formData.favoriteLunch === "pizza"}
    />
    Pizza
  </label>
  <br />
  <label>
    <input
      type="radio"
      name="favoriteLunch"
      value="tacos"
      onChange={handleInputChange}
      checked={formData.favoriteLunch === "tacos"}
    />
    Tacos
  </label>
  <br />
  <label>
    <input
      type="radio"
      name="favoriteLunch"
      value="sandwich"
      onChange={handleInputChange}
      checked={formData.favoriteLunch === "sandwich"}
    />
    Sandwich
  </label>
  <br />
  <label>
    <input
      type="radio"
      name="favoriteLunch"
      value="salad"
      onChange={handleInputChange}
      checked={formData.favoriteLunch === "salad"}
    />
    Salad
  </label>
</form>
      </div>
      <div className={styles.inputDisplay}>
        <h2>Current User Input</h2>
        {Object.entries(formData).map(([key, value]) => (
          <>
            <strong>{key}: </strong><span>{value}</span><br />
          </>
        ))}
      </div>

    </>
  );
}

export default Input;

