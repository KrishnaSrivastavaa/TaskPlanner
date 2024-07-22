import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

import "./css/Signup.css"

export const Signup = () => {

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    
    try {
      const res = await fetch("http://localhost:3000/user/signup", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: data.email, password: data.password }) // Ensure the body matches the backend expectations
      });

      const data2 = await res.json();

      if (!res.ok) {
        throw new Error(data2.message || 'Something went wrong');
      }

      console.log(data2);
      reset();
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className='form-bg-div'>

   
    <form onSubmit={handleSubmit(onSubmit)} action="" className='form-main' >
      <h2 className='form-heading'>Sign Up Here</h2>
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
        
        <div className='flex flex-col gap-1 m-3'>
        <p className='text-white pb-0 m-auto'>Already have an account ?</p><Link className='text-white hover:text-indigo-400' to="/login">login</Link>
        </div>
    </form>
     
    </div>
  )
}
