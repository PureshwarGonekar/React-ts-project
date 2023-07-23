import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
interface FormData {
  name: string;
  phoneNumber: string;
  email: string;  
}

function Form() {
    const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Save the user details to local storage
    localStorage.setItem('userDetails', JSON.stringify(formData));
   
    const items = JSON.parse(localStorage.getItem('userDetails') || '{}');

    const isAnyParamEmpty = Object.values(items).some((param) => param === '');
    
    if (isAnyParamEmpty) {
        alert('Please fill in all the details before submitting!');
    }
    else{
        console.log("submited");
        // console.log(items);
         navigate('/second-page');
    }
  };

  return (
    <>
      <h1 className='heading'>Hello Welcome... </h1>
      <div className='container'>
          <header>Fill the Form</header>
          <form onSubmit={handleSubmit} className='form'>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Phone Number:
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <div className='submit'>
              {/* <button type="submit" >Submit</button> */}
              <Button variant="contained" type="submit">Submit</Button>
            </div>
          </form>
      </div>
    </>
  );
}

export default Form;
