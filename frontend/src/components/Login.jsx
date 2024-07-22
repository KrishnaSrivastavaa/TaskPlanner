import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"

// import "./css/Signup.css"

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
    <div className='min-h-screen bg-indigo-950 content-center'>

    
    <form onSubmit={handleSubmit(onSubmit)} action="" className='flex flex-col gap-4 content-center' >
      <h2 className='text-white text-2xl font-bold p-2'>Log in Here</h2>
      <input className='rounded-xl bg-indigo-100 text-center h-10'
      {...register("email", {
        required: "Email is required",
      })}
       type="email"
       placeholder='Email'
        />
      <input className='rounded-xl bg-indigo-100 text-center h-10'
      {...register("password", {
        required: "password is required",
      })}
       type="password"
       placeholder='Password'
        />
        <button className='rounded-lg bg-indigo-700 text-white p-2' type='submit'>Submit</button>
    </form>
    </div>
  )
}
