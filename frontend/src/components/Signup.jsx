import React from 'react';

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
    <form onSubmit={handleSubmit(onSubmit)} action="" >
      <h2>Sign Up Here</h2>
      <input
      {...register("email", {
        required: "Email is required",
      })}
       type="email"
       placeholder='Email'
        />
      <input
      {...register("password", {
        required: "password is required",
      })}
       type="password"
       placeholder='Password'
        />
        <button type='submit'>Submit</button>
    </form>
  )
}
