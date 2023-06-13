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
        <label for='firstName'>First Name: </label>
        <input id='firstName' type='text' onChange={handleInputChange} value={formData.firstName} />
        <br />
        <label for='lastName'>Last Name: </label>
        <input id='lastName' type='text' onChange={handleInputChange} value={formData.lastName} />
        <br />
        <label for='age'>Age: </label>
        <input id='age' type='text' onChange={handleInputChange} value={formData.age} />
        <br />
        <label for='email'>email: </label>
        <input id='email' type='text' onChange={handleInputChange} value={formData.email} />
        <br />
        <label for='address'>Address: </label>
        <input id='address' type='text' onChange={handleInputChange} value={formData.address} />
        <br />
        <label for='homeRoomClassNumber'>Home Room Class Number: </label>
        <input id='homeRoomClassNumber' type='text' onChange={handleInputChange} value={formData.homeRoomClassNumber} />
        <br />
        <label for='studentId'>Student ID: </label>
        <input id='studentId' type='text' onChange={handleInputChange} value={formData.studentId} />
        <br />
        
        <p>Favorite Lunch:</p>

        <input type='radio' id='ice-cream' value='ice-cream' name='favoriteLunch' onChange={handleInputChange} checked={formData.favoriteLunch === 'ice-cream'} />
        <label for='ice-cream'>Icecream</label><br />
        <input type='radio' id='pizza' value='pizza' name='favoriteLunch' onChange={handleInputChange} checked={formData.favoriteLunch === 'pizza'} />
        <label for='pizza'>Pizza</label><br />
        <input type='radio' id='salmon' value='salmon' name='favoriteLunch' onChange={handleInputChange} checked={formData.favoriteLunch === 'salmon'} />
        <label for='salmon'>Salmon</label><br />
        <input type='radio' id='salad' value='salad' name='favoriteLunch' onChange={handleInputChange} checked={formData.favoriteLunch === 'salad'} />
        <label for='salad'>Salad</label><br />
        <input type='radio' id='pasta' value='pasta' name='favoriteLunch' onChange={handleInputChange} checked={formData.favoriteLunch === 'pasta'} />
        <label for='pasta'>Pasta</label><br />
        <input type='radio' id='burger' value='burger' name='favoriteLunch' onChange={handleInputChange} checked={formData.favoriteLunch === 'burger'} />
        <label for='burger'>Burger</label><br />
        </form>
      </div>
      <div className={styles.inputDisplay}>
        <h2>Current User Input: </h2>
        <h4>{formData.firstName}</h4>
        <h4>{formData.lastName}</h4>
        <h4>{formData.age}</h4>
        <h4>{formData.email}</h4>
        <h4>{formData.address}</h4>
        <h4>{formData.homeRoomClassNumber}</h4>
        <h4>{formData.studentId}</h4>
        <h4>{formData.favoriteLunch}</h4>
      </div>

    </>
  );
}

export default Input;

