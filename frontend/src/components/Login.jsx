import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"

import "./css/Signup.css"

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    
    try {
      const res = await fetch("http://localhost:3000/user/signin", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: data.email, password: data.password }) // Ensure the body matches the backend expectations
      });

      const data2 = await res.json();

      if (!res.ok) {
        throw new Error(data2.message || 'Something went wrong');
      }else{
        navigate("/mytodos");
      }


      localStorage.setItem('jwtToken', data2.token);
      console.log(res);
      // reset();
    } catch (error) {
      console.error('Error:', error);
    }
  }


  return (
    <div className='form-bg-div'>

    
    <form onSubmit={handleSubmit(onSubmit)} action="" className='form-main' >
      <h2 className='form-heading'>Log in Here</h2>
      <input className='form-input'
      {...register("email", {
        required: "Email is required",
      })}
       type="email"
       placeholder='Email'
        />
      <input className='form-input'
      {...register("password", {
        required: "password is required",
      })}
       type="password"
       placeholder='Password'
        />
        <button className='form-submit-button' type='submit'>Submit</button>
    </form>
    </div>
  )
}
